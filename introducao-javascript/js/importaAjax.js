var btnImport = document.querySelector("#importar-paciente");

btnImport.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var importPacientes = JSON.parse(xhr.responseText);
       
        importPacientes.forEach(paciente => {
            addPacienteNaTabela(paciente);
        });
        
    });


    xhr.send();
});