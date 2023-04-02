
const listElement = document.querySelector('#list');

export const renderList = (tasksList) => {
    listElement.innerHTML = '';

    tasksList.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
            <div class="form-check">
                <label class="form-check-label">
                    <input class="checkbox" type="checkbox">
                    ${task.name}
                    <i class="input-helper"></i>
                    <i class="fa fa-edit"></i>
                </label>
            </div>
            <a class="remove mdi mdi-close-circle-outline" data-index="${index}"></a>
        `;
        listElement.append(taskElement);

        const editIcon = taskElement.querySelector('.fa-edit');
        editIcon.addEventListener('click', () => {
            const editedTask = prompt('Enter the edited task:');
            if (editedTask !== null && editedTask !== '') {
                tasksList[index].name = editedTask;
                renderList(tasksList);
                localStorage.setItem('tasksList', JSON.stringify(tasksList));
            }
        });

    });

};
