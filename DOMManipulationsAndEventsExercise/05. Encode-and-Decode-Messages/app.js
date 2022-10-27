function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(event){
        let newMessage ='';
        let currentMessage = event.target.parentElement.children[1].value;
        for(let i = 0; i < currentMessage.length; i++){
            let currentChar = currentMessage[i].charCodeAt();
            newMessage += String.fromCharCode(currentChar + 1);
        }

        let curentTextArea = document.querySelectorAll('textarea')[0];
        let resultTextArea = document.querySelectorAll('textarea')[1];
        resultTextArea.value = newMessage;
        curentTextArea.value = '';

    }

    function decode(event){
        let newMessage = '';
        let currentMessage = event.target.parentElement.children[1].value;
        for(let i = 0; i < currentMessage.length; i++){
            let currentChar = currentMessage[i].charCodeAt();
            newMessage += String.fromCharCode(currentChar - 1);
        }

        let curentTextArea = document.querySelectorAll('textarea')[1];
        let resultTextArea = document.querySelectorAll('textarea')[0];
        resultTextArea.value = newMessage;
        curentTextArea.value = '';
    }
}