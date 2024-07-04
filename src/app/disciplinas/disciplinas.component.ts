import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.css'
})
export class DisciplinasComponent {
  cursoAtual: string = '';
  disciplinasPorSemestre: any[] = [];

  cursosDisciplinas: any = {
    'Engenharia': [
      { nome: 'Primeiro Semestre', disciplinas: ['Matemática', 'Física', 'Química'] },
      { nome: 'Segundo Semestre', disciplinas: ['Cálculo', 'Algoritmos', 'Eletricidade'] }
    ],
    'Medicina': [
      { nome: 'Primeiro Semestre', disciplinas: ['Anatomia', 'Biologia', 'Química Orgânica'] },
      { nome: 'Segundo Semestre', disciplinas: ['Fisiologia', 'Bioquímica', 'Histologia'] }
    ],
  };

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.cursoAtual = params['curso'];
      this.disciplinasPorSemestre = this.cursosDisciplinas[this.cursoAtual] || [];
    });
  }
}
