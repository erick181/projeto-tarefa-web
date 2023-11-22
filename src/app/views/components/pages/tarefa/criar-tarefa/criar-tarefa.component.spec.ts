import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTarefaComponent } from './criar-tarefa.component';

describe('CriarTarefaComponent', () => {
  let component: CriarTarefaComponent;
  let fixture: ComponentFixture<CriarTarefaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarTarefaComponent]
    });
    fixture = TestBed.createComponent(CriarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
