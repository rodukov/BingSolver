let generate = (x) => Math.floor( x * Math.random())
let db = 'qwertyuiopasdfghjklzxcvbnm'+'qwertyuiopasdfghjklzxcvbnm'.toUpperCase()+'1234567890'
const sort = (len) => {
    let result = ''
    for (let i = 0; i < len; i++) { result += db[generate(db.length)] }
    return result
}

let searchbar = document.getElementById('sb_form_q')
searchbar.placeholder = 'BingSolver successfully initialized! 😊'

function unknown_bing_request() {
    // searchbar.value = sort(10)
    // document.getElementById("sb_go_par").click();
    window.location.assign("https://www.bing.com/search?q="+sort(10));
}

function start() {
    let j = 0
    while (j < 3) {
        setTimeout(() => {
            unknown_bing_request()
        }, j*600)
        alert(j)
        j += 1
    }
}

const BingButton = document.createElement('p')
BingButton.classList.add('BingButton')
BingButton.innerText = 'AutoEarn'
document.getElementById('id_h').classList.add('extended')
document.getElementById('id_h').appendChild(BingButton);


