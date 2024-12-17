// Функция для кодирования сообщения
function encrypt(textForEncrypt, encryptKey) {
    let encryptedText = '';

    return encryptedText;
}

//Основная функция для запуска программы
function main() {
    // Читаем строку с файла (вход.txt)
    const fs = require("fs");
    let textInFile = fs.readFileSync("вход.txt");
    let text = String(textInFile);

    // Если длина текста равна 100, то формируем массив - ключ 10 на 10 из нулей и единиц
    let A = []; //инициализация пустого массива - ключа
    if (text.length == 100) {
        for (let i = 0; i < 10; i++) {
            b = [];
            for (let j = 0; j < 10; j++) {
                b[j] = Math.floor(Math.random() * 2);
            }
            A.push(b)
        }
    }
    // Если длина текста больше 100, обрезаем строку до 100 символов и формируем массив - ключ 10 на 10 из нулей и единиц
    if (text.length > 100) {
        for (let i = 0; i < 10; i++) {
            b = [];
            for (let j = 0; j < 10; j++) {
                b[j] = Math.floor(Math.random() * 2);
            }
            A.push(b);
        }

        text = text.slice(0, 100);
        console.log(text.length);

    }
    //дополняем строку пробелами до длины в 100 и формируем массив - ключ 10 на 10 из нулей и единиц
    if (text.length < 100) {
        for (let i = 0; i < 10; i++) {
            b = [];
            for (let j = 0; j < 10; j++) {
                b[j] = Math.floor(Math.random() * 2);
            }
            A.push(b);
        }

        let textLenght = text.length; //Фиксируем количество символов в строке до начала цикла
        for (let i = 0; i < (100 - textLenght); i++) {
            text += " ";
        }
    }

    console.log("Исходный текст: " + text);

    //шифруем текст
    let encryptedText = encrypt(text, A);
    console.log("Зашифрованный текст: " + encryptedText);
}

main();