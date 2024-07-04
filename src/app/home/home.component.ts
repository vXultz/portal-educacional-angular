import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  proximasAtividades: any[] = [
    { titulo: 'Entrega de trabalho da disciplina X', descricao: 'Trabalho sobre desenvolvimento web.', data: new Date(2024, 6, 10) },
    { titulo: 'Avaliação da disciplina Y', descricao: 'Prova final do semestre.', data: new Date(2024, 6, 20) },
    { titulo: 'Chat com o mentor', descricao: 'Sessão de mentoria.', data: new Date(2024, 6, 25) },
  ];

  minhasDisciplinas: any[] = [
    { nome: 'Matemática', descricao: 'Disciplina de cálculo.', semestre: 'Primeiro' },
    { nome: 'Física', descricao: 'Disciplina de física geral.', semestre: 'Primeiro' },
    { nome: 'Química', descricao: 'Disciplina de química orgânica.', semestre: 'Primeiro' },
  ];

  cursosExtras: any[] = [
    { nome: 'Introdução à Programação', descricao: 'Curso básico de programação.' },
    { nome: 'Design Gráfico', descricao: 'Curso sobre fundamentos do design.' },
    { nome: 'Marketing Digital', descricao: 'Curso sobre estratégias de marketing online.' },
  ];
}
