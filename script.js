let items = [];

renderItems();

function renderItems() {
  let lists = '';

  items.forEach((value) => {
    const { todo, dueDate, completed } = value;
    const isChecked = completed ? 'checked' : '';
    const textDecoration = completed ? 'line-through' : '';
    
    const html = `<div class="list">
                    <input type="checkbox" class="accept" ${isChecked}>
                    <div class="todo" style="text-decoration: ${textDecoration}">${todo}</div> 
                    <div class="date">${dueDate}</div>
                    <button class="delete-button js-delete">x</button>
                  </div>`;
    lists += html;
  });

  document.querySelector('.List-Todo').innerHTML = lists;

  document.querySelectorAll('.js-delete').forEach((delete_button, index) => {
    delete_button.addEventListener('click', () => {
      items.splice(index, 1);
      renderItems();
    });
  });

  document.querySelectorAll('.accept').forEach((checkBox, index) => {
    checkBox.addEventListener('click', () => {
      const todoElement = checkBox.parentElement.querySelector('.todo');
      items[index].completed = checkBox.checked;

      todoElement.style.textDecoration = checkBox.checked ? 'line-through' : '';
    });
  });
}

 document.querySelector('.js-add').addEventListener('click', () =>{
    const list = document.querySelector('.js-text');
    const date = document.querySelector('.js-due-date');
    const todo = list.value;
    const dueDate = date.value;
    
    if(list.value !== '' && date.value !== ''){
        items.push({todo,dueDate});
        list.value = '';
        date.value = '';
        renderItems();
    }
 });
 let clicked = false;

 document.querySelector('.theme-button').addEventListener('click', (event) => {
     const body = document.body;
 
     if (!clicked) {
         event.target.setAttribute('src', 'icons8-light-mode-78.png');
         body.classList.add('dark-mode');
 
         clicked = true;
     } else {
         event.target.setAttribute('src', 'icons8-dark-mode-30.png');
         body.classList.remove('dark-mode');
 
         clicked = false;
     }
 });
 
