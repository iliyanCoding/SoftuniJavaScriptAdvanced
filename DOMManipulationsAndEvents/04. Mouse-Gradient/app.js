function attachGradientEvents() {
    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', function (event){
        let mousePosition = event.offsetX;
        let buttonWidth = event.target.offsetWidth;
        let result = Math.trunc(mousePosition / buttonWidth * 100);

        document.getElementById('result').textContent = result;
    })
}