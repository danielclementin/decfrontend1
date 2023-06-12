function calcularTotal() {
    var cantEntradas,
      total,
      categoria,
      entradaEstudiante,
      entradaTrainee,
      entradaJr,
      general;
  
    console.log('entra a la funcion');
    cantEntradas = document.getElementById('inputCantidad').value;
    categoria = document.getElementById('inputCategoria').value;
  
    console.log('cant entradas ' + cantEntradas + 'categoria ' + categoria);
  
    entradaEstudiante = 200 - (200 * 0.8);
    entradaTrainee = 200 - (200 * .5);
    entradaJr = 200 - (200 * 0.15);
    general = 200;
  
    //verifico si el dato ingresado en número y mayor a 0
    if (cantEntradas > 0 && !isNaN(cantEntradas) && cantEntradas % 1 == 0) {
      //verificación del tipo de entrada para mostrar el monto final
      if (categoria == 'Estudiante') {
        total = entradaEstudiante * cantEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: \u0024' + total;
      } else if (categoria == 'Trainee') {
        total = entradaTrainee * cantEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: \u0024' + total;
      } else if (categoria == 'Junior') {
        total = entradaJr * cantEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: \u0024' + total;
      } else if (categoria == 'General') {
        total = general * cantEntradas;
        document.getElementById('importeTotal').innerHTML =
          'Total a Pagar: \u0024' + total;
      }
    } else {
      window.alert('Por favor ingrese la cantidad de entradas en números enteros');
    }
  }
  
  function borrar() {
    document.getElementById('inputNombre').value = '';
    document.getElementById('inputApellido').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputCantidad').value = '';
    document.getElementById('inputCategoria').value = 'Estudiante';
    document.getElementById('importeTotal').innerHTML = 'Total a Pagar: \u0024';
  }
  