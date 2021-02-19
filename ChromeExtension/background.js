chrome.browserAction.onClicked.addListener(function () {
  const appsScriptUrl =
    'https://script.google.com/a/macros/mshcruz.com/s/AKfycbw2ukfV11c-pTWiN4EpdsErCVNu20IBHg7J3APEKO9mkO8-teUHzqX0/exec';
  $.get(appsScriptUrl, function (result) {
    const clientsData = JSON.parse(result);

    if (!clientsData || clientsData.length === 0) {
      const errorNotification = {
        type: 'basic',
        iconUrl: 'media/logo48.png',
        title: 'Error!',
        message: 'Client data not available.',
      };
      chrome.notifications.create(
        'requestErrorNotification',
        errorNotification
      );
      return;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: 'inputClientsData', clients: clientsData },
        function (response) {
          console.log(response);
        }
      );
    });
  });
});