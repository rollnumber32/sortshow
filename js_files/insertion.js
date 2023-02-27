const insertionSort = async () => {
  const barsHolder = document.getElementById("bars-container");
  const children = barsHolder.children;
  for (let i = 1; i < children.length; i++) {
    const key = children[i].style.height;
    let j = i - 1;
    while (j >= 0 && children[j].style.height > key) {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(), 2;
        })
      );
      swap(children[j], children[j + 1]);
      j = j - 1;
    }
    children[j + 1].style.height = key;
  }
};

const insertionSortBtn = document.getElementById("insertion-s");
insertionSortBtn.addEventListener("click", insertionSort);
