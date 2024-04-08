// expects the name of a function, e.g. 'members'
const { handler } = require(`./build/${process.argv[2]}.js`)

// clear console
const lines = process.stdout.getWindowSize()[1]
for (let i = 0; i < lines; i++) {
  console.log('\r\n')
}

handler({}, {})
  .then((res) => console.log(res))
  .catch((e) => console.error(e))
