function calcularTotal() {
    var checkboxes = document.querySelectorAll('input[name="materia"]:checked');
    var costoPorMateria = 50; 
    var total = checkboxes.length * costoPorMateria;
    document.getElementById('totalAmount').textContent = '$' + total;
    
    document.getElementById('subjectsForm').style.display = 'none';
    document.getElementById('totalCost').style.display = 'block';
}

function miMatricula() {
    let identificacion = document.getElementById('identificacion').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let generoElement = document.querySelector('input[name="genero"]:checked');
    let genero = generoElement ? generoElement.value : '';
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let edad = document.getElementById('edad').value;

    let estadoCivil = document.getElementById('estadoCivil').value;
    let numeroCelular = document.getElementById('numeroCelular').value;
    let numeroResidencia = document.getElementById('numeroResidencia').value;
    let numeroFamiliar = document.getElementById('numeroFamiliar').value;
    let correoElectronico = document.getElementById('correoElectronico').value;
    let colegio = document.getElementById('colegio').value;

    let provincia = document.getElementById('provincia').value;
    let canton = document.getElementById('canton').value;

    let materiasSeleccionadas = [];
    let checkboxes = document.querySelectorAll('input[name="materia"]:checked');
    checkboxes.forEach(function(checkbox) {
        materiasSeleccionadas.push(checkbox.value);
    });

    document.getElementById('resumenIdentificacion').textContent = identificacion;
    document.getElementById('resumenNombre').textContent = nombre;
    document.getElementById('resumenApellidos').textContent = apellido;
    document.getElementById('resumenGenero').textContent = genero;
    document.getElementById('resumenFechaNacimiento').textContent = fechaNacimiento;
    document.getElementById('resumenEdad').textContent = edad;
    document.getElementById('resumenEstadoCivil').textContent = estadoCivil;
    document.getElementById('resumenNumeroCelular').textContent = numeroCelular;
    document.getElementById('resumenNumeroResidencia').textContent = numeroResidencia;
    document.getElementById('resumenNumeroFamiliar').textContent = numeroFamiliar;
    document.getElementById('resumenCorreoElectronico').textContent = correoElectronico;
    document.getElementById('resumenColegio').textContent = colegio;
    document.getElementById('resumenProvincia').textContent = provincia;
    document.getElementById('resumenCanton').textContent = canton;
    document.getElementById('resumenMaterias').textContent = materiasSeleccionadas.join(', ');
    document.getElementById('resumenTotalPagar').textContent = '$' + document.getElementById('totalAmount').textContent.substring(1); // Total a pagar

    document.getElementById('resumenMatricula').style.display = 'block';

    let matricula = {
        identificacion: identificacion,
        nombre: nombre,
        apellido: apellido,
        genero: genero,
        fechaNacimiento: fechaNacimiento,
        edad: edad,
        estadoCivil: estadoCivil,
        numeroCelular: numeroCelular,
        numeroResidencia: numeroResidencia,
        numeroFamiliar: numeroFamiliar,
        correoElectronico: correoElectronico,
        colegio: colegio,
        provincia: provincia,
        canton: canton,
        materiasSeleccionadas: materiasSeleccionadas
    };
    localStorage.setItem('matricula', JSON.stringify(matricula));

    descargarArchivoTexto(JSON.stringify(matricula, null, 2), `matricula_${nombre}_${apellido}.txt`);
}

function descargarArchivoTexto(contenido, nombreArchivo) {
    let elemento = document.createElement('a');
    elemento.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenido));
    elemento.setAttribute('download', nombreArchivo);

    elemento.style.display = 'none';
    document.body.appendChild(elemento);

    elemento.click();

    document.body.removeChild(elemento);
}
