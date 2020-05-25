exports.handler = function(event: any, context: any, callback: (a: any, b: any) => {}) {
  callback(null, {
    statusCode: 200,
    body: 'Hello, World'
  })
}
