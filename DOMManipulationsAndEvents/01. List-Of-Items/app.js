function addItem() {

    let input = document.getElementById('newItemText')
    let text = input.value;
    let liItem = document.createElement('li');
    liItem.textContent = text;
    let list = document.getElementById('items');

    input.value ='';

    list.appendChild(liItem);
}