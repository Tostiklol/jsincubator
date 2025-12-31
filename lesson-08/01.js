/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  const words = str.split(' ');
  const capitalizedWords = [];
for (let i = 0; i < words.length; i++) {
    const word = words[i];
if (word.length > 0) {
      const firstLetter = word[0].toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      capitalizedWords.push(firstLetter + restOfWord);
    } else {
      capitalizedWords.push('');
    }
  }

return capitalizedWords.join(' ');
}
