function SetTime(time) {
    let timer = document.getElementById("timer");
    timer.textContent = ` In ${time} seconds you'll be redirected to Homepage.`;
  }

function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
async function Timer(time = 10) {
    for (let i = time; i > 0; i--) {
        SetTime(i);
        await delay(1000);
        }
    location.href = "../HTML/Homepage.html";
  }
Timer(15);

// https://masteringjs.io/tutorials/fundamentals/wait-1-second-then