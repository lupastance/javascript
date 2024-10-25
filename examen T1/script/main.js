import { sayHello, getResult } from './helpers.js';

// Cargando JS desde el propio archivo e importando helpers
console.log('🔰 JavaScript ha cargado correctamente 🔰');
sayHello();

const loginUser = document.querySelector('#login-user');
const loginPassword = document.querySelector('#login-password');
const loginResult = document.querySelector('#login-result');

const tareaButtonAdd = document.querySelector('#tarea-button-add');
const todoListTasks = document.querySelector('#todo-list-tasks');

var userUser = '';
var userPassword = '';

getUsuario();
getPassword();

function getUsuario() {
    const username = document.querySelector('#username');
    const loginButtonUsername = document.querySelector('#login-button-username');

    loginButtonUsername.addEventListener('click', () => {
        loginUser.classList.toggle('hide');
        loginPassword.classList.toggle('hide');
        
        userUser = username.value;
    });

}

function getPassword() {
    const password = document.querySelector('#password');
    const loginButtonPassword = document.querySelector('#login-button-password');

    loginButtonPassword.addEventListener('click', () => {
        loginPassword.classList.toggle('hide');
        loginResult.classList.toggle('hide');
        
        userPassword = password.value;

        getResult(userUser, userPassword);
    });
}

tareaButtonAdd.addEventListener('click', () => {
    const todoListTasks = document.querySelector('#todo-list-tasks');
    const task = document.createElement('li');
    const taskTitle = document.createElement('span');
    const taskDescription = document.createElement('span');
    const buttonEditTask = document.createElement('button');
    const buttonDeleteTask = document.createElement('button');
    var inputTareaTitulo = document.querySelector('#input-tarea-titulo');
    var inputTareaDescripcion = document.querySelector('#input-tarea-descripcion');
    
    taskTitle.innerText = inputTareaTitulo.value + ': ';
    taskTitle.classList.add('tarea-titulo');

    taskDescription.innerText = inputTareaDescripcion.value;
    taskDescription.classList.add('tarea-descripcion');

    inputTareaTitulo.value = inputTareaDescripcion.value = '';
    buttonEditTask.innerText = '✏️';
    buttonDeleteTask.innerText = '❌';

    task.appendChild(buttonEditTask);
    task.appendChild(buttonDeleteTask);
    task.appendChild(taskTitle);
    task.appendChild(taskDescription);
    todoListTasks.appendChild(task);

    buttonEditTask.addEventListener('click', () => {
        console.log('🚧', 'Editando tarea...', inputTareaTitulo.value);
        const newTitle = prompt('Editando título', taskTitle.innerText);
        const newDescription = prompt('Editando descripción', taskDescription.innerText);

        taskTitle.innerHTML = newTitle + ': ';
        taskDescription.innerHTML = newDescription;
    })

    buttonDeleteTask.addEventListener('click', () => {
        console.log('❌', 'Eliminando Tarea...');
        todoListTasks.removeChild(task);
    })
})