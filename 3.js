const wsUri = "wss://echo-ws-service.herokuapp.com";

const messageInput = document.querySelector('.message');
const sendBtn = document.querySelector('.j-btn-message');
const geoBtn = document.querySelector('.j-btn-geo');
const textWindow = document.querySelector('.text-window');

// создаем объект вебсокет и описываем его поведение
let websocket = new WebSocket(wsUri); 

websocket.onopen = function(evt) {
    console.log("CONNECTED");
};

websocket.onerror = function(evt) {
    console.log(evt.data)
};


//добавляем обработчик события при нажатии кнопки отправки сообщения
sendBtn.addEventListener('click', () => {
    let message = messageInput.value;
    websocket.send(message);
    addMessage(message);
    messageInput.value = ''
})

//функция для добавления сообщений в чат
function addMessage(message, position='flex-start') {
    let element = `
        <p class='message-window' style='align-self: ${position}'>
            ${message}
        </p>
    `;
    let chat = textWindow.innerHTML;
    textWindow.innerHTML = chat + element;
}


//описываем поведение при определении гео-позиции
const error = () => {
    let error = "Гео-локаци не определена" 
    addMessage(error);
}

const success = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    addLink(link)
}


//функция для вставки ссылки в чат
function addLink(link) {
    let element = `
    <a  href='${link}'
        target='_blank'
        style='text-decoration: none;'
        >
        Гео-локация
        </a>
    `;
    let chat = textWindow.innerHTML;
    textWindow.innerHTML = chat + element;
};

//добавляем обработчик события при нажатии кнопки гео-позиции
geoBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
        console.log("You can't use geolocation")
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    };
});