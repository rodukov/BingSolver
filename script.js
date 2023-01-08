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



function start(config) {
    if (localStorage.getItem('started') == 'working') {
        let j = parseInt(localStorage.getItem('j'))
        if (j < 3) { // +3
            j += 1
            localStorage.setItem('j', j.toString());
            unknown_bing_request()
        } else { // +1
            localStorage.removeItem('started')
            localStorage.removeItem('j')
            unknown_bing_request()
        }
    } else {
        if(config != 'main') {
            localStorage.setItem('started', 'working');
            localStorage.setItem('j', '0');

        }
    }
}

function test(){
    alert(localStorage.getItem('test'))
}

function main() {
    start('main')
}
main()

localStorage.setItem('test', 'working');
const BingButton = document.createElement('span')
BingButton.classList.add('BingButton')
BingButton.innerText = 'BS'
BingButton.onclick = start
document.getElementById('id_h').classList.add('extended')
document.getElementById('id_h').appendChild(BingButton);


