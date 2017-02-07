(function () {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    const startingPoint = Object.getOwnPropertyNames(window);
    const keys = startingPoint.filter(function(prop) {
        return !iframe.contentWindow.hasOwnProperty(prop);
    });
    console.log(keys);
    document.body.removeChild(iframe);
}());
