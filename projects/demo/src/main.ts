import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DemoModule } from './app/demo.module';

platformBrowserDynamic()
  .bootstrapModule(DemoModule)
  .catch((err) => console.error(err));
