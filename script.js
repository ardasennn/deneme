const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", function() {
    response.innerText = "Tebrikler doğru hap'ı seçtiniz😅";
    sendData("YEŞİL");
});

noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("click", function() {
    response.innerText = "😂";
    sendData("KIRMIZI");
});

function sendData(choice) {
    fetch("https://script.google.com/macros/s/AKfycbybha84gxI3JLLsl2spqsqaAzcgvBw3n169P_YtJ8W8PLjAH3uJgaobfZgPoezXJaHoCQ/exec?choice=" + choice)
    .then(response => console.log("Kaydedildi: " + choice))
    .catch(error => console.error("Hata: ", error));
}
