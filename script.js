const addBtn = document.getElementById('addBtn')
const newItemInput = document.getElementById('newItem')
const list = document.getElementById('list')

const alert = document.getElementById('alert')


// Função para criar novo item
function createItem(text) {
    const li  = document.createElement('li')
    li.className = 'item'

    const label = document.createElement('label')
    label.className ='checkbox-label'
    label.innerHTML = '<div class="checkbox-img"></div><input type="checkbox"><p> ' + text + '</p>'

    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete'
    deleteBtn.innerHTML = '<img src="assets/Frame-3.svg" alt="">'

    // Remover item ao clicar no botão
    deleteBtn.addEventListener('click', () => {
        li.remove()
    })

    li.appendChild(label)
    li.appendChild(deleteBtn)
    list.appendChild(li)
}

// Adicionar item ao clicar no botão
addBtn.addEventListener('click', () => {
    const text = newItemInput.value.trim()
    if (text !== '') {
        createItem(text)
        newItemInput.value = ""
    }
})

// Permitir adicionar com Enter
newItemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click()
    }
})

// Ativar delete nos itens já existentes
document.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.item').remove()
        showNotification()
    })
})

// Cria o botao de fechar a menssagem
function showNotification () {
    alert.style.display = 'flex'

    //Esconder depois do tempo determinado
    setTimeout(() => {
        alert.style.display = 'none'
    }, 1500);
}

document.getElementById('close').addEventListener('click',
    () => {
        alert.style.display = 'none'
        
    }
 )