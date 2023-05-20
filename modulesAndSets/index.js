import { addRandomEmoticonToInput } from "./emoji.js";
import { renderArray, renderSet } from "./renderLists.js";
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
    renderSet(set, inputValue, setList)
  
    input.value = addRandomEmoticonToInput(input); // Підставляємо в інпут після відправки новий емодзі
  }

  addRandomEmoticonToInput(input)

  submitButton.addEventListener("click", addItem);

}

document.addEventListener('DOMContentLoaded', startApp);
