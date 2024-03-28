import '@testing-library/jest-dom';
// import './node_modules/element-internals-polyfill';
import './node_modules/@inrupt/jest-jsdom-polyfills';
import { mockAnimations } from './src/__mocks__/mockedAnimation';

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

beforeEach(() => {
  mockAnimations();
  window.PointerEvent = MouseEvent;
});
