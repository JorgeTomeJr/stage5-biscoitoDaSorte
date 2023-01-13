/*VARIÁVEIS*/
const biscoitoButton = document.querySelector('.biscoito')
const biscoito1 = document.querySelector('.biscoito1')
const biscoito2 = document.querySelector('.biscoito2')
const paragrafoMensagem = document.querySelector('.biscoito2 p')

const btn = document.querySelector('.btn')
const message = ['Siga confiante na direção dos seus sonhos', 
                'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.', 
                'Conheça o seu valor', 
                'Nunca desista dos seus sonhos', 
                'Fique perto de pessoas que ti fazem rir, pessoas positivas', 
                'Pensamentos positivos ti impulsionam para frente',
                'Não basta sonhar, você tem que lutar e acreditar',
                'Todo dia é uma oportunidade para melhorar',
                'Toda fase ruim é passageira e deixa um aprendizado',
                'Cuide bem do seu corpo, alma e espírito',
                'Plante atitudes boas e isso retornará em bençãos'
            ]
let numberLuck = Math.floor(Math.random() * 10)


/*EVENTOS*/
biscoitoButton.addEventListener('click', handleToggle)
btn.addEventListener('click', playAgain)

/*funcões */
function handleToggle(){
    biscoito1.classList.toggle('hide')
    biscoito2.classList.toggle('hide')
}

function playAgain(){
    handleToggle()
    paragrafoMensagem.textContent = `${message[numberLuck]}`
    numberLuck = Math.floor(Math.random() * 10)
}
