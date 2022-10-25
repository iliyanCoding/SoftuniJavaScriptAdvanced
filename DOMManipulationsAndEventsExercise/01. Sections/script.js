function create(words) {
   let mainDiv = document.getElementById('content');
   for (const word of words) {
      let div = document.createElement('div');
      mainDiv.appendChild(div);
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);

      div.addEventListener('click', Appear)
   }

   function Appear(event){
      if(event.target.nodeName === 'P'){
         return;
      }
      event.target.children[0].style = 'block'
   }
}