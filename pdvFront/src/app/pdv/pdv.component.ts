import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produto} from '../Model/pdv.model';
import {ProdutoService} from '../services/produto.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrls: ['./pdv.component.css'],
})
export class PDVComponent implements OnInit {

  produto: Produto = new Produto;

  produtoList: Produto[] = [];

  constructor(private produtoService: ProdutoService) {
  }


  ngOnInit(): void {
this.exibirProdutos();

  }

  exibirProdutos() {
    this.produtoService.findAllProdutosById().subscribe(resposta => {
      this.produtoList = resposta;
      localStorage.setItem("produto", JSON.stringify(resposta));
      this.atualizarTable();
      console.log(resposta);
    });
  }

  cod = new FormControl('', [Validators.required]);
  descricao = new FormControl('');
  nome = new FormControl('');
  quantidade = new FormControl('');
  preco = new FormControl('');
  totalPreco = new FormControl('');

  atualizarTable(){

    for (let i = 0; i < this.produtoList.length; ++i) {
      if (this.produtoList[i].codigo_barras) {
        this.produtoList.splice(i, 1);
      }
    }
  }

}
