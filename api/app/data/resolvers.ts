import Posting from 'App/Models/Posting'
import Database from '@ioc:Adonis/Lucid/Database'

interface PostingSchema {
  readonly href: string
  readonly summary: string
}

const resolvers = {
  Query: {
    postings: async () => await Database.query().from('postings'),
    posting: async () => await Database.query().from('postings').limit(1),
  },
  Mutation: {
    createPosting: async (root :any, args: PostingSchema) => { //(root, args, context, info)
      void(root) // syntax sugar to lint unused param
      const posting = new Posting()
      posting.href = args.href.toString().trim()
      posting.summary = args.summary.toString().trim().toLocaleLowerCase()
      const result = await posting.save()
      return result.toString()
    },
  },
}

export default resolvers
