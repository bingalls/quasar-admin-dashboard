import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Posting from 'App/Models/Posting'

export default class PostingSeeder extends BaseSeeder {
  public async run () {
    // Normalizing summaries as all lower-case
    await Posting.createMany([
      {
        href: 'http://localhost/nodejs',
        summary: 'senior Nodejs developer in bermuda',
      },
      {
        href: 'http://localhost/svelte',
        summary: 'remote svelte coder experienced in lite code',
      },
    ])
  }
}
