// Scrape `url` into db. See also https://github.com/adonisjs/core/discussions/1952

// import { ace } from '@adonisjs/core/build/'
import { BaseCommand } from '@adonisjs/core/build/standalone'
// import Element from 'node_modules/'
import Nightmare from 'nightmare'

// import Posting from '../app/Models/Posting'

// interface ScrapeElement extends Element {
//   href: string,
//   text: string
// }

export default class Scrape extends BaseCommand {
  public static needsApplication = true

  public static settings = {
    loadApp: true,
  }

	/**
	 * Command Name is used to run the command
	 */
  public static commandName = 'scrape'

	/**
	 * Command Name is displayed in the "help" output
	 */
  public static description = ''

    // Example of recursively extracting text from each list item at
    // https://lowrey.me/scraping-wikipedia-with-nightmare/
    public async run () {
      const url = `https://newyork.craigslist.org/d/computer-gigs/search/cpg`
      this.logger.info(`Scraping ${url}`)

      // const Db = (await import('@ioc:Adonis/Lucid/Database')).default
      // const Orm = (await import('@ioc:Adonis/Lucid/Orm')).default
      const Posting = (await import('../app/Models/Posting')).default

      // Set large timeout of 150 seconds, default is 30
      const nm = new Nightmare({
        waitTimeout: 150000,
      });

      // Grab the list from the webpage
      try {
        await nm.goto(url)
          .wait('body')
          .evaluate(function() {
            document.querySelectorAll('h3.result-heading > a')

              // .forEach((el: ScrapeElement) => {
              .forEach(async (el) => {
                const searchPayload = {"href": el.href.trim()}
                const savePayload = {"summary": el.text.trim().toLocaleLowerCase()}
                await Posting.firstOrCreate(searchPayload, savePayload)
              });
          })
      }
      catch(error) {
        console.error('did not get list', error)
      }

      await nm.end()
    }
}
