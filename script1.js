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
        loader.classList.add('hidden'); // Hide loader after 2 se