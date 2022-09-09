function Account(obj) {
  this.login = obj.login;
  this.email = obj.email;
}

Account.prototype.getInfo = function () {
  console.log(this);
};

// console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo();
