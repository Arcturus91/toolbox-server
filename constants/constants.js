 const url = 'https://echo-serv.tbxnet.com/v1/secret/files';

 const authToken = 'Bearer aSuperSecretKey'; 

 const requestAllFilesOptions = {
    method: 'get',
    url: url,
    headers: { 
      'Authorization': authToken,
      'Content-Type': 'application/json'
    }
  };

  module.exports = requestAllFilesOptions;