import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class Scrape extends BaseCommand {

	/**
	 * Command Name is used to run the command
	 */
  public static commandName = 'scrape'

	/**
	 * Command Name is displayed in the "help" output
	 */
  public static description = ''

  public async handle () {
    this.logger.info('Hello world!')
  }

  public async run () {
    this.logger.info('Hello world!')
  }
}
