function showDate() {
    let out = document.getElementById('current-date')
    let today = new Date();
    out.innerHTML = today.toLocaleString('ru-RU');

    let out2 = document.getElementById('current-dateSP')
    let today2 = new Date();
    out2.innerHTML = today2.toLocaleString('es');

    let out3 = document.getElementById('current-dateME')
    let today3 = new Date();
    out3.innerHTML = today3.toLocaleString('es-MX');

    let out4 = document.getElementById('current-dateJA')
    let today4 = new Date();
    out4.innerHTML = today4.toLocaleString('ja-JA');

    let out5 = document.getElementById('current-dateSV')
    let today5 = new Date();
    out5.innerHTML = today5.toLocaleString('sv-SE');

    let out6 = document.getElementById('current-dateEG')
    let today6 = new Date();
    out6.innerHTML = today6.toLocaleString('ar-EG');
}