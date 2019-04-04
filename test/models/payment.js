"use strict";

let expect = require("chai").expect;
let Converter = require("../../dist/generator/Converter.js");

describe("Create payment model from line", () => {
  const paymentLine =
    "82201904030    0000000000000666000000041600000123456788                        9";
  let conv = new Converter.Converter(paymentLine);
  let result = conv.convert();

  it("should have correct code", () => {
    expect(result.code).to.equal(82);
  });
  it("should have correct date", () => {
    expect(result.paymentDate).to.equal(20190403);
  });

  it("should have correct periodCode", () => {
    expect(result.periodCode).to.equal(0);
  });
  //   it("should have correct renewalAssignments", () => {
  //     expect(result.renewalAssignments).to.equal(123);
  //   });
  //   it("should have correct hasRenewalAssignments", () => {
  //     expect(result.hasRenewalAssignments).to.true;
  //   });
  it("should have correct payeeNumber", () => {
    expect(result.payeeNumber).to.equal(666);
  });
  it("should have correct amount", () => {
    expect(result.amount).to.equal(41600);
  });
  it("should have correct bankgiroNumber", () => {
    expect(result.bankgiroNumber).to.equal(1234567);
  });
  it("should have correct reference", () => {
    expect(result.reference).to.equal("88");
  });
  it("should have correct paymentStatus", () => {
    expect(result.paymentStatus).to.equal(9);
  });
});
