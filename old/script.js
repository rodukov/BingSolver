const clock = document.createElement('div')
clock.classList.add('clock_extension')
setInterval(update_clock, 1000)
update_clock()
document.body.append(clock)

function update_clock() {
    const date = new Date()
    const time = new Intl.DateTimeFormat('ru-Ru', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(date)
    clock.innerText = time
}