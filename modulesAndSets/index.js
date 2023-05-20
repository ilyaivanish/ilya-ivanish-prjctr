import { addRandomEmoticonToInput } from "./emoji.js";
import { updateArray, updateSet } from "./renderLists.js";

const input = document.getElementById("inputValue");
const submitButton = document.getElementById("addButton")
const arrayList = document.getElementById("arrayList")
const setList = document.getElementById("setList")


const startApp = () => {
  
  const array = new Array()
  const set = new Set();
  
  addRandomEmoticonToInput(input) // Додаємо емодзі при завантаженні сторінки

  function addItem() {
    const inputValue = input.value;
    
    updateArray(inputValue, array, arrayList)
    updateSet(inputValue, set, setList)
  
    input.value = addRandomEmoticonToInput(input); // Після додавання оновлюємо інпут з новим емодзі  
  }

  submitButton.addEventListener("click", addItem);

}

document.addEventListener('DOMContentLoaded', startApp);
