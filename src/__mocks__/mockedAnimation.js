export const mockAnimations = () => {
    Element.prototype.animate = jest.fn().mockImplementation(() => ({
      finished: Promise.resolve(),
    }));
  };