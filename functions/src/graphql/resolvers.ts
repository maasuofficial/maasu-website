export default {
  Query: {
    hello: (parent: any, args: any, context: any) => {
      return 'Hello world!'
    }
  }
}
