'use strict';

const Input =  require('../lib/input.js');
const minimist = require('minimist');
jest.mock('minimist');
minimist.mockImplementation(() => {
  return {
    a: 'This mock should work',
  };
});

let input = new Input();
describe('Input Module', ()=> {

  it('getMethod() has "Invalid" default value with no valid input', () =>{
    expect(input.getMethod()).toEqual(undefined);
    expect(input.getMethod({ _: [], ad: 'data'})).toEqual('Invalid');
  });

  it('getMethod() has a key with a proper input', () =>{
    expect(input.getMethod({ _: [], a: 'data'})).toEqual('a');
    expect(input.getMethod({ _: [], add: 'data'})).toEqual('add');
    // expect(input.addData('a',{ _: [], a: 'data'})).toEqual('data')
  });
});