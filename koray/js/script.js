// Sayfa yüklendiğinde çalışacak basit kodlar
window.onload = function() {
    // Menüdeki linkleri bul
    var linkler = document.querySelectorAll('nav a');
    var suankiAdres = window.location.href;

    // Döngü ile linkleri kontrol et
    for (var i = 0; i < linkler.length; i++) {
        var link = linkler[i];
        
        // Eğer linkin adresi tarayıcıdaki adres ile aynıysa
        if (link.href === suankiAdres) {
            link.className += " active";
        }
    }
};
