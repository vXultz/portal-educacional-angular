import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {
  searchTerm: string = '';
  alunos: any[] = [
    { nome: 'Alice', cpf: '111.111.111-11', email: 'alice@example.com', curso: 'Engenharia' },
    { nome: 'Bob', cpf: '222.222.222-22', email: 'bob@example.com', curso: 'Medicina' },
  ];
  filteredAlunos: any[] = [...this.alunos];

  constructor(private router: Router) { }

  onSearch() {
    this.filteredAlunos = this.alunos.filter(aluno =>
      aluno.nome.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      aluno.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onEdit(aluno: any) {
    this.router.navigate(['/cadastro-aluno'], { state: { aluno } });
  }

  onDelete(aluno: any) {
    if (confirm('Quer mesmo excluir este usuário?')) {
      this.alunos = this.alunos.filter(a => a !== aluno);
      this.filteredAlunos = [...this.alunos];
      alert('Usuário excluído com sucesso');
    }
  }
}
