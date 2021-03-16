// Input data on page's form
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'inputClientsData') {
    const registerButton = document.getElementById('registerButton');
    for (const client of message.clients) {
      registerWhenReady(registerButton, client);
    }
  }
});

// Wait until register button is enabled before entering data
function registerWhenReady(registerButton, client) {
  if (registerButton.disabled) {
    setTimeout(() => {
      registerWhenReady(registerButton, client);
    }, 500);
  } else {
    const columnNameElementIDMap = {
      "Code": 'code',
      "Name": 'name',
      "Address": 'address',
      "Country": 'country',
      "Type": 'type',
      'Discount Percentage': 'discount',
      'Credit Limit': 'limit',
      'Credit Status': 'status',
      'Payment Terms': 'terms',
      "Language": 'language',
      "Currency": 'currency',
      "Active": 'active',
    };
    for (let [key, value] of Object.entries(client)) {
      const elementID = columnNameElementIDMap[key];
      if (elementID === 'active') {
        document.getElementById(elementID).checked = (value === 'YES');
      } else {
        document.getElementById(elementID).value = value;
      }

    }
    registerButton.click();
  }
}
