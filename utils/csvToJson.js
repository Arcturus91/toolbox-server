const csvToJson = (csvData) => {
  const csvArray = csvData.toString().split("\n");
  const dataHeaders = csvArray[0];
  csvArray.shift();
  const dataLines = csvArray
    .map((line, idx) => {
      const itemsInLine = line.split(",").length;
      if (itemsInLine !== 4) return null;
      return line;
    })
    .filter((item) => item !== null);
  if (dataLines.length === 0) console.log("dataline empty");
  const lines = dataLines
    .map((dataLine, idx) => {
      const text = dataLine.split(",")[1];
      const number = dataLine.split(",")[2];
      const hex = dataLine.split(",")[3];

      if (text.length === 0 || number.length === 0 || hex.length === 0)
        return null;

      return { text, number, hex };
    })
    .filter((item) => item !== null);
  const file = dataLines[0].split(",")[0];

  if (lines.length === 0) return null;
  console.log("response object", (responseObject = { file, lines }));
  return responseObject;
};

module.exports = csvToJson;