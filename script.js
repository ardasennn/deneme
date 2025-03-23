const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

// "Evet" butonuna basılırsa emoji göster
yesBtn.addEventListener("click", function() {
    // Önceden yazıyı temizle
    response.innerText = "Tebrikler doğru hapı seçtiniz😅";
    sendData("YEŞİL");
});

// "Hayır" butonuna basılırsa buton kaçar
noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    
    // Ekran dışına çıkmamayı sağlayan koşul
    noBtn.style.left = `${Math.min(x, window.innerWidth - noBtn.clientWidth)}px`;
    noBtn.style.top = `${Math.min(y, window.innerHeight - noBtn.clientHeight)}px`;
});

noBtn.addEventListener("click", function() {
    // Kırmızı butona tıklandığında yazıyı sadece bir kez ekle
    if (response.innerText !== "Tebrikler doğru hapı seçtiniz😅") {
        response.innerText = "😂";
    }
    sendData("KIRMIZI");
});

// Google Sheets'e veri gönderme fonksiyonu
function sendData(choice) {
    fetch("https://script.google.com/macros/s/AKfycbybha84gxI3JLLsl2spqsqaAzcgvBw3n169P_YtJ8W8PLjAH3uJgaobfZgPoezXJaHoCQ/exec?choice=" + choice)
    .then(response => console.log("Kaydedildi: " + choice))
    .catch(error => console.error("Hata: ", error));
}
