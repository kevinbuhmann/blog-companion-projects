import { Injectable } from '@angular/core';

const data: { [index: string]: any[] } = {
  'widgets': [
    { 'id': 1, 'name': 'Toy Car' },
    { 'id': 2, 'name': 'Doll' },
    { 'id': 3, 'name': 'Teddy Bar' },
    { 'id': 4, 'name': 'Paper airplane' },
    { 'id': 5, 'name': 'Origami Swan' }
  ]
};

@Injectable()
export class ApiService {
  constructor() {
  }

  get(path: string): any[] {
    return data[path];
  }
}
