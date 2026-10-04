
let form =  document.getElementById('app') as HTMLFormElement

let botao = document.getElementById("btn-cadastrar") as HTMLButtonElement
let resultado = document.getElementById("result") as HTMLDivElement

botao.addEventListener("click", () => {
let formData = new FormData (form) 
console.log(formData)
let formValue = Object.fromEntries(formData)
console.log(formValue)
    resultado.innerHTML = `
        Nome: ${formValue.nome}<br>
        E-mail: ${formValue.email}<br>
        Sexo: ${formValue.sexo}<br>
        Data de nascimento: ${formValue.data}<br>
        Senha: ${formValue.senha}
    `

   form.reset()
})