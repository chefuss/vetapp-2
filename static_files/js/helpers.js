//Fetch API. proporciona una interfaz parra recuperar recursos
//tiene por argumento obligatorio la ruta del recurso.
//devuelve una promesa que resuelve en response esa petición, sea o no correcta
function getData(path, cb) {
  fetch(path)
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (results) {
      resultados.innerHTML = '';
      console.log(results);
      if (typeof results.length !== 'undefined') {
        results.forEach((result) => {
          cb(result);
        });
      } else {
        cb(results);
      }
    })
    .catch(function (err) {
      console.log('Ha ocurrido un error: ', err);
      alert('Ha ocurrido un error, intenta nuevamente.');
    });
}

function mostrarMascotas(pet) {
  const container = document.createElement('div');
    container.id = pet.pet_id;
    container.classList.add('pet');
  const heading = document.createElement('h3');
  const link = document.createElement('a');
  link.className = 'pet-link';
  link.id = 'pet-' + pet.pet_id;
  link.textContent = pet.pet_name;
  heading.append(link);
  const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
  const image = document.createElement('img');
    image.src = '/img/' + pet.pet_picture;
  const owner = document.createElement('a');
    owner.id = 'owner-' + pet.pet_owner;
    owner.className = 'owner-link';
    owner.textContent = 'ver dueño';
  imageContainer.append(image);
  container.append(imageContainer, heading, owner);
  resultados.append(container);
}

function mostrarPerfilMascota(pet) {
  const container = document.createElement('div');
  container.id = pet.pet_id;
  container.classList.add('pet');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  const image = document.createElement('img');
  image.src = '/img/' + pet.pet_picture;

  const contentContainer = document.createElement('div');
  contentContainer.className = 'content-container';

  const heading = document.createElement('h3');
  heading.textContent = pet.pet_name;
  
  const lastVisit = document.createElement('p');
  lastVisit.className = 'small text-gray';
  const lastVisitFormat = new Date(pet.pet_last_visit);
  lastVisit.textContent = 'Última visita: ' + lastVisitFormat.toLocaleString('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const description = document.createElement('p');
  description.textContent = pet.pet_description;

  const owner = document.createElement('a');
  owner.id = 'owner-' + pet.pet_owner;
  owner.className = 'owner-link';
  owner.textContent = 'ver dueño';

  imageContainer.append(image);
  contentContainer.append(heading, lastVisit, description, owner);
  container.append(imageContainer, contentContainer);
  resultados.append(container);
}

function mostrarDuenos(dueno) {
  console.log(dueno);
  const container = document.createElement('div');
  container.id = dueno.owner_id;
  container.className = 'pet owner';
  const heading = document.createElement('h3');
  heading.textContent = dueno.owner_name;
  const pets = document.createElement('ul');
  const li = document.createElement('li');
  li.textContent = dueno.owner_pet;
  pets.append(li);
  // dueno.owner_pet.forEach((pet) => {
  //   const li = document.createElement('li');
  //   li.textContent = pet;
  //   pets.append(li);
  // });
  container.append(heading, pets);
  resultados.append(container);
}

function cleanForm() {
  formulario.querySelectorAll('input').forEach((input) => {
    input.value = '';
  });
  formulario.querySelector('textarea').value = '';
  console.log('formulario limpiio');
}