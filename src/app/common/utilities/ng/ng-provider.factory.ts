import { ValueProvider } from '@angular/core';

export class NgProviderFactory {
  public static createValueProvider(provide: any, useValue: any, multi?: boolean): ValueProvider {
    return {
      multi: multi,
      provide: provide,
      useValue: useValue
    };
  }
}
