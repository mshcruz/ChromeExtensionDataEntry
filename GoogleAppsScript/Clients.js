function doGet(e) {
  const clientsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Clients');
  const clientsData = clientsSheet.getDataRange().getValues();

  return ContentService.createTextOutput(JSON.stringify(biArrayToObject(clientsData)));
}

// Based on https://mashe.hawksey.info/2018/02/google-apps-script-patterns-using-the-destructuring-assignment-syntax-and-object-arrays-to-process-google-sheet-rows/#comment-184960
function biArrayToObject(data) {
  const header = data.shift();
  const object = data.map(function (row) {
    const nextRowObject = header.reduce(function (accumulator, currentValue, currentIndex) {
      accumulator[currentValue] = row[currentIndex];
      return accumulator;
    }, {});
    return nextRowObject;
  });

  return object;
}