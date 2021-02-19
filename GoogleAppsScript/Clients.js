function doGet(e) {
  const clientsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Clients');
  const clientsData = clientsSheet.getRange(2, 1, clientsSheet.getMaxRows(), clientsSheet.getMaxColumns()).getValues();
  clientsData.unshift(
    ['code', 'name', 'address',
      'country', 'type', 'discount',
      'limit', 'status', 'terms',
      'language', 'currency', 'active']);
  return ContentService.createTextOutput(JSON.stringify(biArrayToObject(clientsData)));
}

// From https://stackoverflow.com/a/22917499/1027723
function biArrayToObject(data) {
  const header = data.shift();
  const obj = data.map(function (values) {
    return header.reduce(function (o, k, i) {
      o[k] = values[i];
      return o;
    }, {});
  });
  return obj;
}