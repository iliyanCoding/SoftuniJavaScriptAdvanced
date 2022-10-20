function deleteByEmail() {
    let emailToBeDeleted = document.getElementsByName('email')[0].value;
    let tableCells = document.querySelectorAll('#customers td:nth-child(2)');
    for (const td of tableCells) {
        if(td.textContent == emailToBeDeleted){
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
        document.getElementById('result').textContent = 'Not found.';
    }
}