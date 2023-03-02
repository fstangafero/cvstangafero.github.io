// Obtener el formulario
const form = document.getElementById('form-contacto');

// Agregar el evento submit al formulario
form.addEventListener('submit', function (event) {
  // Evitar que el formulario se envíe por defecto
  event.preventDefault();

  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const email = document.getElementById('email').value.trim();
  const motivo = document.getElementById('motivo').value.trim();

  // Validar que los campos no estén vacíos
  if (!nombre || !apellido || !email || !motivo) {
    alert('Por favor, completa todos los campos');
    return;
  }

  // Enviar el formulario
  alert(`Gracias por contactarnos, ${nombre} ${apellido}!`);
  form.reset();
});
