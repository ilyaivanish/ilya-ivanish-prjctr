function renderList(data, list) {
    list.innerHTML = '';
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
}

export function updateArray(inputValue, array, arrayList) {
    array.push(inputValue);
    renderList(array, arrayList)
}

export function updateSet(inputValue, set, setList) {
    set.add(inputValue);
    renderList(set, setList)
}


