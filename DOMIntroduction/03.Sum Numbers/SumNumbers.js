function calc() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value
    let sum = document.getElementById('sum').value

    sum = Number(num1) + Number(num2);

    document.getElementById('sum').value = sum;
}
