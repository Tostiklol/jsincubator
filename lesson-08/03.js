/*
* Напишите функцию truncate, которая принимает строку и максимальную длину.

* Если длина строки превышает указанное количество символов, функция должна обрезать строку до этой длины и добавлять в конец многоточие (...).
* В противном случае функция должна возвращать исходную строку.

* Пример работы функции:
* truncate("Вот, что мне действительно нравится в этом", 20) // Ожидаемый результат: "Вот, что мне действи..."
* truncate("Короткая строка", 20) // Ожидаемый результат: "Короткая строка"
*/

function truncate(str, maxLength) {
  console.log("Входные данные:", { str, maxLength, length: str.length });
  
  const strLength = str.length;
  if (strLength <= maxLength) {
    console.log("Короткая строка, возвращаю:", str);
    return str;
  }
  
  const charsToKeep = maxLength - 3;
  console.log("charsToKeep:", charsToKeep);
  
  const truncatedPart = str.slice(0, charsToKeep);
  console.log("truncatedPart:", truncatedPart);
  
  const result = truncatedPart + "...";
  console.log("Результат:", result);
  
  return result;
}
