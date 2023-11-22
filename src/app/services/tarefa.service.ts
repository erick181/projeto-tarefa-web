import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  listarTodos(): Observable<Tarefa[]>{

    const url = `${this.baseUrl}/api/listarTarefas`;
    return this.http.get<Tarefa[]>(url);
    
    }
  listarTarefa(id: string): Observable<Tarefa>{
      const url = `${this.baseUrl}/api/listarTarefa/${id}`;
      return this.http.get<Tarefa>(url);
    }
    
    criarTarefa(client: Tarefa): Observable<Tarefa>{
    
      const url = `${this.baseUrl}/api/adicionarTarefa`;
      return this.http.post<Tarefa>(url,client);  
    
    }
    
    editarTarefa(client: Tarefa, id: string): Observable<Tarefa>{
      const url = `${this.baseUrl}/api/atualizarTarefa/${id}`;
      return this.http.put<Tarefa>(url, client);
    }
    
    deletarTarefa(id: string): Observable<void>{
      const url = `${this.baseUrl}/api/deletarTarefa/${id}`;
      return this.http.delete<void>(url);
    }
}
