function addItem() {
    let btn = document.querySelectorAll('input[type=button]')[0];
    btn.addEventListener('click', AddOption)
    

    function AddOption(){
        let itemText = document.getElementById('newItemText').value;
        let itemValue = document.getElementById('newItemValue').value;
    
        let optionEl = document.createElement('option');
        optionEl.textContent = itemText;
        optionEl.value = itemValue;
    
        let menuEl = document.getElementById('menu');
        menuEl.appendChild(optionEl);
    
        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    }
}