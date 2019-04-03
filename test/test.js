'use strict'

let expect = require('chai').expect
let index = require('../dist/index.js')

describe('Say hello', () => {
    it('should say Hello BGC', () => {
        let result = index.hello('BGC')
        expect(result).to.equal('Hello BGC')
    })
    it('should say Hello Andreas', () => {
        let result = index.hello('Andreas')
        expect(result).to.equal('Hello Andreas')
    })
})