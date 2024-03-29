// When extension icon is clicked, retrieve data and send message for data entry
chrome.action.onClicked.addListener((tab) => {
  const appsScriptUrl =
    'https://script.google.com/a/macros/mshcruz.com/s/AKfycbw2ukfV11c-pTWiN4EpdsErCVNu20IBHg7J3APEKO9mkO8-teUHzqX0/exec';
  fetch(appsScriptUrl)
    .then(response => response.json())
    .then(clientsData => {
      chrome.tabs.sendMessage(
        tab.id,
        { action: 'inputClientsData', clients: clientsData }
      );
    })
    .catch(error => {
      console.error(error);
    });
});