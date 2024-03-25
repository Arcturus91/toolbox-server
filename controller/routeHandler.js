const axios = require('axios')
const {
  requestAllFilesOptions,
  getRequestFileOptions
} = require('../constants/constants')
const csvToJson = require('../utils/csvToJson')

const healthCheck = (req, res) => {
  res.send('Hey, hi!')
}

const filesFormatter = async (req, res) => {
  let { fileName } = req.query

  if (fileName) {
    try {
      fileName = fileName.includes('.csv') ? fileName : `${fileName}.csv`

      const axiosSingleFileRes = await axios(getRequestFileOptions(fileName))

      res.send(csvToJson(axiosSingleFileRes.data))
    } catch (error) {
      console.log(`single file request error ${fileName}`, error.message)
      res
        .status(400)
        .send(JSON.stringify({ message: 'File requested not found' }))
    }
  } else {
    try {
      const axiosFilesRes = await axios(requestAllFilesOptions)
      const filesListRes = axiosFilesRes.data.files
      const formattedFiles = await Promise.all(
        filesListRes.map(async (fileName) => {
          try {
            const axiosSingleFileRes = await axios(
              getRequestFileOptions(fileName)
            )
            return csvToJson(axiosSingleFileRes.data)
          } catch (error) {
            console.log(
              `axios(getRequestFileOptions) error ${fileName}`,
              error.message
            )
            return null
          }
        })
      )
      const jsonFiles = formattedFiles.filter((item) => item !== null)
      res.send(jsonFiles)
    } catch (error) {
      console.log(
        'Error while making get request to /files/data',
        error.message
      )
      res.status(500).send(JSON.stringify(error.message))
    }
  }
}

const filesList = async (req, res) => {
  try {
    const axiosFilesRes = await axios(requestAllFilesOptions)
    const filesListRes = axiosFilesRes.data.files
    res.send(filesListRes)
  } catch (error) {
    console.log(
      'Error while making get request to /files/list',
      error.response
    )
    res.status(500).send(JSON.stringify(error.response))
  }
}

module.exports = { filesFormatter, healthCheck, filesList }
