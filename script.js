// script.js

document.getElementById('startButton').addEventListener('click', startEchoCancellation);

function startEchoCancellation() {
    // Change button and status text when clicked
    document.getElementById('startButton').disabled = true;
    document.getElementById('startButton').innerText = 'Processing...';
    document.getElementById('status').innerText = 'Processing the audio...';

    // Show the loading spinner
    document.getElementById('loadingIndicator').style.display = 'block';

    // Show the visualization container
    document.getElementById('visualization').style.display = 'block';

    // Start the animation to simulate echo cancellation process
    let progressBar = document.createElement('div');
    progressBar.classList.add('visualization-bar');
    document.getElementById('visualization').appendChild(progressBar);

    // Simulate the echo cancellation process
    setTimeout(() => {
        // After animation completes, reset and show completion message
        document.getElementById('status').innerText = 'Echo cancellation complete!';
        document.getElementById('startButton').innerText = 'Start Again';
        document.getElementById('startButton').disabled = false;
        
        // Hide the loading indicator and progress bar
        document.getElementById('loadingIndicator').style.display = 'none';
        progressBar.remove();
    }, 2500); // Animation duration matches the progress bar animation duration
}


// Simulate echo cancellation completion
function onEchoCancellationComplete() {
    // Hide the progress panel
    document.querySelector('.processing-panel').style.display = 'none';

    // Show the speaker icon and download button
    document.querySelector('.after-processing').style.display = 'flex';
    document.querySelector('#download-btn').style.display = 'inline-block';  // Make download button visible
}

// Call this function when echo cancellation is completed (after processing logic)
onEchoCancellationComplete();


document.getElementById('startButton').addEventListener('click', startEchoCancellation);

function startEchoCancellation() {
    // Change button and status text when clicked
    document.getElementById('startButton').disabled = true;
    document.getElementById('startButton').innerText = 'Processing...';
    document.getElementById('status').innerText = 'Processing the audio...';

    // Show the loading spinner
    document.getElementById('loadingIndicator').style.display = 'block';

    // Show the visualization container
    document.getElementById('visualization').style.display = 'block';

    // Start the animation to simulate echo cancellation process
    let progressBar = document.createElement('div');
    progressBar.classList.add('visualization-bar');
    document.getElementById('visualization').appendChild(progressBar);

    // Simulate the echo cancellation process
    setTimeout(() => {
        // After animation completes, reset and show completion message
        document.getElementById('status').innerText = 'Echo cancellation complete!';
        document.getElementById('startButton').innerText = 'Start Again';
        document.getElementById('startButton').disabled = false;

        // Hide the loading indicator and progress bar
        document.getElementById('loadingIndicator').style.display = 'none';
        progressBar.remove();

        // Show the after-processing panel with download button
        document.querySelector('.after-processing').style.display = 'flex';
        document.getElementById('download-btn').style.display = 'inline-block';  // Make download button visible
    }, 2500); // Animation duration matches the progress bar animation duration
}
