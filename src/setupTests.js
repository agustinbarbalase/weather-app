/*
 * Jest-dom adds custom jest matchers for asserting on DOM nodes.
 * allows you to do things like:
 * expect(element).toHaveTextContent(/react/i)
 * learn more: https://github.com/testing-library/jest-dom
 */
import '@testing-library/jest-dom';

const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  },

  mockDate = {
    now: jest.fn(),
    getDay: jest.fn(),
    toLocaleDateString: jest.fn()
  };

global.navigator.geolocation = mockGeolocation;
global.Date = mockDate;