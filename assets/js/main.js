"use strict";

// Реализовать класс RangeValidator, со следующими свойствами:
//     ■  from (number);
//     ■  to (number);

class RangeValidator {
  /**
   *
   * @param {number} from
   * @param {number} to
   */

  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  // Реализовать getter'ы и setter'ы для обоих свойств

  set from(newFrom) {
    if (typeof newFrom !== "number") {
      throw new TypeError("Parameters have unappropriate type");
    }

    if (from >= to) {
      throw new RangeError("The first number cannot be greater than the second");
    }

    this._from = newFrom;
  }

  get from() {
    return this._from;
  }

  set to(newTo) {
    if (typeof newTo !== "number") {
      throw new TypeError("Parameters have unappropriate type");
    }

    if (to <= from) {
      throw new RangeError("The second number cannot be greater than the first");
    }

    this._to = newTo;
  }

  get to() {
    return this._to;
  }

  // Реализовать getter range, который будет возвращать массив с двумя числами диапазона

  get range() {
    return [this._from, this._to];
  }

  // Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.

  validate(num) {
    if (typeof num !== "number") {
      throw new TypeError("Parameters have unappropriate type");
    }

    if (num >= this._from && num <= this._to) {
      return num;
    }
    
    throw new RangeError("Out of range");
  }
}
