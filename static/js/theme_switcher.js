document.getElementById('theme_selector').onchange = changeColor;
var theme = document.getElementById('theme_selector')

function changeColor() {
    var arg = theme.value;
    switch (arg) {
        case '1': // Space
            document.body.style.backgroundImage = "url('static/images/bg1.png')";
            document.documentElement.style.setProperty('--highlight', '#2bb2ff')
            document.documentElement.style.setProperty('--copyrightcol', '#ffffff')
            break;
        case '2': // Molecular
            document.body.style.backgroundImage = "url('static/images/bg2.png')";
            document.documentElement.style.setProperty('--highlight', '#ff5a5a')
            document.documentElement.style.setProperty('--copyrightcol', '#191611')
            break;
        case '3': // Creative
            document.body.style.backgroundImage = "url('static/images/bg3.png')";
            document.documentElement.style.setProperty('--highlight', '#ff81c3')
            document.documentElement.style.setProperty('--copyrightcol', '#ffffff')
            break;
        case '4': // Natural
            document.body.style.backgroundImage = "url('static/images/bg4.png')";
            document.documentElement.style.setProperty('--highlight', '#20c587')
            document.documentElement.style.setProperty('--copyrightcol', '#ffffff')
            break;
        case '5': // Silver
            document.body.style.backgroundImage = "url('static/images/bg5.png')";
            document.documentElement.style.setProperty('--highlight', '#a7a7a7')
            document.documentElement.style.setProperty('--copyrightcol', '#191611')
            break;
        default: // Sunlight
            document.body.style.backgroundImage = "url('static/images/bg0.png')";
            document.documentElement.style.setProperty('--highlight', '#ffb32b')
            document.documentElement.style.setProperty('--copyrightcol', '#ffffff')
    }
    return false;
}
changeColor();