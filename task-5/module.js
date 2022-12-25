
const button = document.querySelector('button');
const result = document.querySelector('.result');
const status = document.querySelector('.status');
const locStor = localStorage.getItem('imgKey');


const localData = localStorage.getItem('url', 'data');
if (localData) {
    displayResult(JSON.parse(localData));
}

async function displayResult(resJson) {
    for (item of resJson) {
        let img = document.createElement('img');
        img.setAttribute('src', item.download_url);
        img.setAttribute('width', '400');
        result.innerHTML = "";
        setTimeout(() => {
            result.append(img);
        });
        write('Картинки сохранились')
    }
}

button.addEventListener('click', () => {
const inputNum = document.querySelector('.inputNum').value;
const limit = document.querySelector('.limit').value;
const url = `https://picsum.photos/v2/list?page=${inputNum}&limit=${limit}`;



  if (inputNum < 1 || inputNum > 10) {
    write('Номер страницы вне диапазона от 1 до 10');
    return;
  }else if (limit < 1 || limit > 10) {
    write('Лимит вне диапазона от 1 до 10');
    return;
  }else  if ((inputNum && limit < 1) || (inputNum && limit > 10)) {
    write('Номер страницы и лимит вне диапазона от 1 до 10');
    return;
  }else fetch(url)
        .then((response) => response.json())
        .then((resJson) => {
            write("Картинки загруженны");
            localStorage.setItem('url', JSON.stringify(resJson));
            return displayResult(resJson);
        })
        .catch((reason) => {
            write("Ошибка: " + reason);
        });

    
        
});
