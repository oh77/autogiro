"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Field {
    constructor(position, length, type) {
        this.position = position;
        this.length = length;
        this.isLeft = false;
        this.padding = '';
        this.type = type;
    }
}
exports.Field = Field;
