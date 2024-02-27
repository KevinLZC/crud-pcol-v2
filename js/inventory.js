class Inventory {
  constructor() {
    this.inventory = []
  }

  get getInventory() {
    return this.inventory
  }

  addNewItem(item) {
    this.inventory.push(item)
  }

  deleteItem(id) {
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].id === id) {
        this.inventory.splice(i, 1)
      }
    }
  }
}