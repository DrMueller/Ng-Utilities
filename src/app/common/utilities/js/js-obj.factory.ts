import { ParameterlessConstructor } from '../../interfaces/constructors';

export class JsObjFactory {
  public static create<T>(source: any, ctorFn: ParameterlessConstructor<T>): T {
    const result = new ctorFn();
    this.mapDefinedProperties(source, result);

    return result;
  }

  private static mapDefinedProperties<T>(source: Object, target: T): void {
    const properties = Object.getOwnPropertyNames(target);

    properties.forEach(propKey => {
      if (source.hasOwnProperty(propKey)) {
        target[propKey] = source[propKey];
      }
    });
  }
}
