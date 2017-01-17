import 'reflect-metadata';

import { ReflectiveInjector } from '@angular/core';

import { providers } from './providers';
import { WidgetService } from './services/widget.service';

const injector = ReflectiveInjector.resolveAndCreate(providers);
const widgets: WidgetService = injector.get(WidgetService);

console.log(widgets.get());
