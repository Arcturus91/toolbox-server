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
  console.log("proper datalines", dataLines);

  const lines = dataLines.map((dataLine, idx) => {
    const text = dataLine.split(",")[1];
    const number = dataLine.split(",")[2];
    const hex = dataLine.split(",")[3];
    console.log(dataLine, text, number, hex);
    return { text, number, hex };
  });
  const file = dataLines[0].split(",")[0];

  console.log((responseObject = { file, lines }));

  return JSON.stringify(responseObject);
};

module.exports = csvToJson;
