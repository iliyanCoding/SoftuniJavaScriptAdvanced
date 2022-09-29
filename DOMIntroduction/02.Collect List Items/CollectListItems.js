function extractText() {
    let itemNodes = document.querySelectorAll('ul#items li');
    let text = document.querySelector('#result');
    for (const node of itemNodes) {
        text.value += node.textContent +'\n';
    }
}