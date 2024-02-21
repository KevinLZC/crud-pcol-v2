class Inventory {
  constructor() {
    this.inventory = []
  }

  get getInventory() {
    return this.inventory
  }

  addNewItem(item) {
    this.inventory.push(item)
    window.alert(`Se agregó el producto con ID ${item.id} de forma correcta`);
  }

  deleteItem(id) {
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].id === id) {
        this.inventory.splice(i, 1)
        window.alert(`Se eliminó el producto con ID ${id} de forma correcta`);
      }
    }
  }
}