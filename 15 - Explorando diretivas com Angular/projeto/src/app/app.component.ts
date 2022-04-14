import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  counter = 0;
  pessoas = [
    { nome: 'Ivonaldo', sobrenome: 'Silva' },
    { nome: 'Maria', sobrenome: 'Rocha' },
    { nome: 'Gustavo', sobrenome: 'Freitas' },
    { nome: 'Luciano', sobrenome: 'Carlos' },
    { nome: 'Ana', sobrenome: 'Carolina' },
  ];
  text!:string;
  
  ngOnInit() {
    let interval = setInterval(() => {
      if (this.counter === 10) {
        clearInterval(interval);
        return;
      }
      this.counter++;
    }, 500);
  }
}
