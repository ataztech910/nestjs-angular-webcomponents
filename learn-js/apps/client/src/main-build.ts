import { AppComponent } from './app/app.component';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const appComponent = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('web-component', appComponent);

})();