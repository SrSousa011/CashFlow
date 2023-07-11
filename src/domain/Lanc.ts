export interface Lanc {
  tipo: string;
  descricao: string;
  dataVencimento: string;
  dataPagamento: string | null;
  valor: number;
  pessoa: string;
}
