import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculateAlticciSequenceService {
  private url: string = `${environment.url}/alticci/`;

  constructor(private httpClient: HttpClient) { }

  calculateSequence(index: number) {
    return this.httpClient.get(this.url + index);
  }
}
