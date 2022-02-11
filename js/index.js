/**
* @param {}  
 * @returns {}
 * This function is used to trigle progress bar animation
 */
function showProgress() {
  const progressBars = document.getElementsByClassName('progress-bar') // Get all progress bar elements

  for (let pb of progressBars) {
    pb.classList.add('show-progress') // Add show-progress class to each progress bar
    
    let width = 50; // Set initial width

    const interval = setInterval(() => { // Set interval to increase width
      if (width >= 100) {
        clearInterval(interval)
      } else {
        width++;
        pb.innerHTML = `${width}%` // Update progress bar width
      }
    }, 50)  
  }
}