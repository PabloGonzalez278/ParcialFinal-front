import { Component } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';

@Component({
  selector: 'app-crear-contrato',
  standalone: true,
  templateUrl: './crear-contrato.component.html',
  styleUrls: ['./crear-contrato.component.css'],
  imports: [],
})
export class CrearContratoComponent {
  constructor(private contratoService: ContratoService) {}

  crearContrato(
    identificador: string,
    valor: string, // Se recibe como string
    nombreContratante: string,
    documentoContratante: string,
    nombreContratista: string,
    documentoContratista: string,
    fechaInicial: string,
    fechaFinal: string
  ): void {
    
    const contrato = {
      identificador,
      valor: parseFloat(valor), 
      nombreContratante,
      documentoContratante,
      nombreContratista,
      documentoContratista,
      fechaInicial,
      fechaFinal,
    };

    console.log('Contrato enviado:', contrato);

    this.contratoService.crearContrato(contrato).subscribe({
      next: () => {
        alert('Contrato creado exitosamente');
      },
      error: (err) => {
        console.error('Error al crear el contrato:', err);
      },
    });
  }
}
