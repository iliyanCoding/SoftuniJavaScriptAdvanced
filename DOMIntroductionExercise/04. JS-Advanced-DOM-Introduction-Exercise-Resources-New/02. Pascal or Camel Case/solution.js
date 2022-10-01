function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  input = input.toLowerCase();
  input = input.split(' ');
  
  let res = '';

  switch(currentCase){
      case 'Camel Case':
        for(let i = 1; i < input.length; i++){
          let currentWord = input[i];
          currentWord[0].toUpperCase;
        }
        break;
      case 'Pascal Case':
        for(let i = 0; i < input.length; i++){
          let currentWord = input[i];
          currentWord[0].toUpperCase;
        }
        break;
      default:
        res = 'Error!';
        break;
  }

  debugger
  res = input.join('');

  document.getElementById('result').textContent = res;

  console.log(currentWord);
}

