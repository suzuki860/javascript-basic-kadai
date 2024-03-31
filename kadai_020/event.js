const eventBtn = document.getElementById("btn");

const text = document.getElementById("text");

eventBtn.addEventListener("click", () =>{
    text.textContent = "ボタンをクリックしました";
});