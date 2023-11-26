let intervalId;  

function checkAdStatus() {
    if (location.hostname === "www.youtube.com") {
        const adIndicator = document.querySelector(".ytp-ad-text");
        //const adStatus = adIndicator ? "An ad is playing." : "No ad is playing.";
        // console.log(adStatus) - use for debugging
          if (adIndicator) {
            const skipButton = document.querySelector(".ytp-ad-skip-button-container button");
            if (skipButton) {
              skipButton.click();
            }
          }
        }
}

// check if current url is youtube.com 
function isYouTubeTab(url) {
    return url.includes("youtube.com");
  }
  
  // Function to start or stop polling based on tab visibility
  function handleTabVisibilityChange() {
    if (document.visibilityState === 'visible' && isYouTubeTab(window.location.href)) {
      // Run the check periodically (every 1 second in this example)
      intervalId = setInterval(checkAdStatus, 1000);
    } else {
      // Stop the polling if the tab is not visible or not on YouTube
      clearInterval(intervalId);
    }
  }
  
  // Initial check and set up event listener for tab visibility changes
  handleTabVisibilityChange();
  document.addEventListener('visibilitychange', handleTabVisibilityChange);