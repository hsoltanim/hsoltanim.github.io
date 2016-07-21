function putEmail() {
    var eml = 'hso'
    eml += 'lta'
    eml += 'nim'
    eml += '@g'
    eml += 'ma'
    eml += 'il'
    eml += '.c'
    eml += 'om'

    var link = document.createElement("a");
    link.setAttribute("href", "mailto:" + eml);
    link.appendChild(document.createTextNode(eml));
    var spans = getElementsByClass("span", "myemail");
    for (var i = 0; i < spans.length; i++)
        spans[i].parentNode.replaceChild(link.cloneNode(true), spans[i]);
}

function getElementsByClass(elem, classname) {
    var classes = new Array();
    var alltags = document.getElementsByTagName(elem);
    for (i = 0; i < alltags.length; i++)
        if (alltags[i].className == classname)
            classes[classes.length] = alltags[i];
    return classes;
}