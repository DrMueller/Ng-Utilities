import { ValueProvider } from '@angular/core';

import { NgProviderFactory } from '.';

describe('NgProviderFactory', () => {
  describe('createValueProvider', () => {
    let actualValueProvider: ValueProvider;
    const expectedProvide = {};
    const expectedUseValue = {};
    const expectedMulti = true;

    beforeEach(() => {
      actualValueProvider = NgProviderFactory.createValueProvider(expectedProvide, expectedProvide, expectedMulti);
    });

    it('Should return passed provide-object', () => {
      expect(actualValueProvider.provide).toEqual(expectedProvide);
    });

    it('Should return passed useValue-object', () => {
      expect(actualValueProvider.useValue).toEqual(expectedUseValue);
    });

    it('Should return passed multi.value', () => {
      expect(actualValueProvider.multi).toEqual(expectedMulti);
    });
  });
});
