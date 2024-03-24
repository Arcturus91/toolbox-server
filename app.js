const express = require('express')
const axios = require('axios');
const {requestAllFilesOptions, getRequestFileOptions} = require('./constants/constants');
const csvToJson = require('./utils/csvToJson');
const app = express()

app.get('/files/data', async (req, res) => {
  try {
    const axiosFilesRes = await axios(requestAllFilesOptions);
    const filesListRes = axiosFilesRes.data.files;

    const axiosSingleFileRes = await axios(getRequestFileOptions(filesListRes[2]))
    console.log('single file data', axiosSingleFileRes.data)

    csvToJson(axiosSingleFileRes.data)

    res.send(csvToJson(axiosSingleFileRes.data));
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});
  

app.listen('3000',()=>{console.log('server listening')})