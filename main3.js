const names = ['Bob', 'Alex', 'Donald', 'anne', 999, 'Игорь', 'юрий', '#'];

// console.log([...names].sort())

// 1. Сортирует по юникоду строки из коробки
// 2. Работает мутабельно(мутирует исходный массив)
// 3. Возвращает ссылку на исходный массив (массив будет отсортирован)
// 4. С sort часто используется .reverse()

// console.log(names.reverse())

const nums = [9, 10, 1, 667, 80];

/*const compFn = (a, b) => {  //по возрастанию
    if (a <= b) {
        return -1;
    } else {
        return 1;
    }
}*/

const compFn = (a, b) => a - b

// console.log(nums.sort(compFn));

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

const sortedByAge = students.sort((a, b) => a.age - b.age)

/*const sortedByName = students.sort((a, b) => {
    if (a.name.toLocaleLowerCase() <= b.name.toLocaleLowerCase()) {
        return -1;
    } else {
        return 1;
    }
})*/

//сортировка для строк
const sortedByName = students.sort((a, b) => a.name.localeCompare(b.name))
// console.log(sortedByName)

const numbers = [12, 100, 40, 34, 10, 23, 67, 55, 99, 78];

for (let j = 0; j < numbers.length - 1; j++) {              //сортировка пузырьком (по возврастанию)
    let isSorted = true;
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if (numbers[i] > numbers[i + 1]) {
            isSorted = false;
            /*let temp = numbers[i];
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = temp;*/
            [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]]
        }
    }
    if (isSorted) break;
}

console.log(numbers)