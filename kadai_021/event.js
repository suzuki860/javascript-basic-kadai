const eventBtn = document.getElementById("btn");

const text = document.getElementById("text");

eventBtn.addEventListener("click", () => {
    setTimeout(() => {
        text.textContent = "ボタンをクリックしました";
    },2000);   
});