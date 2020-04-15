const resultados = document.querySelector('#resultados'),
  verMascotas = document.querySelector('#verMascotas'),
  verDuenos = document.querySelector('#verDuenos'),
  buscar = document.querySelector('#botonBuscar'),
  input = document.querySelector('#buscar')
  formulario = document.querySelector('#nuevaMascotaForm'),
  agregar = document.querySelector('#agregarMascota'),
  cancelarAgregar = document.querySelector('#cancelar');


verMascotas.addEventListener('click', ()=> {
  getData('/pets', mostrarMascotas);
});
verDuenos.addEventListener('click', () => {
  getData('/owners', mostrarDuenos);
});

buscar.addEventListener('click', () => {
  const petsName = input.value;
  getData('/pet?name=' + petsName, mostrarPerfilMascota);
});

resultados.addEventListener('click', () => {
  event.preventDefault();
  const id = event.target.id.slice(event.target.id.lastIndexOf('-') + 1);
  if (event.target.nodeName == 'A') {
    if (event.target.classList.contains('owner-link')) {
      getData('/owners/' + id, mostrarDuenos);
    } else if (event.target.classList.contains('pet-link')) {
      getData('/pet?id=' + id, mostrarPerfilMascota);
    }
  }
});

agregar.addEventListener('click', () => {
  //sacamos la clase hidden y mostramos el formulario
  formulario.classList.remove('hidden');
});

formulario.addEventListener('submit', () => {
  event.preventDefault();
  console.log('aquí deberíamos tener la lógica para hacer la llamada post y guardar los datos del formulario');
  //por ahora para cerrar el formulario.
  setTimeout(()=> {
    formulario.classList.add('hidden');
    cleanForm();
  }, 1000);
})
cancelarAgregar.addEventListener('click', () => {
  event.preventDefault();
  formulario.classList.add('hidden');
  cleanForm();
});
