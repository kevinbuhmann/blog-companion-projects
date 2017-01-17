import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable()
export class WidgetService {
  constructor(private api: ApiService) {
  }

  get(): any[] {
    return this.api.get('widgets');
  }
}
