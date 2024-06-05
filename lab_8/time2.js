function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);

let totalDegrees = 0;

    function showTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0'); //now.getHours(): берёт текущий час из объекта now в формате числового значения
        const minutes = String(now.getMinutes()).padStart(2, '0'); // String(now.getHours()): преобразует полученное числовое значение в строку
        const seconds = String(now.getSeconds()).padStart(2, '0'); //.padStart(2, '0'): добавляет ведущий ноль, если строка имеет длину меньше 2 символов. Если строка уже имеет длину 2 символа, то она остаётся неизменной.
        const timeString = ${hours}:${minutes}:${seconds};
            
        document.getElementById('time').textContent = timeString;
        document.getElementById('seconds').textContent = seconds;

        const secondHand = document.getElementById('second-hand');
        totalDegrees += 3; 
        secondHand.style.transform = rotate(${totalDegrees}deg); //rotate(${totalDegrees}deg): задает значение свойства transform в виде строки, которая указывает на вращение элемента на определенный угол.
    }

setInterval(showTime, 1000);