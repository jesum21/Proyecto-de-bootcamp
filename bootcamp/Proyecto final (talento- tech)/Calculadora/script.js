let operacion = '';
let numeroAnterior = 0;
let numeroActual = '';

     function agregarNumero(numero) {
            numeroActual += numero;
            actualizarPantalla();
        }

    function setOperacion(op) {
    if (numeroActual !== '') {
      calcular();
     numeroAnterior = parseFloat(numeroActual);
     numeroActual = '';
 }
     operacion = op;
}

        function calcular() {
        if (operacion === '') return;
        const num1 = numeroAnterior;
        const num2 = parseFloat(numeroActual);
        let resultado;

            switch (operacion) {
                case 'sumar':
                    resultado = num1 + num2;
                    break;
                case 'restar':
                    resultado = num1 - num2;
                    break;
                case 'multiplicar':
                    resultado = num1 * num2;
                    break;
                case 'dividir':
                    resultado = num1 / num2;
                    break;
            }

            numeroActual = resultado.toString();
            operacion = '';
            actualizarPantalla();
        }

     function limpiar() {
            numeroActual = '';
            numeroAnterior = 0;
            operacion = '';
            actualizarPantalla();
        }

    function actualizarPantalla() {
     document.getElementById('pantalla').value = numeroActual;
}