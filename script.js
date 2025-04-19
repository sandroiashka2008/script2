// 1) Car და ElectricCar
class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  }
  
  class ElectricCar extends Car {
    constructor(make, model, year, batteryLevel) {
      super(make, model, year);
      this.batteryLevel = batteryLevel;
    }
  }
  
  const tesla = new ElectricCar("Tesla", "Model S", 2022, "85%");
  console.log("1:", tesla);
  
  // 2) Library
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    removeBook(title) {
      this.books = this.books.filter(b => b.book !== title);
    }
  
    listBooks() {
      return this.books;
    }
  }
  
  const myLibrary = new Library();
  myLibrary.addBook({ author: 'George Orwell', book: 'Nineteen Eighty-Four', year: 1948 });
  myLibrary.addBook({ author: 'J.K. Rowling', book: 'Harry Potter', year: 1997 });
  myLibrary.removeBook('Harry Potter');
  console.log("2:", myLibrary.listBooks());
  
  // 3) Employee
  class Employee {
    constructor(name) {
      this.name = name;
    }
  
    calculateSalary(hoursWorked, hourlyRate) {
      return hoursWorked * hourlyRate;
    }
  }
  
  const emp = new Employee("Anna");
  console.log("3:", emp.calculateSalary(40, 25)); // 1000
  
  // 4) ShoppingCart
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    deleteItem(name) {
      this.items = this.items.filter(i => i.name !== name);
    }
  
    updateItem(name, newItem) {
      this.items = this.items.map(i => i.name === name ? { ...i, ...newItem } : i);
    }
  
    calculateTotal() {
      return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  }
  
  const cart = new ShoppingCart();
  cart.addItem({ name: "Laptop", price: 1000, quantity: 1 });
  cart.addItem({ name: "Mouse", price: 50, quantity: 2 });
  cart.updateItem("Mouse", { quantity: 3 });
  cart.deleteItem("Laptop");
  console.log("4:", cart.items);
  console.log("Total:", cart.calculateTotal());
  
  // 5) CarFactory
  class CarFactory {
    constructor() {
      this.cars = [];
    }
  
    getRandomYear() {
      return Math.floor(Math.random() * (2024 - 2010 + 1)) + 2010;
    }
  
    addCar(model, price) {
      const car = {
        year: this.getRandomYear(),
        model,
        price
      };
      this.cars.push(car);
    }
  
    deleteCar(model) {
      this.cars = this.cars.filter(c => c.model !== model);
    }
  
    updateCar(model, updatedData) {
      this.cars = this.cars.map(c => c.model === model ? { ...c, ...updatedData } : c);
    }
  
    getAllCars() {
      return this.cars;
    }
  }
  
  const factory = new CarFactory();
  factory.addCar("Ferrari", 350000);
  factory.addCar("BMW", 100000);
  factory.updateCar("BMW", { price: 95000 });
  factory.deleteCar("Ferrari");
  console.log("5:", factory.getAllCars());
  
  // 6) Rectangle
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  
    isSquare() {
      return this.width === this.height;
    }
  }
  
  const rect = new Rectangle(10, 10);
  console.log("6 Area:", rect.getArea());
  console.log("6 Perimeter:", rect.getPerimeter());
  console.log("6 isSquare:", rect.isSquare());
  
  // 7) Inventory
  class Inventory {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    updateStock(name, quantity) {
      const item = this.items.find(i => i.name === name);
      if (item) item.stock = quantity;
    }
  
    checkAvailability(name) {
      const item = this.items.find(i => i.name === name);
      return item ? item.stock > 0 : false;
    }
  
    calculateValue() {
      return this.items.reduce((acc, i) => acc + (i.stock * i.price), 0);
    }
  }
  
  const inventory = new Inventory();
  inventory.addItem({ name: "Pen", stock: 100, price: 1 });
  inventory.addItem({ name: "Notebook", stock: 50, price: 3 });
  inventory.updateStock("Pen", 80);
  console.log("7 Availability of Pen:", inventory.checkAvailability("Pen"));
  console.log("7 Total Inventory Value:", inventory.calculateValue());
  