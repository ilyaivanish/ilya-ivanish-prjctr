export function renderArray(array, inputValue, arrayList) {
    array.push(inputValue);
    console.log(array)
    arrayList.innerHTML = '';
    array.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        arrayList.appendChild(li);
    });
}

export function renderSet(set, inputValue, setList) {
    set.add(inputValue);
    console.log(set)
    setList.innerHTML = '';
    set.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      setList.appendChild(li);
    });
}


