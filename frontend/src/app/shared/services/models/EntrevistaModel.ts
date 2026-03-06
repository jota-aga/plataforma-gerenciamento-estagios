import { FormatoEntrevista } from './FormatoEntrevista';

export interface AgendamentoRequestModel {
  candidaturaId: number;
  dataHora: string;
  formato: FormatoEntrevista;
  detalhes?: string;
}

export interface EntrevistaModel {
  id: number;
  candidaturaId: number;
  nomeCandidato: string;
  tituloVaga: string;
  dataHora: string;
  formato: FormatoEntrevista;
  detalhes?: string;
}
