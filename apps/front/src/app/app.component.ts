import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'nx-electron-starter-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'front';

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('http://localhost:3000/')
      .pipe(
        retry({
          count: 100,
          delay: 2000,
        })
      )
      .subscribe((res) => console.log(res));
  }
}
