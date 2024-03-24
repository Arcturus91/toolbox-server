const express = require('express')
const axios = require('axios');
const requestAllFilesOptions = require('./constants/constants');
const app = express()

app.get('/files/data', async (req, res) => {
  try {
    const axiosRes = await axios(requestAllFilesOptions);
    const filesListRes = axiosRes.data.files;
    
    console.log('files list res', filesListRes);
    
    res.send(filesListRes);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});
  

app.listen('3000',()=>{console.log('server listening')})