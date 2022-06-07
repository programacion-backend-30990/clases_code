
const socket = io()

const div = document.getElementById('mensajes')
socket.on('mensaje', data => {
    div.innerHTML = div.innerHTML + '<br>' + data
})

const btn = document.getElementById('btn')
btn.onclick = () => {
    const txt = document.getElementById('mensaje').value
    socket.emit('notificacion', txt)
}