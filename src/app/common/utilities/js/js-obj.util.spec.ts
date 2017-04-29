
import { JsObjUtil } from '.';

describe('JsObjUtil', () => {
  describe('isNullOrUndefined', () => {
    describe('Passing null-object', () => {
      let actualResult: boolean;

      beforeEach(() => {
        actualResult = JsObjUtil.isNullOrUndefined(null);
      });

      it('Should return true', () => {
        expect(actualResult).toBeTruthy();
      });
    });

    describe('Passing undefined', () => {
      let actualResult: boolean;

      beforeEach(() => {
        actualResult = JsObjUtil.isNullOrUndefined(undefined);
      });

      it('Should return true', () => {
        expect(actualResult).toBeTruthy();
      });
    });

    describe('Passing object', () => {
      let actualResult: boolean;

      beforeEach(() => {
        actualResult = JsObjUtil.isNullOrUndefined({});
      });

      it('Should return false', () => {
        expect(actualResult).toBeFalsy();
      });
    });
  });
});
