const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clock() {
    const now = new Date();

    hour.innerText = now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
}

setInterval(clock, 1000); // 1초마다 이 함수를 실행시켜줌