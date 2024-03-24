const express = require("express");
const axios = require("axios");
const {
  requestAllFilesOptions,
  getRequestFileOptions,
} = require("./constants/constants");
const csvToJson = require("./utils/csvToJson");
const app = express();

app.get("/files/data", async (req, res) => {
  try {
    const axiosFilesRes = await axios(requestAllFilesOptions);
    const filesListRes = axiosFilesRes.data.files;
    const formattedFiles = await Promise.all(
      filesListRes.map(async (fileList) => {
        try {
          const axiosSingleFileRes = await axios(
            getRequestFileOptions(fileList)
          );
          return csvToJson(axiosSingleFileRes.data);
        } catch (error) {
          console.log("axios(getRequestFileOptions) error", fileList);
          return null;
        }
      })
    );
    const jsonFiles = formattedFiles.filter((item) => item !== null);
    res.send(jsonFiles);
  } catch (error) {
    console.log(
      "Error while making get request to /files/data",
      error.response
    );
    res.status(500).send(JSON.stringify(error.response));
  }
});

app.listen("3000", () => {
  console.log("server listening");
});
