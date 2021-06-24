$(".toggle-btn").click(function () {
    let lightColor = '#6edebe';
    let darkColor = '#2f3f5a';
    let mutedColor = 'rgba(0, 0, 0, 0.1)';
    if (document.body.style.getPropertyValue('--main-color') === darkColor) {
        document.body.style.setProperty('--main-color', lightColor);
        document.body.style.setProperty('--secondary-color', mutedColor);

    } else {
        document.body.style.setProperty('--main-color', darkColor);
        document.body.style.setProperty('--secondary-color', lightColor);
    }

    $(this).toggleClass("active")
})