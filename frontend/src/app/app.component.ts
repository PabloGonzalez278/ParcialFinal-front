import { Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Usa RouterOutlet para soportar el enrutamiento
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [provideRouter(routes)], // Proporciona las rutas aquí
})
export class AppComponent {
  title = 'frontend';
}
