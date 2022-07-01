    const form = document.getElementById('form');
    const tarefa = document.getElementById('tarefa');
    const adicionar = document.getElementById('adicionar');
    const lista = document.getElementById('lista');
    

    adicionar.addEventListener('click', function (event){
        event.preventDefault();
        
    //pegando elementos
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    // 
    checkbox.setAttribute('id', 'checkbox');
    checkbox.setAttribute('type','checkbox');

    label.innerHTML = tarefa.value + '<br />';

    lista.appendChild(checkbox);
    lista.appendChild(label);

    form.reset();
    });






