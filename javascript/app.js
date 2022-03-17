const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360)
}

const setClock = () => {
    const currentDate = new Date();

    const secondsPencertage = currentDate.getSeconds() / 60;
    const minutesPercentage = (secondsPencertage + currentDate.getMinutes()) / 60;
    const hoursPerecentage = (minutesPercentage + currentDate.getHours()) / 12;
    
    setRotation(secondsHand,secondsPencertage);
    setRotation(minutesHand,minutesPercentage);
    setRotation(hoursHand,hoursPerecentage);
}

setClock();

setInterval(setClock, 1000);
