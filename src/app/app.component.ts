import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Lanc } from '../domain/Lanc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

 lancamentoService = [

    {
    tipo: 'Despesa',
    descricao: 'Compra de pão',
    dataVencimento: '30/06/2017',
    dataPagamento: null,
    valor: 4.55,
    pessoa: 'Padaria do José'
    },


  {
    tipo: 'Despesa',
    descricao: 'Pagamento do aluguel',
    dataVencimento: '15/07/2021',
    dataPagamento: '10/07/2021',
    valor: 1200.00,
    pessoa: 'Imobiliária XYZ'
  },

  {
    tipo: 'Despesa',
    descricao: 'Conta de energia',
    dataVencimento: '05/08/2023',
    dataPagamento: null,
    valor: 150.75,
    pessoa: 'Concessionária de Energia ABC'
  },

  {
    tipo: 'Receita',
    descricao: 'Salário',
    dataVencimento: '05/07/2022',
    dataPagamento: '05/07/2022',
    valor: 2500.00,
    pessoa: 'Empresa ABC'
  },

  {
    tipo: 'Despesa',
    descricao: 'Conta de energia',
    dataVencimento: '10/08/2023',
    dataPagamento: null,
    valor: 150.75,
    pessoa: 'Concessionária de Energia XYZ'
  },

  {
    tipo: 'Receita',
    descricao: 'Venda de produto',
    dataVencimento: '20/09/2022',
    dataPagamento: '20/09/2022',
    valor: 350.00,
    pessoa: 'Cliente ABC'
  },

  {
    tipo: 'Despesa',
    descricao: 'Pagamento de aluguel',
    dataVencimento: '31/12/2023',
    dataPagamento: null,
    valor: 800.00,
    pessoa: 'Imobiliária XYZ'
  },

  {
    tipo: 'Receita',
    descricao: 'Investimento',
    dataVencimento: '15/07/2022',
    dataPagamento: '15/07/2022',
    valor: 5000.00,
    pessoa: 'Instituição Financeira ABC'
  },

  {
    tipo: 'Receita',
    descricao: 'Pagamento de empréstimo',
    dataVencimento: '25/08/2022',
    dataPagamento: '25/08/2022',
    valor: 2000.00,
    pessoa: 'Amigo José'
  },

  {
    tipo: 'Receita',
    descricao: 'Serviço prestado',
    dataVencimento: '05/09/2022',
    dataPagamento: '05/09/2022',
    valor: 800.00,
    pessoa: 'Cliente XYZ'
  }

 ];

  editLanc(lanc: any) {
    console.log('Editar lançamento:', lanc);
  }

  deleteLanc(lanc: any) {
    console.log('Excluir lançamento:', lanc);
  }

}
