const btnNueva = document.querySelector('#btn-nueva');
const txtNueva = document.querySelector('#nueva-tarea');
const tareas = document.querySelector('#tareas');

btnNueva.addEventListener('click', ()=> {
    const nuevaTarea = document.createElement('li');
    const nuevaTareaBorrar = document.createElement('button');
    const nuevaTareaEditar = document.createElement('button');

    nuevaTarea.innerText = txtNueva.value;
    nuevaTareaBorrar.innerText = '❌';
    nuevaTareaEditar.innerText = '✏️';

    nuevaTareaBorrar.addEventListener('click', () => {
        console.log('Borrar Tarea');
        tareas.removeChild(nuevaTarea);
    });

    nuevaTareaEditar.addEventListener('click', () => {
        console.log('Editar Tarea');
    });
    
    nuevaTarea.appendChild(nuevaTareaBorrar);
    nuevaTarea.appendChild(nuevaTareaEditar);
    tareas.appendChild(nuevaTarea);
    
    txtNueva.value = '';
    txtNueva.focus(); // Deja el cursor sobre este elemento
});