let bodymain = document.querySelector(".bodymain");
let genrate = document.querySelector(".genrate");
let text = document.querySelector(".text");
function change() {
    let random = Math.floor(Math.random() * 16777215)
    let randomcolor = "#" + random.toString(16);
    document.body.style.backgroundColor = randomcolor;
    text.style.color = randomcolor;
    text.innerHTML = randomcolor;
    navigator.clipboard.writeText(randomcolor)
}
genrate.addEventListener("click", function () {
    change();
});
change();