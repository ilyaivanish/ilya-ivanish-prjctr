import { addRandomEmoticonToInput } from "./emoji.js";
import { renderArray } from "./renderLists.js";
const input = document.getElementById("inputValue");
const submitButton = document.getElementById("addButton")
const arrayList = document.getElementById("arrayList")
const setList = document.getElementById("setList")


const startApp = () => {
  
  const array = new Array()
  const set = new Set(); // Инициализация сета

  function addItem() {
    const inputValue = input.value;
    
    // Добавление в массив
    renderArray(array, inputValue, arrayList)

    // Добавление в сет, если значение еще не существует
    set.add(inputValue);
    console.log(set)
    setList.innerHTML = '';
    set.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      setList.appendChild(li);
    });
  
    input.value = addRandomEmoticonToInput(input); // Підставляємо в інпут після відправки новий емодзі
  }

  addRandomEmoticonToInput(input)

  submitButton.addEventListener("click", addItem);

}

document.addEventListener('DOMContentLoaded', startApp);
