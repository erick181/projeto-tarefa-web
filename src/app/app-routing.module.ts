import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTarefasComponent } from './views/components/pages/tarefa/lista-tarefas/lista-tarefas.component';
import { CriarTarefaComponent } from './views/components/pages/tarefa/criar-tarefa/criar-tarefa.component';

const routes: Routes = [
  {path: '', component: ListaTarefasComponent},
  {path: 'tarefa/criar', component: CriarTarefaComponent},
  {path: 'tarefa/editar/:id', component: CriarTarefaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
