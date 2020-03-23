require('dotenv').config()
const build = require('covid-19-news-sentiment')
const { read } = require('azure-blob-storage')

const account = process.env.BLOB_SERVICE_ACCOUNT_NAME
const container = process.env.AZURE_STORAGE_CONTAINER
const increment = process.env.INCREMENT
const jobDataFile = process.env.JOB_DATA_FILENAME

module.exports = async (ctx, myTimer) => {
  console.log('>>>>> firing.................')
  //
  // Step 1: Fetch the latest jobs data file
  //
  const { err, data: meta } = await read({
    account,
    container,
    filename: jobDataFile
  })

  if (err) {
    console.error(err)
    return { err }
  }

  let json = null

  try {
    json = JSON.parse(meta)
  } catch (err) {
    console.error(err)
    return { err }
  }
  //
  // The `lastId` is the last message
  // that was analyzed
  //
  const { lastId } = json

  {
    const { err, data } = await build({
      start: lastId,
      increment
    })

    if (err) {
      console.error(err)
      return { err }
    }

    console.log('>>> Successfully wrote new files.')
    console.log(data)
    return { data }
  }
}
