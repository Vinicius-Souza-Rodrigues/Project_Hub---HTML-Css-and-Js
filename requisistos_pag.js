//Modification of datatime and the version of the project
let data_complete = document.querySelector('.ano')
let data = new Date()
let year = data.getFullYear()
let month = data.getMonth() + 1
let day = data.getDate()
const version = '1.0'

if(month < 10 ) {
    month = `0${month}`
} else if(day < 10) {
    day = `0 + ${day}`
}

const data_answer = [`${day}/${month}/${year} - v${version}`]

data_complete.innerHTML = data_answer