const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', criarDia)
form.addEventListener('change', save)


function criarDia() {

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert('Day already exist')
        return
    }

    alert('Add with success')
    nlwSetup.addDay(today)
}


function save() {
    localStorage.setItem('setupBritto@habits', JSON.stringify(nlwSetup.data));
}


const data = JSON.parse(localStorage.getItem('setupBritto@habits')) || {};


nlwSetup.setData(data)
nlwSetup.load()