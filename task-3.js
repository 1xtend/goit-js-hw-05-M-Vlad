class Storage {
  constructor(itemsArray) {
    this.items = itemsArray;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(removableItem) {
    if (this.items.includes(removableItem)) {
      const index = this.items.indexOf(removableItem);

      this.items.splice(index, 1);
    } else {
      console.log('Такого товару не має на складі');
    }
  }
}

// ---------------

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.log(items);

storage.addItem('Дроїд');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);
