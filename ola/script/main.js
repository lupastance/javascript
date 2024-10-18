const btnNueva = document.querySelector('#btn-nueva');
const txtNueva = document.querySelector('#nueva-tarea');
const tareas = document.querySelector('#tareas');

btnNueva.addEventListener('click', ()=> {
    const nuevaTarea = document.createElement('li');
    const nuevaTareaTitulo = document.createElement('span');
    const nuevaTareaBorrar = document.createElement('button');
    const nuevaTareaEditar = document.createElement('button');

    nuevaTareaTitulo.innerText = txtNueva.value;
    nuevaTareaBorrar.innerText = '❌';
    nuevaTareaEditar.innerText = '✏️';

    nuevaTareaBorrar.addEventListener('click', () => {
        console.log('❌ Borrando la Tarea ⚠️', nuevaTareaTitulo.innerText);
        tareas.removeChild(nuevaTarea);
    });

    nuevaTareaEditar.addEventListener('click', () => {
        console.log('✏️ Editando la tarea 👉🏻', nuevaTarea.innerText);

        const tareaEditada = prompt('Cambia el nombre de la tarea', nuevaTareaTitulo.innerText);
        nuevaTareaTitulo.innerText = tareaEditada;        
    });
    
    nuevaTarea.appendChild(nuevaTareaTitulo);
    nuevaTarea.appendChild(nuevaTareaBorrar);
    nuevaTarea.appendChild(nuevaTareaEditar);

    tareas.appendChild(nuevaTarea);
    
    txtNueva.value = '';
    txtNueva.focus(); // Deja el cursor sobre este elemento
});