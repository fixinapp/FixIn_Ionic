import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';
import { db } from '../../assets/db';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ModalCtrl: ModalController) {}
  cpf="0";
  nome="Zezinho da pá";
  dados: any;

  ngOnInit(){
    this.dados = db;
    console.log(this.dados);
  }

  async login() {
    const modal = await this.ModalCtrl.create({
      component: LoginComponent,
      componentProps: {antNome: this.nome, antCpf: this.cpf }
    });

    await modal.present();
    
    modal.onWillDismiss().then((novoLogin: any) => {
      this.nome = novoLogin.data.novoNome;
      this.cpf = novoLogin.data.novoCPF;

    });

    
  };

}
