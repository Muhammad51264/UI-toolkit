import '@testing-library/jest-dom';
import './node_modules/element-internals-polyfill';
import './node_modules/@inrupt/jest-jsdom-polyfills';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
