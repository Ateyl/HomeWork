// Для задоного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл
const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);                              // * не совсем понял как это сделать
    } if (i > 22 ) {
        break
    }
}


// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/

const people = [{name: 'Jack', surname: 'Smith'}, {name: 'Bob', surname: 'Summers'}, {name: 'Sarah', surname: 'Gold'}, {name: 'Susan', surname: 'Vega'}, {name: 'Mary', surname: 'Roberts'}];

let html = "<ul>";

for (let i = 0; i < people.length; i++) {
  html += `<li><h1></h1></li>`;
}

html += "</ul>";

console.log(html);



// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное



    function EvenOdd (start, end) {
        for (let i = start; i <= end; i++) {
            const even = i % 2 === 0;
            console.log(`${i} - ${even ? 'even' : 'odd'}`);
        }
    }

    EvenOdd (1, 20)



// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх


function maxNum (a, b ,c) {
    let max = a; 
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max
}
let result = maxNum (10, 34 ,35);
console.log(` the biggest number - ${result}`);




// Fizz Buzz
// Для диапозона чисел от 1 до 100
// написать программу которая выведет в консоль число и FIZZ если число делится на 3 без остатка
// выведет в консоль число и BUZZ если число делится на 5 без остатка
// выведет в консоль число и FIZZ BUZZ если число делится на 3 и на 5 без остатка


for (let i = 1; i <=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FIZZ BUZZ`);
    } else if (i % 3 === 0) {
        console.log(`${i} FIZZ`);
    } else if (i % 5 === 0) {
        console.log(`${i} BUZZ`);
    }

}
