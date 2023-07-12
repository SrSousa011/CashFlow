import { Component } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { Lancamento} from '../../domain/lancamentoInterface';
import { MessageService, ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css'],
  providers: [MessageService, ConfirmationService]
})


export class LancamentosPesquisaComponent {

lancamentoDialog: boolean = false;
lancamentos!: Lancamento[];
lancamento!: Lancamento;
selectedLancamentos!: Lancamento[] | null;
submitted: boolean = false;
statuses!: any[];
lancamentoService: Lancamento[] = [];

constructor(
  private primengConfig: PrimeNGConfig,
  private messageService: MessageService,
  private confirmationService: ConfirmationService
) {}

ngOnInit() {
 this.primengConfig.ripple = true;

this.lancamentoService = [

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
  },

  {
  "tipo": "Despesa",
  "descricao": "Compra de alimentos",
  "dataVencimento": "20/07/2023",
  "dataPagamento": null,
  "valor": 85.50,
  "pessoa": "Supermercado ABC"
  },
  {
  "tipo": "Receita",
  "descricao": "Reembolso de despesas",
  "dataVencimento": "10/08/2023",
  "dataPagamento": "12/08/2023",
  "valor": 200.00,
  "pessoa": "Empresa XYZ"
  },
  {
  "tipo": "Despesa",
  "descricao": "Manutenção do carro",
  "dataVencimento": "05/09/2023",
  "dataPagamento": null,
  "valor": 350.00,
  "pessoa": "Oficina Mecânica ABC"
},
{
  "tipo": "Despesa",
  "descricao": "Assinatura de streaming",
  "dataVencimento": "15/09/2023",
  "dataPagamento": null,
  "valor": 29.90,
  "pessoa": "Empresa de Streaming XYZ"
},
{
  "tipo": "Receita",
  "descricao": "Venda de carro",
  "dataVencimento": "30/09/2023",
  "dataPagamento": "01/10/2023",
  "valor": 15000.00,
  "pessoa": "Comprador ABC"
},
{
  "tipo": "Despesa",
  "descricao": "Compra de roupas",
  "dataVencimento": "10/10/2023",
  "dataPagamento": null,
  "valor": 250.00,
  "pessoa": "Loja de Roupas XYZ"
},
{
  "tipo": "Receita",
  "descricao": "Pagamento de aluguel",
  "dataVencimento": "20/10/2023",
  "dataPagamento": "19/10/2023",
  "valor": 1200.00,
  "pessoa": "Imobiliária ABC"
},
{
  "tipo": "Despesa",
  "descricao": "Conta de telefone",
  "dataVencimento": "05/11/2023",
  "dataPagamento": null,
  "valor": 50.00,
  "pessoa": "Operadora de Telefonia XYZ"
},
{
  "tipo": "Despesa",
  "descricao": "Compra de eletrônicos",
  "dataVencimento": "15/11/2023",
  "dataPagamento": null,
  "valor": 1500.00,
  "pessoa": "Loja de Eletrônicos ABC"
},
{
  "tipo": "Receita",
  "descricao": "Serviço de consultoria",
  "dataVencimento": "30/11/2023",
  "dataPagamento": "01/12/2023",
  "valor": 1000.00,
  "pessoa": "Cliente XYZ"
},
{
  "tipo": "Despesa",
  "descricao": "Pagamento de empréstimo",
  "dataVencimento": "05/12/2023",
  "dataPagamento": null,
  "valor": 500.00,
  "pessoa": "Instituição Financeira ABC"
},
{
  "tipo": "Despesa",
  "descricao": "Compra de medicamentos",
  "dataVencimento": "15/12/2023",
  "dataPagamento": null,
  "valor": 75.00,
  "pessoa": "Farmácia XYZ"
},
{
  "tipo": "Receita",
  "descricao": "Investimento em ações",
  "dataVencimento": "31/12/2023",
  "dataPagamento": "01/01/2024",
  "valor": 3000.00,
  "pessoa": "Corretora de Valores ABC"
},
{
  "tipo": "Despesa",
  "descricao": "Assinatura de revista",
  "dataVencimento": "05/01/2024",
  "dataPagamento": null,
  "valor": 20.00,
  "pessoa": "Editora XYZ"
},
{
  "tipo": "Receita",
  "descricao": "Serviço de manutenção",
  "dataVencimento": "20/01/2024",
  "dataPagamento": "18/01/2024",
  "valor": 500.00,
  "pessoa": "Prestador de Serviços ABC"
},
{
  "tipo": "Despesa",
  "descricao": "Compra de material de escritório",
  "dataVencimento": "31/01/2024",
  "dataPagamento": null,
  "valor": 50.00,
  "pessoa": "Papelaria XYZ"
},
{
  "tipo": "Despesa",
  "descricao": "Conta de água",
  "dataVencimento": "10/02/2024",
  "dataPagamento": null,
  "valor": 40.00,
  "pessoa": "Empresa de Abastecimento de Água ABC"
},
{
  "tipo": "Receita",
  "descricao": "Freelance de design",
  "dataVencimento": "20/02/2024",
  "dataPagamento": "21/02/2024",
  "valor": 800.00,
  "pessoa": "Cliente XYZ"
},
{
  "tipo": "Despesa",
  "descricao": "Compra de livros",
  "dataVencimento": "05/03/2024",
  "dataPagamento": null,
  "valor": 120.00,
  "pessoa": "Livraria ABC"
},
{
  "tipo": "Despesa",
  "descricao": "Pagamento de mensalidade",
  "dataVencimento": "15/03/2024",
  "dataPagamento": null,
  "valor": 200.00,
  "pessoa": "Instituição de Ensino XYZ"
}

 ];

  }

  editLanc(lancamento: Lancamento) {
    this.lancamento = { ...lancamento };
    this.lancamentoDialog = true;
  }

  deleteLanc(lanc: Lancamento) {
    console.log('Excluir lançamento:', lanc);
  }

}
