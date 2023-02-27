const randomizeArray = () => {
  const barsHolder = document.getElementById("bars-container");
  const barNum = document.getElementById("bar-num");
  barsHolder.innerHTML = "";
  for (let i = 0; i < barNum.value; i++) {
    const random_number = Math.floor(Math.random() * 100);
    const bar = document.createElement("div");
    bar.style.height = `${random_number}%`;
    bar.classList.add("bar");
    barsHolder.appendChild(bar);
  }
};

const newArrayBtn = document.getElementById("new-a");
newArrayBtn.addEventListener("click", randomizeArray);
