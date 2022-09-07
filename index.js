// const axios = require('axios').default;



const button = document.querySelector(".btn");
const buttonYesNo = document.querySelector(".btn2")
const input = document.querySelector("#inp1");
const form = document.querySelector("#forma");
const link = 'https://https://github.com/'


form.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      if(input.value === "" || input.value === null || input.value === undefined ) {
        alert('Введите пожалуйста хоть какие-нибудь данные!!!')
    } 
        else getData ()
    } 
    catch (error) {
      console.error(error);
    }
    input.value = "";
  });


function getData () {                                       // отправка запроса после нажатия на кнопку1
    button.addEventListener("click", function () {
    alert('Данные отправлены!!!');
    getFetch()

    })
}

function getYesNo () {                                          // отправка запроса при нажатии кнопки Yes No
    buttonYesNo.addEventListener("click", function () {
    alert('Данные отправлены!!!');
    getFetch()

    })
}

function getFetch() {
    fetch(link, {
        method: 'POST',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
        }
    })
    .then(function (response) {
    let answer = `<button class="btn2">да</button>  <button>нет</button>`
    return answer.innerHTML
  })
    .catch(function (error) {
    console.log(error);
  })
  
}



