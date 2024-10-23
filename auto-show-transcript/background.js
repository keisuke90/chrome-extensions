chrome.commands.onCommand.addListener((command) => {
  if (command === "run-show-transcript") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: showTranscript,
      });
    });
  }
});

function showTranscript() {
  const transcriptButton = document.querySelector(
    'button[aria-label="Show transcript"]'
  );
  if (transcriptButton) {
    transcriptButton.click();
  } else {
    console.log("Transcript button not found.");
  }
}
