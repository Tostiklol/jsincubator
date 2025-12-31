/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
    const trimmedStr = str.trim();
    
    if (trimmedStr === '') {
        return false;
    }
    
    // Пробуем преобразовать
    const num = Number(trimmedStr);
    
    // Проверяем базовые условия
    if (isNaN(num) || !isFinite(num)) {
        return false;
    }
    
    // Проверяем что вся строка - число
    // Используем более строгую проверку
    const parsed = parseFloat(trimmedStr);
    
    // Если parseFloat вернул NaN - это не число
    if (isNaN(parsed)) {
        return false;
    }
    
    // Проверяем с помощью регулярного выражения
    // Разрешает: цифры, точка, знак минуса/плюса, экспонента
    return /^[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?$/.test(trimmedStr);
}

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
