let items = [];

renderItems();

function renderItems(){
  let lists = '';

  items.forEach((value) =>{
    const {todo,dueDate} = value;
    const html = `<div class ="list">
                    <input type="checkbox" class="accept">
                    <div class="todo">${todo}</div> 
                    <div class="date">${dueDate}</div>
                    <button class="delete-button js-delete">x</button>
                  </div>`;
    lists += html;
  });

  document.querySelector('.List-Todo').innerHTML = lists;

  document.querySelectorAll('.js-delete').forEach((delete_button) =>{
      delete_button.addEventListener('click', (index) =>{
          items.splice(index,1);
          renderItems();
      });
  });
 
  document.querySelectorAll('.accept').forEach((checkBox) => {
    checkBox.addEventListener('click', () => {
      const todoElement = checkBox.parentElement.querySelector('.todo');
  
      if (checkBox.checked) 
        todoElement.style.textDecoration = 'line-through';
      else 
        todoElement.style.textDecoration = '';
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

