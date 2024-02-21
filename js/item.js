class Item {
  constructor(id, name, model, brand, price) {
    this.id = id
    this.name = name
    this.model = model
    this.brand = brand
    this.price = price
  }

  // Getters
  get getId() {
    return this.id
  }
  get getName() {
    return this.name
  }
  get getModel() {
    return this.model
  }
  get getBrand() {
    return this.brand
  }
  get getPrice() {
    return this.price
  }

  // Setters
  set setName(name) {
    this.name = name
  }
  set setModel(model) {
    this.model = model
  }
  set setBrand(brand) {
    this.brand = brand
  }
  set setPrice(price) {
    this.price = price
  }
}