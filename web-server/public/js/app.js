
console.log('client side js file loaded!');

// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     });
// })

// fetch("http://localhost:3000/weather?address=Kolhapur").then((response) => {
//     console.log("------")
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error);
//         } else {
//             console.log(data);
//         }
//     });
// })

const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const messageOne = document.querySelector("#msg1");
const messageTwo = document.querySelector("#msg2");


messageOne.textContent = 'aaa';

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    messageOne.textContent = "Loading . . .";
    messageTwo.textContent = "";

    const location = searchElement.value;
    console.log(location);
    getSomething(location);
})

function getSomething(location) {
    fetch("http://localhost:3000/weather?address=" + location).then((response) => {
        console.log("------")
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
                console.log(data.error);
            } else {
                messageOne.textContent = data.forecast.summary;
                messageTwo.textContent = data.location;
                console.log(data);
            }
        });
    })
}

