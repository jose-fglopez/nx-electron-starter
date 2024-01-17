import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClient } from '@angular/common/http';

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
    this.httpClient.get(' http://localhost:3000').subscribe(
      (res: unknown) => alert(JSON.stringify(res)),
      (err) => alert(JSON.stringify(err))
    );
  }
}
