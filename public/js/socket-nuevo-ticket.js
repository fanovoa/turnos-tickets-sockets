//Comando para establecer la conexión
var socket = io();

var label = $('#lblNuevoTicket')

//escuchar sucesos
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor servidor');
});

// on 'estadoActual'
socket.on('estadoActual', function(res) {

    label.text(res.actual);
})

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);

    });


})