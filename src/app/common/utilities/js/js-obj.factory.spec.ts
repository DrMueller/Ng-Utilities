import { Individual } from '../../../areas/poc/models';

import { JsObjFactory, JsObjUtil } from '.';

describe('JsObFactory', () => {
  describe('create', () => {
    let actual: Individual;
    const templateObject = {
      firstName: 'Matthias',
      age: 30
    };

    beforeEach(() => {
      actual = JsObjFactory.create<Individual>(templateObject, Individual);
    });

    it('Should return newly created object', () => {
      const actualisNod = JsObjUtil.isNullOrUndefined(actual);
      expect(actualisNod).toBeFalsy();
    });

    describe('Returned object', () => {
      it('Should be of pass generic Type', () => {
        // http://stackoverflow.com/questions/899574/which-is-best-to-use-typeof-or-instanceof
        const actualIsInstanceOfType = actual instanceof Individual;
        expect(actualIsInstanceOfType).toBeTruthy();
      });

      it('Should have values set from passed template', () => {
        expect(actual.firstName).toEqual(templateObject.firstName);
      });

      it('Should not have properties set it doesnt have defined', () => {
        const propertyOnlyInTemplate = Object.keys(actual).find(f => f === 'age');
        expect(propertyOnlyInTemplate).toBeUndefined();
      });

      it('properties not in the template should be unitinialized', () => {
        const lastNameIsNod = JsObjUtil.isNullOrUndefined(actual.lastName);
        expect(lastNameIsNod).toBeTruthy();
      });
    });
  });
});
