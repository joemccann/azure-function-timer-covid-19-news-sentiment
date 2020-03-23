const test = require('tape')

const build = require('../build-sentiment-files/')

test('sanity', t => {
  t.ok(true)
  t.end()
})

test('pass - build', async t => {
  const { err, data } = await build()
  if (err) {
    console.error(err)
    t.end()
    return
  }
  t.ok(data)
  console.log(data)
  t.end()
})
