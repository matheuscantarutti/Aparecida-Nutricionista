var btnImport = document.querySelector("#importar-paciente");

btnImport.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var importPacientes = JSON.parse(xhr.responseText);
       
            importPacientes.forEach(paciente => {
                addPacienteNaTabela(paciente);
            });
        }else{
            erroAjax.classList.remove("invisivel");
            
        }
        
        
    });


    xhr.send();
});