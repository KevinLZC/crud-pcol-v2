let inventory = new Inventory()
let items = inventory.getInventory
let itemTable = document.getElementById('itemTableBody')
let itemContainer = document.querySelector('.itemContainer')
renderItems()

function renderItems() {
  itemTable.innerHTML = ''
  itemContainer.innerHTML = ''
  items.forEach(item => {
    addItemTable(item)
    addItemCatalogue(item)
  })
}

function unchecked(checked) {
  if (checked === 'agotado') {
    document.getElementById('itemDisponible').checked = false
    document.getElementById('itemStock').checked = false
  } else if (checked === 'disponible') {
    document.getElementById('itemAgotado').checked = false
    document.getElementById('itemStock').checked = false
  } else if (checked === 'stock') {
    document.getElementById('itemAgotado').checked = false
    document.getElementById('itemDisponible').checked = false
  }
}

let btnAddItem = document.getElementById('btnAdd')
btnAddItem.addEventListener('click', () => {

  let itemAvailability = ''
  let itemHigh = ''
  let itemCondition = ''

  let itemName = document.getElementById('itemName').value
  let itemModel = document.getElementById('itemModel').value
  let itemBrand = document.getElementById('itemBrand').value
  let itemPrice = document.getElementById('itemPrice').value
  let itemAgotado = document.getElementById('itemAgotado').checked
  let itemDisponible = document.getElementById('itemDisponible').checked
  let itemSelected = document.getElementById('itemSelected').value
  let itemNuevo = document.getElementById('itemNuevo').checked
  let itemUsado = document.getElementById('itemUsado').checked
  let itemReparado = document.getElementById('itemReparado').checked


  if (itemAgotado) {
    itemAvailability = 'Agotado'
  } else if (itemDisponible) {
    itemAvailability = 'Disponible'
  } else if (itemStock) {
    itemAvailability = 'Stock'
  }

  if (itemSelected === 'Low') {
    itemHigh = 'Baja'
  } else if (itemSelected === 'Media') {
    itemHigh = 'Media'
  } else if (itemSelected === 'High') {
    itemHigh = 'Alta'
  }

  if (itemNuevo) {
    itemCondition = 'Nuevo'
  } else if (itemUsado) {
    itemCondition = 'Usado'
  } else if (itemReparado) {
    itemCondition = 'Reparado'
  }


  if (itemName == "" || itemModel == "" || itemBrand == "" || itemPrice == "") {
    window.alert("Faltan campos por llenar")
  } else {
    let itemId = generarId(6)
    let newItem = new Item(itemId, itemName, itemModel, itemBrand, itemPrice, itemAvailability, itemHigh, itemCondition)
    console.log(newItem)
    inventory.addNewItem(newItem)
    addItemTable(newItem)
    addItemCatalogue(newItem)
    cleanInputs()
    document.getElementById('itemForm').style.display = 'none'
    document.getElementById('showForm').style.display = 'block'

    let dialogAdd = document.getElementById('dialogAdd')
    dialogShow('add', dialogAdd, itemId,);
  }
})

let btnSaveItem = document.getElementById('btnSave')
btnSaveItem.addEventListener('click', () => {
  let itemId = items.find(item => item.getId === document.getElementById('itemId').value).getId
  saveItem(itemId)
  cleanInputs()
  renderItems()

  document.getElementById('itemForm').style.display = 'none'
  document.getElementById('showForm').style.display = 'block'
  document.getElementById('btnAdd').style.display = 'block'
  document.getElementById('btnSave').style.display = 'none'
})

function cleanInputs() {
  document.getElementById('itemName').value = ''
  document.getElementById('itemModel').value = ''
  document.getElementById('itemBrand').value = ''
  document.getElementById('itemPrice').value = ''
  document.getElementById('itemAgotado').checked = false
  document.getElementById('itemDisponible').checked = false
  document.getElementById('itemStock').checked = false
  document.getElementById('itemNuevo').checked = false
  document.getElementById('itemUsado').checked = false
  document.getElementById('itemReparado').checked = false
}

function generarId(longitud) {
  let id = ""
  const abc = "a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9".split(" ")
  for (i = 0; i <= longitud; i++) {
    const random = Math.floor(Math.random() * abc.length)
    id += abc[random]
  }
  return id
}

function addItemTable(item) {
  itemTable.innerHTML +=
    `<tr id=${item.getId}>
      <td>${item.getId}</td>
      <td>${item.getName}</td>
      <td>${item.getModel}</td>
      <td>${item.getBrand}</td>
      <td>$${item.getPrice}</td>
      <td>${item.getAvailability}</td>
      <td>${item.getHigh}</td>
      <td>${item.getCondition}</td>
      <td>
        <div class="btnTable">
          <a class="btnUpdate" onclick="setInputItem('${item.getId}')"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#ea580c" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15q.4 0 .775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"/></svg></a>
          <a class="btnDelete" onclick="deleteItem('${item.getId}')"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#dc2626" d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z"/></svg></a>
        </div
      </td>
    </tr>`
}

function addItemCatalogue(item) {
  itemContainer.innerHTML +=
    `<div id="${item.getId}" class="cardContainer">
    <h3>${item.getName}</h3>
    <p>${item.getModel}</p>
    <p>${item.getBrand}</p>
    <p>$${item.getPrice}</p>
    <p>${item.getAvailability}</p>
    <p>${item.getHigh}</p>
    <p>${item.getCondition}</p>
  </div>`
}

function setInputItem(id) {
  let itemId = document.getElementById('itemId')
  let itemName = document.getElementById('itemName')
  let itemModel = document.getElementById('itemModel')
  let itemBrand = document.getElementById('itemBrand')
  let itemPrice = document.getElementById('itemPrice')
  let itemAgotado = document.getElementById('itemAgotado')
  let itemDisponible = document.getElementById('itemDisponible')
  let itemStock = document.getElementById('itemStock')
  let itemBaja = document.getElementById('itemBaja')
  let itemMedia = document.getElementById('itemMedia')
  let itemAlta = document.getElementById('itemAlta')
  let itemNuevo = document.getElementById('itemNuevo')
  let itemUsado = document.getElementById('itemUsado')
  let itemReparado = document.getElementById('itemReparado')

  items.map(item => {
    if (item.getId === id) {
      itemId.value = item.getId
      itemName.value = item.getName
      itemModel.value = item.getModel
      itemBrand.value = item.getBrand
      itemPrice.value = item.getPrice
      if (item.getAvailability === 'Agotado') {
        itemAgotado.checked = true
      } else if (item.getAvailability === 'Disponible') {
        itemDisponible.checked = true
      } else if (item.getAvailability === 'Stock') {
        itemStock.checked = true
      }
      if (item.getHigh === 'Baja') {
        itemBaja.checked = true
      } else if (item.getHigh === 'Media') {
        itemMedia.checked = true
      } else if (item.getHigh === 'Alta') {
        itemAlta.checked = true
      }
      if (item.getCondition === 'Nuevo') {
        itemNuevo.checked = true
      } else if (item.getCondition === 'Usado') {
        itemUsado.checked = true
      } else if (item.getCondition === 'Reparado') {
        itemReparado.checked = true
      }
    }
  })

  document.getElementById('btnAdd').style.display = 'none'
  document.getElementById('btnSave').style.display = 'block'
  document.getElementById('itemForm').style.display = 'block'
  document.getElementById('showForm').style.display = 'none'
}

function saveItem(id) {
  items.map(item => {
    if (item.getId === id) {
      let itemName = document.getElementById('itemName').value
      let itemModel = document.getElementById('itemModel').value
      let itemBrand = document.getElementById('itemBrand').value
      let itemPrice = document.getElementById('itemPrice').value
      let itemAgotado = document.getElementById('itemAgotado').checked
      let itemDisponible = document.getElementById('itemDisponible').checked
      let itemStock = document.getElementById('itemStock').checked
      let itemSelected = document.getElementById('itemSelected').value
      let itemNuevo = document.getElementById('itemNuevo').checked
      let itemUsado = document.getElementById('itemUsado').checked
      let itemReparado = document.getElementById('itemReparado').checked

      console.log(itemSelected)
      if (itemName == "" || itemModel == "" || itemBrand == "" || itemPrice == "") {
        window.alert("Faltan campos por llenar")
      } else {
        item.setName = itemName
        item.setModel = itemModel
        item.setBrand = itemBrand
        item.setPrice = itemPrice
        if (itemAgotado) {
          item.setAvailability = 'Agotado'
        } else if (itemDisponible) {
          item.setAvailability = 'Disponible'
        } else if (itemStock) {
          item.setAvailability = 'Stock'
        }
        if (itemSelected === 'Low') {
          item.setHigh = 'Baja'
        } else if (itemSelected === 'Media') {
          item.setHigh = 'Media'
        } else if (itemSelected === 'High') {
          item.setHigh = 'Alta'
        }
        if (itemNuevo) {
          item.setCondition = 'Nuevo'
        } else if (itemUsado) {
          item.setCondition = 'Usado'
        } else if (itemReparado) {
          item.setCondition = 'Reparado'
        }

        dialogSave = document.getElementById('dialogSave')
        dialogShow('save', dialogSave, id,);
      }


    }
  })
}

function deleteItem(id) {
  dialogDelete = document.getElementById('dialogDelete')
  dialogShow('delete', dialogDelete, id,)
}

function dialogShow(action, dialog, id) {
  if (action === "save") {
    dialogContenido = document.getElementById('dialogSaveContent')
    dialogContenido.className =
      dialogContenido.textContent = `Se modificó el producto con ID "${id}" de forma correcta`
    dialog.showModal();
    setTimeout(function () {
      dialog.close();
    }, 3000)
  } else if (action === "add") {
    dialogContenido = document.getElementById('dialogAddContent')
    dialogContenido.textContent = `Se agregó el producto con ID "${id}" de forma correcta`
    dialog.showModal();
    setTimeout(function () {
      dialog.close();
    }, 3000)
  } else if (action === "delete") {
    dialogContenido = document.getElementById('dialogDeleteContent')
    dialogContenido.textContent = `Se eliminará el producto con ID "${id}" ¿Estás seguro?`
    dialog.showModal();
    setClass = document.getElementById('btnModalAccept')
    setClass.className = id
  }
}

function btnModalAccept(element) {
  dialog = document.getElementById('dialogDelete')
  dialog.close();
  register('delete')
  id = element.className
  let itemDiv = document.getElementById(id);
  itemDiv.remove();
  let itemTable = document.getElementById(id)
  itemTable.remove()
  inventory.deleteItem(id)
}

function btnModalCancel() {
  dialog = document.getElementById('dialogDelete')
  dialog.close();
}

function setActive(id) {
  let selection = document.getElementById(id)
  if (id === 'home') {
    selection.classList.add('active')
    document.getElementById('catalogue').classList.remove('active')
    document.getElementById('management').classList.remove('active')
  } else if (id === 'catalogue') {
    selection.classList.add('active')
    document.getElementById('home').classList.remove('active')
    document.getElementById('management').classList.remove('active')
  } else if (id === 'management') {
    selection.classList.add('active')
    document.getElementById('home').classList.remove('active')
    document.getElementById('catalogue').classList.remove('active')
  }
}

function navigateTo(id) {
  if (id === 'home') {
    setActive('home')
    document.getElementById('catalogueContent').style.display = 'none'
    document.getElementById('managementContent').style.display = 'none'
    document.getElementById('homeContent').style.display = 'block'
  } else if (id === 'catalogue') {
    setActive('catalogue')
    document.getElementById('homeContent').style.display = 'none'
    document.getElementById('managementContent').style.display = 'none'
    document.getElementById('catalogueContent').style.display = 'block'
  } else if (id === 'management') {
    setActive('management')
    document.getElementById('homeContent').style.display = 'none'
    document.getElementById('catalogueContent').style.display = 'none'
    document.getElementById('managementContent').style.display = 'block'
  }
}

function register(action) {
  if (action === 'add') {
    document.getElementById('itemForm').style.display = 'block'
    document.getElementById('showForm').style.display = 'none'
  } else if (action === 'cancel') {
    document.getElementById('itemForm').style.display = 'none'
    document.getElementById('btnAdd').style.display = 'block'
    document.getElementById('btnSave').style.display = 'none'
    document.getElementById('showForm').style.display = 'block'
    cleanInputs()
  } else if (action === 'delete') {
    document.getElementById('itemForm').style.display = 'none'
    document.getElementById('btnAdd').style.display = 'block'
    document.getElementById('btnSave').style.display = 'none'
    document.getElementById('showForm').style.display = 'block'
    cleanInputs()
  }
}
