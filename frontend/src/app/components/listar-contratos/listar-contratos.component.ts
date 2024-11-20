
import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../models/contrato.model';
import { ContratoService } from '../../services/contrato.service';

@Component({
  selector: 'app-listar-contratos',
  templateUrl: './listar-contratos.component.html',
  styleUrls: ['./listar-contratos.component.css'],
})
export class ListarContratosComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoService) {}

  ngOnInit(): void {
    this.obtenerContratos();
  }

  obtenerContratos(): void {
    this.contratoService.obtenerTodos().subscribe({
      next: (data) => (this.contratos = data),
      error: (err) => console.error('Error al obtener contratos:', err),
    });
  }
}
