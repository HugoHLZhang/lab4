function changeBgColor(color){
    document.querySelectorAll('td').forEach(
        e => { 
            e.style.backgroundColor = color; 
    });
}

function changeBorderSpacing(pixel){
    document.getElementsByTagName('table')[0].border = pixel; 
    document.getElementsByTagName('table')[0].cellSpacing = pixel;
}

function changeTableWidth(width){
    document.getElementsByTagName('table')[0].style.width = width;
}