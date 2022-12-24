const button = document.querySelector('button');
const result = document.querySelector('.result');
const status = document.querySelector('.status');



button.addEventListener('click', clickButton);

function clickButton () {
    const inputWidth = document.querySelector('.input1').value;
    const inputHeight = document.querySelector('.input2').value

    if ((inputWidth < 100 || inputWidth > 300) || (inputHeight < 100 || inputHeight > 300)) {
        write("Одно из чисел вне диапазона от 100 до 300.");
        return;
    }

    fetch(`https://picsum.photos/${inputWidth}/${inputHeight}`)
        .then((response) => response.url)
        .then((result) => {
            displayResult(result);
            write("Фото загружено.");
        })
        .catch((reason) => {
            write("Ошибка: " + reason);
        });
} 

function displayResult(apiData) {
    
    const cardBlock = `<img
    src="${apiData}"
    >`;
    

    result.innerHTML = cardBlock;
}

function write(text) {
    status.innerHTML = text;
}

