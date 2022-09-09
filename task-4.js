class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    if (typeof str === 'string') {
      const strElements = this._value.split('');

      strElements.push(str);

      this._value = strElements.join('');
    } else {
      console.log('Not a string');
    }
  }

  prepend(str) {
    if (typeof str === 'string') {
      const strElements = this._value.split('');

      strElements.unshift(str);

      this._value = strElements.join('');
    } else {
      console.log('Not a string');
    }
  }

  pad(str) {
    if (typeof str === 'string') {
      const strElements = this._value.split('');

      strElements.unshift(str);
      strElements.push(str);

      this._value = strElements.join('');
    } else {
      console.log('Not a string');
    }
  }
}

// -------------

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value);

builder.pad('=');
console.log(builder.value);

builder.append(71);

// -------------
