var roll1 = {
    name : 'Kappa Maki',
    cucumber : 20,
    rise : 50,
    cheese : false,
    salmon : false,
    seaweed : 10,
    tomato :20,
    price : 50
}

var roll2 = {
    name : 'Tay',
    cucumber : false,
    rise : 50,
    cheese : 10,
    salmon : 20,
    seaweed : 10,
    tomato : false,
    price : 100
}

var roll3 = {
    name : 'MakMai',
    cucumber : false,
    rise : 50,
    cheese : 10,
    salmon : 20,
    seaweed : 10,
    tomato : 10,
    price : 150
}

console.log('Ролл' + roll1.name + 'составляет'+(roll1.cucumber + roll1.rise + roll1.cheese + roll1.salmon + roll1.seaweed + roll1.tomato ) + 'калорий' )
console.log('Ролл' + roll2.name + 'составляет'+(roll2.cucumber + roll2.rise + roll2.cheese + roll2.salmon + roll2.seaweed + roll2.tomato ) + 'калорий' )
console.log('Ролл' + roll3.name + 'составляет'+(roll3.cucumber + roll3.rise + roll3.cheese + roll3.salmon + roll3.seaweed + roll3.tomato ) + 'калорий' )
console.log('цена за две ' + roll3.name + ' состовляет ' + (roll3.price*2) + ' грн.')
console.log('Вы заказали: ' + roll2.name + ' и ' + roll3.name + '. Общая стоимость ' + (roll2.price + roll3.price) + ' грн.')

