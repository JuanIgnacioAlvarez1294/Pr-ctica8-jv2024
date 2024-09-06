function calcularPresupuesto() {
    const nombre = document.getElementById('nombre').value;
    const clave = document.getElementById('clave').value;
    const edad = document.getElementById('edad').value;
    const ingreso = document.getElementById('ingreso').value;

    const claveCorrecta = "12345";  // Clave de ejemplo

    if (clave === claveCorrecta) {
        const gastosNecesarios = ingreso * 0.50;
        const gastosOpcionales = ingreso * 0.30;
        const ahorroInversion = ingreso * 0.20;

        const resultado = `
            <h3>Resultados para ${nombre}</h3>
            <p>Edad: ${edad}</p>
            <p>Ingreso Total: $${ingreso}</p>
            <p><strong>Distribución del Presupuesto:</strong></p>
            <p>Gastos Necesarios: $${gastosNecesarios.toFixed(2)}</p>
            <p>Gastos Opcionales: $${gastosOpcionales.toFixed(2)}</p>
            <p>Ahorro e Inversión: $${ahorroInversion.toFixed(2)}</p>
        `;

        document.getElementById('resultado').innerHTML = resultado;
    } else {
        alert("Clave incorrecta. Por favor, intenta nuevamente.");
    }
}
