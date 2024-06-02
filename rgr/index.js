//хэш - ed719ba6b195690f94e552c9dbf53dc1

comp = 0xbf53dc1 % 600; //определение варианта компании
menu = 0xbf53dc1 % 9; //определение варианта меню
val = 0xbf53dc1 % 43; //определение варианта валюты

console.log('Компания:', comp); 
console.log('Меню:',menu); 
console.log('Валюта:',val);

// Новости
function readNews (){
    document.querySelector('.newsDop').style='display:block;';
    document.querySelector('.read').style='display:none;';
    document.querySelector('.skr').style='display:block;';
}
function skrNews(){
    document.querySelector('.skr').style='display:none;';
    document.querySelector('.newsDop').style='display:none;';
    document.querySelector('.read').style='display:block;';
}
// Курс Валют
function cursIDR(){
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    fetch (url)
        .then( function(response){
            return response.json();
        })
        .then( function(json){
            let IDR = json.Valute.IDR.Value / 10000;
            let num = document.querySelector('.num');
            let from = document.querySelector('.from');
            let result = document.querySelector('.result');

            if (from.value == 'IDR'){
                result.value =  (num.value * IDR).toFixed(5);
            }
            else{
                result.value =  (num.value * (1/IDR)).toFixed(5);
            }
        })
}