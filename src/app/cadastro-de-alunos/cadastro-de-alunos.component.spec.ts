import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeAlunosComponent } from './cadastro-de-alunos.component';

describe('CadastroDeAlunosComponent', () => {
  let component: CadastroDeAlunosComponent;
  let fixture: ComponentFixture<CadastroDeAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDeAlunosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDeAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
