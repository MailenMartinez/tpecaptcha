function crearcaptcha() {
    let arreglocaptcha = ["a", "b", "c", "d", "e", "A", "B", "C", "D", "E", 1, 2, 3, 4, 5, 6, 7, 8];
    let contentCaptcha = "";
    for (let i = 0; i < 5; i++) {
        contentCaptcha += arreglocaptcha[Math.floor(Math.random() * arreglocaptcha.length)];
    }
    return contentCaptcha;
};
document.getElementById("captcha").innerHTML = crearcaptcha(); //inyecta el captcha al html
document.getElementById("btn-enviarform").addEventListener("click", function (event) {
    event.preventDefault();
    let string1 = document.getElementById("captcha").innerHTML;
    let string2 = document.getElementById("captcha-ingresado").value;
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let msj = document.getElementById("msj").value;
    if ((email!='')&&(name!='')&&(msj!='')){
        if (string1 == string2) {
            refresh(event);
            document.querySelector(".msj-enviado").classList.remove("ocultar");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("msj").value = "";
        }
        else {
            refresh(event);
            document.querySelector(".msj-error").classList.remove("ocultar");
        }
    }
    else{
        refresh(event);
        document.querySelector(".msj-incompleto").classList.remove("ocultar");
    }
});
document.getElementById("refresh-captcha").addEventListener("click", refresh);
function refresh(event) {
    event.preventDefault();
    document.getElementById("captcha").innerHTML = crearcaptcha();
    document.querySelector(".msj-error").classList.add("ocultar");
    document.querySelector(".msj-enviado").classList.add("ocultar");
    document.querySelector(".msj-incompleto").classList.add("ocultar");
    document.getElementById("captcha-ingresado").value = "";
}