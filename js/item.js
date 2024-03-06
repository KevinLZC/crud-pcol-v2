class Item {
  constructor(id, name, model, brand, price, availability, high, condition) {
    this.id = id
    this.name = name
    this.model = model
    this.brand = brand
    this.price = price
    this.availability = availability
    this.high = high
    this.condition = condition
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

  get getAvailability() {
    return this.availability
  }

  get getHigh() {
    return this.high
  }

  get getCondition() {
    return this.condition
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

  set setAvailability(availability) {
    this.availability = availability
  }

  set setHigh(high) {
    this.high = high
  }

  set setCondition(condition) {
    this.condition = condition
  }
}