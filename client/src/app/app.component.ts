import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor],  // Include HttpClientModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected to styleUrls
})
export class AppComponent implements OnInit { 
  http = inject(HttpClient);
  title = 'DatingApp';
  users: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    });
  }
}
