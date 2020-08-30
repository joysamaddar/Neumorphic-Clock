const ahour = document.querySelector(".inner-circle .hours");
const amin = document.querySelector(".inner-circle .minutes");
const asec = document.querySelector(".inner-circle .seconds");
const digital = document.querySelector(".time");

(function innit() {
  setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    digital.innerHTML = `${hour.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    })}:${min.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    })}:${sec.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    })}`;
    asec.style.transform = `rotate(${-90 + (360 / 60) * sec}deg)`;
    amin.style.transform = `rotate(${
      -90 + (360 / 60) * min + (360 / 60 / 60) * sec
    }deg)`;
    ahour.style.transform = `rotate(${
      -90 + (360 / 12) * hour + (360 / 12 / 60) * min
    }deg)`;
  }, 1000);
})();
