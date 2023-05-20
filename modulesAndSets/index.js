import { addRandomEmoticonToInput } from "./emoji.js";

const array = new Array()
const set = new Set(); // Инициализация сета

const input = document.getElementById("inputValue");
const submitButton = document.getElementById("addButton")
const arrayList = document.getElementById("arrayList")
const setList = document.getElementById("setList")


const startApp = () => {

  function addItem() {
    const inputValue = document.getElementById("inputValue").value;

    
    
      // Добавление в массив
      array.push(inputValue);
      console.log(array)
      let arrayItem = document.createElement("li");
      arrayItem.appendChild(document.createTextNode(inputValue));
      arrayList.appendChild(arrayItem);

      // Добавление в сет, если значение еще не существует
    
      set.add(inputValue);
      console.log(set)
      setList.innerHTML = '';
      set.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        setList.appendChild(li);
      });
    
      
    
    
    document.getElementById("inputValue").value = ""; // Очистка инпута
    addRandomEmoticonToInput(input)
  }

  addRandomEmoticonToInput(input)

  submitButton.addEventListener("click", addItem);
  submitButton.addEventListener("click", addRandomEmoticonToInput(input));


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