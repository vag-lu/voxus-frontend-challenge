function handleButtonClick() {
    let button = document.getElementById("finish-button");
    button.classList.remove('beforeClickButton');
    button.classList.add('afterClickButton');
    button.innerHTML = "Obrigado!";
}