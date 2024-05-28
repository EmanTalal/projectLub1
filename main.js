function openDeviceWindow(width, height) {
    let websiteLink = document.getElementById('website-link').value;
    if (websiteLink) {
        window.open(websiteLink, '_blank', `width=${width},height=${height}`);
    } else {
        ("non")
    }
}