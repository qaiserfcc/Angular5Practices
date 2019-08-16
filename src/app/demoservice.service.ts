import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  constructor(private http:HttpClient) {}
 
  // Uses http.get() to load data from a single API endpoint
  getSimilarSkills() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getSimilarOccupations() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
