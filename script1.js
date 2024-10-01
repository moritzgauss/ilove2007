window.onload = function() {
    const loader = document.getElementById('loader');
    const loadingText = document.getElementById('loadingText');

    let typingEffect = setInterval(() => {
        if (loadingText.textContent.length < 10) {
            loadingText.textContent += ".";
        } else {
            loadingText.textContent = "Loading";
        }
    }, 300);

    // Fading out loader after 2 seconds
    setTimeout(() => {
        clearInterval(typingEffect);
        loader.classList.add('hidden'); // Hide loader after 2 seconds
    }, 2000);
};

function openFolder(event) {
    event.stopPropagation(); // Prevent triggering the document click
    document.getElementById('folderOverlay').style.display = 'flex'; // Show folder overlay
    document.querySelector('.blur-container').classList.add('active'); // Add blur class
}

function closeFolder() {
    document.getElementById('folderOverlay').style.display = 'none'; // Hide folder overlay
    document.querySelector('.blur-container').classList.remove('active'); // Remove blur class
}

// Close folder when clicking outside of it
document.getElementById('folderOverlay').addEventListener('click', closeFolder);
document.querySelector('.folder-content').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent closing the folder when clicking inside
});
