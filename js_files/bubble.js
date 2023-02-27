const swap = (bar1, bar2) => {
  const bufferHeight = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = bufferHeight;
};

const bubbleSort = async () => {
  const barsHolder = document.getElementById("bars-container");
  for (let i = 0; i < barsHolder.children.length - 1; i++) {
    for (let j = 0; j < barsHolder.children.length - i - 1; j++) {
      const bar1 = barsHolder.children[j];
      const bar2 = barsHolder.children[j + 1];
      if (bar1.style.height > bar2.style.height) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve(), 2;
          })
        );
        swap(bar1, bar2);
      }
    }
  }
};

const bubbleSortBtn = document.getElementById("bubble-s");
bubbleSortBtn.addEventListener("click", bubbleSort);
