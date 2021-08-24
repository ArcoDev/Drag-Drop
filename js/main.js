//variables 
const dropContainer = document.querySelector('.drop-container');
const dragText = document.querySelector('p');
const button = document.querySelector('button');
const input = document.querySelector('#drop-file');
let files;

button.addEventListener('click', (e) => {
    //mandar a llamar al input oculto
    input.click();
});

input.addEventListener('change', (e) => {
    files = this.files;
    dropContainer.classList.add('active');
    showFile(files);
    dropContainer.classList.remove('active');
});

function showFile(files) {
    //identificar si se sube un archivo o varios archivos
    if(files.length === undefined) {
        processFile(files);
    } else {
        for (const file of files) {
            processFile(file);
        }
    }
}

function processFile(file) {
    
}