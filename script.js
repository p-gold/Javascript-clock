
let clockTime = function () {
    const secondsHand = document.querySelector(`.sec-hand`);
    const minutesHand = document.querySelector(`.min-hand`);
    const hourHand = document.querySelector(`.hour-hand`);

    //geting the seconds 
    const currentDate = new Date(); //gets the computer current date and time
    const seconds = currentDate.getSeconds();//gets the seconds from the time gotten above
    const secondsDegree = ((seconds / 60) * 360) + 90;
    const rotate = secondsHand.style.transform = `rotate(${secondsDegree}deg)` // adds a  rotation state  using the value gotten from secondsDegree to the secondsHand.
    console.log(rotate)

    //geting the minutes 
    const minutes = currentDate.getMinutes();//gets the minutes
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`

    //getting the hour
    const hour = currentDate.getHours();//gets the hour
    const hourMinutes = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourMinutes}deg)`;
}

setInterval(clockTime, 1000);