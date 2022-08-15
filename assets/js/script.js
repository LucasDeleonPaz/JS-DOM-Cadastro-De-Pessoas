// VARIÁVEIS GLOBAIS

const inputNome = document.getElementById('nome');
const inputSobrenome = document.getElementById('sobrenome');
const inputNascimento = document.getElementById('nascimento');
const inputEmail = document.getElementById('email')
const inputContato = document.getElementById('contato');
const inputTelefone = document.getElementById('telefone');
const selectorCargo = document.getElementById('selector');
const listaAlunes = document.getElementById('lista-de-alunos');
const btnCadastro = document.getElementById('register-button');
const btnSearch = document.getElementById('btn');
const cargoOption = document.getElementById('cargoOption');
const totalCadastrado = document.getElementById('total-alunos');


// LISTENER DA PÁGINA

btnCadastro.addEventListener('click', createNewPerson);
btnSearch.addEventListener('click', inputCargo);

// FUNÇÃO QUE CRIA O CADASTRO

function createNewPerson(event){
    event.preventDefault();
    let idade = checkYear();
    if(idade < 18){
        return alert('Você não tem idade para se cadastrar! Somente pessoas com 18 anos ou mais podem.')
    } else if(inputNascimento.value == ''){
        return alert('Você não adicionou a sua idade. Por favor, preencha a sua data de nascimento.')
    }
    confere();   
}

// FUNÇÃO QUE CAPTURA OS VALORES DOS INPUT E CRIA A CLASSE PESSOA
let cadastro = ''
function captureInput(){
    cadastro = new Pessoa(inputNome.value, inputSobrenome.value, inputNascimento.value, inputEmail.value, inputContato.value, inputTelefone.value, selectorCargo.value)
    return cadastro;
}

// FUNÇÃO QUE CRIA OS ELEMENTOS E INPUTA OS VALORES EM LISTA

function createList(elem){
    let listPerson = document.createElement('li');
    let nomeList = document.createElement('p');
    let emailList = document.createElement('p');
    let cargoList = document.createElement('p');

    listPerson.classList.add('list-Person');
    cargoList.classList.add('cargo-Person')

    nomeList.textContent = elem.nome + " " + elem.sobrenome;
    emailList.textContent = elem.email;
    cargoList.textContent = elem.cargo;

    listPerson.append(nomeList, emailList, cargoList);
    listaAlunes.append(listPerson);
}

// FUNÇÃO QUE APRESENTA POR CARGO A LISTA DE PESSOAS INCLUÍDAS

function inputCargo(elem){
    const confereCargo = document.querySelectorAll('p.cargo-Person');
    confereCargo.forEach(elem =>{
        if(cargoOption.value == 'Todos'){
            let parent = elem.parentNode;
            parent.classList.remove('showList')
        } else {   
            let parent = elem.parentNode;
            parent.classList.remove('showList')
            if(elem.textContent != cargoOption.value){
                let parent = elem.parentNode;
                parent.classList.add('showList')
            }
        }
    })
}

// FUNÇÃO QUE IMPEDE CADASTRO E-MAILS REPETIDOS

const arrEmail = [0];
function confere (){
    let result;
    arrEmail.forEach(elem =>{
        if(elem == inputEmail.value ){
            result = true
        } else {
            
            result = false
        }
    })
    if(result == true){
        return alert('Um usuário com o mesmo e-mail já foi cadastrado.');
    } else {
        arrEmail.push(inputEmail.value);
        let createCadastro = captureInput();
        totalCadastrado.textContent = arrEmail.length - 1;
        return cadastro.inputScreen(createCadastro);
    }
}

// FUNÇÃO QUE CONFERE IDADE

function checkYear (){
    const actualYear = new Date().getFullYear();
    const actualMonth = new Date().getMonth();
    const actualDay = new Date().getDay();
    const bornYear = inputNascimento.value.slice(0,4);
    const bornMonth = inputNascimento.value.slice(5,7);
    const bornDay = inputNascimento.value.slice(-2);
    let idade;
    if(actualMonth < bornMonth && actualDay < bornDay){
        idade = actualYear - bornYear
    } else {
        idade = actualYear - bornYear - 1
    }
    return idade
}


