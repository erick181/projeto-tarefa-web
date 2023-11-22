import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefa';
import { MensagemService } from 'src/app/services/mensagem.service';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent {

 titulo: string = '';
 idTarefa: string = '';

tarefa: Tarefa = {
  id: 0,
  titulo: '',
  descricao: ''
}

constructor(
  private tarefaService: TarefaService,
  private route: ActivatedRoute,
  private router: Router,
  private mensagemService: MensagemService
) {}
ngOnInit(): void {
  
  this.idTarefa = this.route.snapshot.paramMap.get('id')!;
  if(this.idTarefa != null){
    this.preencherTarefa();
  }
  
  this.mudarTitulo();
}

mudarTitulo():any{
 
  if(this.idTarefa == null){
  this.titulo = "Criar";
  }else{
    this.titulo = "Editar";
  }
}

preencherTarefa(): any{
  this.tarefaService.listarTarefa(this.idTarefa).subscribe(
    (resposta) => {
      this.tarefa = resposta;
      }
  )
}

criar_atualizar(): any{

    if(this.idTarefa == null){
      this.tarefaService.criarTarefa(this.tarefa).subscribe((resposta) =>{
    
        this.mensagemService.mensagem("Tarefa criada com sucesso!");
        this.router.navigate(['/']);
        
        });
      }else{
        this.tarefaService.editarTarefa(this.tarefa, this.idTarefa).subscribe((resposta) =>{
    
          this.mensagemService.mensagem("Tarefa editada com sucesso!");
          this.router.navigate(['/']);
          
          });
      }

}
cancel(): any{
  this.router.navigate(["/"]);
}

}
