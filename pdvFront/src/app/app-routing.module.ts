import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroDeProdutosComponent } from './cadastro-de-produtos/cadastro-de-produtos.component';
import { CadastroDeUsuarioComponent } from './cadastro-de-usuario/cadastro-de-usuario.component';
import { ConsultaCaixaComponent } from './consulta-caixa/consulta-caixa.component';
import { PDVComponent } from './pdv/pdv.component';

const routes: Routes = [
  { path: '', pathMatch: "full",redirectTo: "home"},
  { path: 'home', component: AppComponent},
  { path: 'cadastroProdutos', component: CadastroDeProdutosComponent},
  { path: 'cadastroUsuario', component: CadastroDeUsuarioComponent},
  { path: 'consultaCaixa', component: ConsultaCaixaComponent},
  { path: 'pdv', component: PDVComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
