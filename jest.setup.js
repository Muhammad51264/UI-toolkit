import './node_modules/@inrupt/jest-jsdom-polyfills';
import './node_modules/element-internals-polyfill';
import './node_modules/intersection-observer';
import '@testing-library/jest-dom';
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
