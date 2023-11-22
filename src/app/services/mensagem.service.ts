import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private snakBar: MatSnackBar) { }

mensagem(msg: string){
this.snakBar.open(`${msg}`,'OK',{
  horizontalPosition: 'end',
  verticalPosition: 'top',
  duration: 4000
})

}
}
