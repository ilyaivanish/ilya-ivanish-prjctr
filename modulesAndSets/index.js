const arrayEmotikon = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸']; // Массив с эмотиконами
const array = new Array()
const set = new Set(); // Инициализация сета
const inputValue = document.getElementById("inputValue").value;
const submitButton = document.getElementById("addButton")
const arrayEl = document.getElementById("arrayList")
const setEl = document.getElementById("setList")


const startApp = () => {

  function addItem() {
    const inputValue = document.getElementById("inputValue").value;

    
    if (inputValue.trim() !== "") {
      // Добавление в массив
      array.push(inputValue);
      let arrayItem = document.createElement("li");
      arrayItem.appendChild(document.createTextNode(inputValue));
      arrayEl.appendChild(arrayItem);

      // Добавление в сет, если значение еще не существует
      if (!set.has(inputValue)) {
        set.add(inputValue);
        let setItem = document.createElement("li");
        setItem.appendChild(document.createTextNode(inputValue));
        setEl.appendChild(setItem);
      }
    }
    
    document.getElementById("inputValue").value = ""; // Очистка инпута
  }

  function getRandomEmoji() {
    let randomIndex = Math.floor(Math.random() * arrayEmotikon.length);
    let randomEmoji = arrayEmotikon[randomIndex];
    document.getElementById("inputValue").value = randomEmoji;
  }

  submitButton.addEventListener("click", addItem);
  submitButton.addEventListener("click", getRandomEmoji);

  window.addEventListener("DOMContentLoaded", getRandomEmoji);

}
document.addEventListener('DOMContentLoaded', startApp);

// document.addEventListener('DOMContentLoaded', getRandomEmoji);


// 

// const startApp = () => {
//   const array = new Array();
//   const set = new Set();

//   insertRandomEmoji();

//   formHandler((item) => {
//     array.push(item);
//     set.add(item);
//     renderer(array, set);
//   });
// };

// document.addEventListener('DOMContentLoaded', startApp);