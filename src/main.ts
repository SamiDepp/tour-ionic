import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

declare var google;
platformBrowserDynamic().bootstrapModule(AppModule);
