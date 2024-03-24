 const urlAllFiles = 'https://echo-serv.tbxnet.com/v1/secret/files';
const urlSingleFile = 'https://echo-serv.tbxnet.com/v1/secret/file/'
 const authToken = 'Bearer aSuperSecretKey'; 

 const requestAllFilesOptions = {
    method: 'get',
    url: urlAllFiles,
    headers: { 
      'Authorization': authToken,
      'Content-Type': 'application/json'
    }
  };

  const getRequestFileOptions = (fileName)=>{
    
    return {method: 'get',
    url: urlSingleFile + `${fileName}`,
    headers: { 
      'Authorization': authToken,
      'Content-Type': 'application/json'}
    }
  }

  module.exports = {requestAllFilesOptions, getRequestFileOptions};