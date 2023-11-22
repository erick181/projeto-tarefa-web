import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefa';
import { MensagemService } from 'src/app/services/mensagem.service';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {

  tarefas: Tarefa[] = [];
  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'acoes'];

/**
 *
 */
constructor(
  private tarefaService: TarefaService,
  private router: Router,
  private mensagemService: MensagemService
  ) {

  
}
ngOnInit(): void {
  
  this.listarTarefas();
  
}

listarTarefas(): any{
  this.tarefaService.listarTodos().subscribe
  ((resposta) =>{
    
    this.tarefas = resposta;

  });
}
deletar(id: string): any{
  this.tarefaService.deletarTarefa(id).subscribe((resposta) =>{
    
    this.mensagemService.mensagem("Tarefa deletada com sucesso!");
    this.listarTarefas();
    
    });
}
}
