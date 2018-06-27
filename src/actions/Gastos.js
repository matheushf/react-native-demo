import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { ApiBase } from '../api';
import { GET_GASTOS, GET_GASTOS_ITENS } from './types';

export const obterGastos = () => {
  let gastos = [
    {
      nome: 'Alimentação'
    },
    {
      nome: 'Vida e Saúde'
    },
    {
      nome: 'Transporte'
    },
    {
      nome: 'Lazer e Opcionais'
    },
    {
      nome: 'Moradia'
    },
    {
      nome: 'Sonhos'
    }
  ];

  dispatch({ type: GET_GASTOS, payload: gastos });
}

export const obterGastoItens = (gasto) => {
  console.log('obter ', gasto);

  let retorno;

  switch (gasto) {

    default:
    case 'Adulto':
      retorno = [
        { nome: 'Vestuário' },
        { nome: 'Conta	de	Celular' },
        { nome: 'Academia	/	Personal	/	Esportes' },
        { nome: 'Perfumes	/	Cosméticos	/	Higiene	Pessoal' },
        { nome: 'Tratamentos	Estéticos' },
        { nome: 'Salão	/	Barbearia' },
        { nome: 'Educação' },
        { nome: 'Hobby	Pessoal' },
      ];
      break;

    case 'Filhos':
      retorno = [
        { nome: 'Vestuário' },
        { nome: 'Conta	de	Celular' },
        { nome: 'Academia / Personal / Esportes' },
        { nome: 'Perfumes / Cosméticos / Higiene	Pessoal' },
        { nome: 'Tratamentos	Estéticos' },
        { nome: 'Salão / Barbearia' },
        { nome: 'Educação' },
        { nome: 'Hobby	Pessoal' },
        { nome: 'Mesada' },
        { nome: 'Festa	de	Aniversário	/	Presentes' },
        { nome: 'Babá' }
      ];
      break;

    case 'Alimentação':
      retorno = [
        { nome: 'Café	da	Manhã' },
        { nome: 'Almoço' },
        { nome: 'Jantar' },
        { nome: 'Delivery' },
        { nome: 'Lanches	Fora	de	Hora' }
      ];
      break;

    case 'Vida e Saúde':
      retorno = [
        { nome: 'REAL	–	Planejamento	de	Qualidade	de	Vida' },
        { nome: 'Plano	de	Saúde' },
        { nome: 'Plano	Odontológico' },
        { nome: 'Farmácia	/	Medicamentos' },
        { nome: 'Tratamentos	/	Terapias' },
        { nome: 'Consultas	/	Exames' },
        { nome: 'Seguros	de	Vida' }
      ];
      break;

    case 'Transporte':
      retorno = [
        { nome: 'Transporte	Público' },
        { nome: 'Táxi	/	Uber' },
        { nome: 'Combustível' },
        { nome: 'Financiamento	/	Consórcio' },
        { nome: 'Seguro	do	Veículo' },
        { nome: 'IPVA	/	Despesas	Legais' },
        { nome: 'Lavagem' },
        { nome: 'Revisão	/	Manutenção	/	Troca	de	Óleo' },
        { nome: 'Troca	de	Pneus' },
        { nome: 'Estacionamento' },
        { nome: 'Pedágio	/	Sem	Parar' }
      ];
      break;

    case 'Lazer e Opcionais':
      retorno = [
        { nome: 'Ofertas	/	Doações	/	Dízimos' },
        { nome: 'Bares	/	Restaurantes' },
        { nome: 'Passeios	(Cinema	/	Teatro	/	Shows)' },
        { nome: 'Clube	Recreativo' },
        { nome: 'Assinaturas	(Revistas	/	Jornais	/	Netflix	/	Aplicativos)' },
        { nome: 'Presentes	dados	aos	Outros' },
        { nome: 'Viagens	Curtas' },
      ];
      break;

    case 'Moradia':
      retorno = [
        { nome: 'Supermercado	/	Feira	/	Açougue' },
        { nome: 'Água' },
        { nome: 'Luz' },
        { nome: 'Telefone	/	Internet' },
        { nome: 'Aluguel' },
        { nome: 'Condomínio' },
        { nome: 'IPTU	/	Obrigações	Legais' },
        { nome: 'Financiamento	da	Casa' },
        { nome: 'Gás' },
        { nome: 'Empregados	/	Serviços' },
        { nome: 'Diaristas' },
        { nome: 'Móveis	/	Decoração	/	Manutenção' },
        { nome: 'Animais	de	Estimação' },
      ];
      break;

    case 'Dividas':
      retorno = [
        { nome: 'Divida 1' },
        { nome: 'Divida 2' },
        { nome: 'Divida 3' },
      ];
      break;
  }

  dispatch({ type: GET_GASTOS_ITENS, payload: retorno });
}
