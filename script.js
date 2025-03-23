const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

// "Evet" butonuna basılırsa emoji göster
yesBtn.addEventListener("click", function() {
    response.innerText = "Tebrikler doğru hap'ı seçtiniz😅";
    sendData("YEŞİL");
});

// "Hayır" butonuna basılırsa buton kaçar
noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("click", function() {
    response.innerText = "😂";
    sendData("KIRMIZI");
});

// Google Sheets'e veri gönderme fonksiyonu
function sendData(choice) {
    fetch("https://script.google.com/macros/s/AKfycbybha84gxI3JLLsl2spqsqaAzcgvBw3n169P_YtJ8W8PLjAH3uJgaobfZgPoezXJaHoCQ/exec" + choice)
    .then(response => console.log("Kaydedildi: " + choice))
    .catch(error => console.error("Hata: ", error));
}
