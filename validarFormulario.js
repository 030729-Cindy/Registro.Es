
const form = document.getElementById('form-control');
const numControlInput = document.getElementById('num-control');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  message.innerHTML = ""; // Limpiar mensaje previo
  const numControl = numControlInput.value.trim();

  // Verificar el número de control
  if (!validarNumeroControl(numControl)) {
    mostrarMensaje('Número de control inválido. Debe seguir el formato XX84XXXX.', 'error');
  } else {
    // Si el número de control es válido, continuar con otras validaciones aquí si es necesario

    // Si todo es válido
    mostrarMensaje('Registro concluido correctamente. ¡Bienvenido!', 'success');
    // Aquí puedes habilitar el envío del formulario si ya es necesario
    // form.submit();
  }
});

function validarNumeroControl(numControl) {
  // Expresión regular que valida el formato "XX84XXXX"
  const regex = /^\d{2}84\d{4}$/;
  return regex.test(numControl);
}

function mostrarMensaje(texto, tipo) {
  if (tipo === 'success') {
    message.innerHTML = `<span id="correcto">${texto}</span>`;
  } else if (tipo === 'error') {
    message.innerHTML = `<span id="error">${texto}</span>`;
  }
}

/*
const form = document.getElementById('registroForm');
const numControlInput = document.getElementById('numeroControl');
const apellidoPaternoInput = document.getElementById('app');
const apellidoMaternoInput = document.getElementById('apm-nombre');
const nombreInput = document.getElementById('nombre');
const telefonoInput = document.getElementById('tel-direc');
const message = document.getElementById('mensajeRegistro');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  message.innerHTML = ""; // Limpiar mensaje previo
  const errors = [];

  // Validar Número de Control
  const numControl = numControlInput.value.trim();
  if (!validarNumeroControl(numControl)) {
    errors.push('Número de control inválido. Debe seguir el formato XX84XXXX.');
  }

  // Validar Apellido Paterno
  if (!validarSoloLetras(apellidoPaternoInput.value.trim())) {
    errors.push('Apellido paterno debe contener solo letras.');
  }

  // Validar Apellido Materno
  if (!validarSoloLetras(apellidoMaternoInput.value.trim())) {
    errors.push('Apellido materno debe contener solo letras.');
  }

  // Validar Nombre
  if (!validarSoloLetras(nombreInput.value.trim())) {
    errors.push('Nombre debe contener solo letras.');
  }

  // Validar Teléfono
  if (!validarSoloNumeros(telefonoInput.value.trim())) {
    errors.push('Número de teléfono debe contener solo números.');
  }

  // Mostrar mensajes de error o éxito
  if (errors.length > 0) {
    mostrarMensaje(errors.join('<br>'), 'error');
  } else {
    mostrarMensaje('Registro concluido correctamente. ¡Bienvenido!', 'success');
    // Puedes enviar el formulario aquí si todo es válido
    // form.submit();
  }
});

// Función para validar el número de control con el formato específico
function validarNumeroControl(numControl) {
  const regex = /^\d{2}84\d{4}$/; // Expresión regular para el formato "XX84XXXX"
  return regex.test(numControl);
}

// Función para validar solo letras (sin números ni símbolos)
function validarSoloLetras(texto) {
  const regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/; // Acepta letras con espacios y acentos
  return regex.test(texto);
}

// Función para validar solo números (sin letras ni símbolos)
function validarSoloNumeros(texto) {
  const regex = /^\d+$/; // Solo números
  return regex.test(texto);
}

// Función para mostrar mensaje de error o éxito
function mostrarMensaje(texto, tipo) {
  if (tipo === 'success') {
    message.innerHTML = `<span id="correcto">${texto}</span>`;
  } else if (tipo === 'error') {
    message.innerHTML = `<span id="error">${texto}</span>`;
  }
}

*/