//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

function repeatString(str, num, separator) {
    return `${str} `.repeat(num).trimEnd().split(' ').join(separator)
}

console.log(repeatString("yo", 3, ","))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

function checkStart(str, beginWith) {
    return str.toLowerCase().slice(0, beginWith.length) === beginWith.toLowerCase()
}
console.log(checkStart("Incubator", "inc"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

function truncateString(str, num) {
    return str.length > num ? `${str.slice(0, num)}...` : str;
}

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
// split()

function getMinLengthWord(str) {
    return typeof str === "string" && str
        ? str.split(' ').find(el => el.length === Math.min(...str.split(' ').map(el => el.length)))
        : null
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"));

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

function setUpperCase(str) {
    return str.toLowerCase().split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')
}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false




function isIncludes(str, incl) {
    let arr = [];

        for (let i = 0; i < incl.length; i++) {
            for (let j = 0; j < str.length; j++) {
                if (incl[i].toLowerCase() === str[j].toLowerCase()
                    && !(arr.find(el => el === incl[i]))
                ) {
                    arr.push(incl[i].toLowerCase());
                }
            }
        }


    return arr.length === incl.length;
}

console.log(isIncludes("Incubator", "Cut"))