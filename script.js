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
        loader.classList.add('hidden');
    }, 2000);
};
function openFolder() {
    document.getElementById('folderOverlay').classList.remove('hidden');
}

function closeFolder() {
    document.getElementById('folderOverlay').classList.add('hidden');
}
