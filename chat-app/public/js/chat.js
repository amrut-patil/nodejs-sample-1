
const socket = io();

const $messageForm = document.querySelector('#message-form');
const $messageFormInput = $messageForm.querySelector('input');
const $messageFormButton = $messageForm.querySelector('button');
const $sendLocationButton = document.querySelector('#sendLocation');
const $messages = document.querySelector('#messages');

//Templates
const messageTemplate = document.querySelector('#message-template').innerHTML;

socket.on('message', (msg) => {
    console.log(msg);
    const html = Mustache.render(messageTemplate, {
        message: msg
    });
    $messages.insertAdjacentHTML('beforeend', html);
})

$messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    $messageFormButton.setAttribute('disabled', 'disabled');

    const message = e.target.elements.messageInput.value;
    // socket.emit('sendMessage', message, (deliveredMessage)=>{
    //     console.log(deliveredMessage);  
    // });

    socket.emit('sendMessage', message, (error) => {
        $messageFormButton.removeAttribute('disabled');
        $messageFormInput.value = '';
        $messageFormInput.focus();

        if (error) {
            return console.log(error);
        }

        console.log('Message delivered!')
    });
})


$sendLocationButton.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geoloaction is not supported by your browser.');
    }
$sendLocationButton.setAttribute('disabled','disabled');

    navigator.geolocation.getCurrentPosition((position) => {
        //socket.emit('sendLocation', 'Location: ' + position.coords.latitude + ', ' + position.coords.longitude);        
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, () => {
            $sendLocationButton.removeAttribute('disabled');
            console.log('Location shared!');
        });
    })

})
