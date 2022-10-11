

const butonIniciar    = document.querySelector(".ingreso")
const butonRegistrase = document.querySelector(".registrarse")

butonIniciar.addEventListener("click",()=>{
    alert("Iniciar sesion");
})

butonRegistrase.addEventListener("click",()=>{
    location.href = "registro.html";
})