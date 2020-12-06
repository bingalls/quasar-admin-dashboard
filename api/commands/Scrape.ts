import { BaseCommand } from '@adonisjs/core/build/standalone'
// import { Element } from 'nightmare';
import Nightmare from 'nightmare';

// interface ScrapeElement extends Element {
//   href: string,
//   text: string
// }

export default class Scrape extends BaseCommand {

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

      // Set large timeout of 150 seconds, default is 30
      const nm = new Nightmare({
        waitTimeout: 150000,
      });

      // Grab the list from the webpage
      const list = await nm.goto(url)
        .wait('body')
        .evaluate(function() {
          const items = [];
          document.querySelectorAll('h3.result-heading > a')
            // .forEach((el: ScrapeElement) => {
            .forEach((el) => {
                items.push({"href": el.href, "text": el.text})
            });
          return items;
        })
        // .catch(function(error: string) {
        //   console.error('did not get list', error);
        // });

        console.dir(list);

      await nm.end();
    }
}
