const button = document.querySelector('button');
const result = document.querySelector('.result')


function useRequest(url, callback) {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url);

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
          } else {
            const resultParse = JSON.parse(xhr.response);
            if (callback) {
              callback(resultParse);
            }
          }
    }

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
      };
      
    xhr.send();
};

function displayResult(apiData) {
    let cards = '';
    console.log(apiData)
    apiData.forEach(item => {
        const cardBlock = `
    <img
        src="${item.download_url}">
    `;
    cards += cardBlock
    });

    result.innerHTML = cards;
}

button.addEventListener('click', () => {
    const value = document.querySelector('input').value;
    if (value >= 1 && value <= 10) {
        useRequest(`https://picsum.photos/v2/list?limit=${value}`, displayResult)
    } else {
        result.innerHTML += `<p>
                                число вне диапазона от 1 до 10
                            </p>`;
    }
})


