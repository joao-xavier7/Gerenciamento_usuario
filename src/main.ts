(() => {
  let input1: HTMLInputElement|null = document.querySelector("#input1");
  let btn1: HTMLButtonElement|null = document.querySelector("#btn1");
  let result: HTMLDivElement|null = document.querySelector("#result");

  if (!btn1){
    return;
  }
  btn1.onclick = () => {
    if (!result){
      return;
    }
    result.innerHTML = input1?.value || "";
  }
})()
