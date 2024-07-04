import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-de-alunos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-de-alunos.component.html',
  styleUrl: './cadastro-de-alunos.component.css'
})
export class CadastroDeAlunosComponent {
  aluno = {
    nome: '',
    cpf: '',
    email: '',
    celular: '',
    curso: ''
  };

  cursos: string[] = ['Engenharia', 'Medicina', 'Direito', 'Administração', 'Informática'];

  constructor(private router: Router) { }

  onSubmit() {
    if (this.aluno.nome && this.aluno.cpf && this.aluno.email && this.aluno.celular && this.aluno.curso) {
      console.log('Dados do aluno:', this.aluno);

      alert('Usuário salvo com sucesso');

      this.router.navigate(['/alunos']);
    }
  }
}
