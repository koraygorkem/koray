
window.onload = function() {
    
    var linkler = document.querySelectorAll('nav a');
    var suankiAdres = window.location.href;

    
    for (var i = 0; i < linkler.length; i++) {
        var link = linkler[i];
        
        
        if (link.href === suankiAdres) {
            link.className += " active";
        }
    }
};
