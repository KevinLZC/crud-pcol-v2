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