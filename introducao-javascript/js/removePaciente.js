
var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('click', function(event) {
    
    if (event.target.className == 'remove-paciente') {
        setTimeout(function() {
            event.target.parentNode.remove()
        }, 500);
    }
});
