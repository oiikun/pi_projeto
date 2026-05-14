import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FuncionarioService {
  polos = [
    { id: 1, nome: 'Vila Maria' },
    { id: 2, nome: 'Parelheiros' },
    { id: 3, nome: 'Santo Amaro' },
    { id: 4, nome: 'Taipas' },
    { id: 5, nome: 'Jurubatuba' },
    { id: 6, nome: 'São José' },
    { id: 7, nome: 'Interlagos' }
  ];

  postos = [
    { id: 1,  nome: 'Limpeza',                 salario: 1412.00 },
    { id: 2,  nome: 'Estoquista',               salario: 1600.00 },
    { id: 3,  nome: 'Caixa',                    salario: 1700.00 },
    { id: 4,  nome: 'Gerente',                  salario: 4500.00 },
    { id: 5,  nome: 'Padeiro',                  salario: 2100.00 },
    { id: 6,  nome: 'Empacotador',              salario: 1412.00 },
    { id: 7,  nome: 'Fiscal de Loja',           salario: 2200.00 },
    { id: 8,  nome: 'Supervisor de Setor',      salario: 3200.00 },
    { id: 9,  nome: 'Auxiliar Administrativo',  salario: 2300.00 },
    { id: 10, nome: 'Conferente de Loja',       salario: 2000.00 }
  ];

  funcionarios: { id: number; nome: string; posto: string; salario: number; polo: string }[] = [
    { id: 1, nome: 'Eduardo', posto: 'Estoquista', salario: 1600.00, polo: 'Vila Maria' },
    { id: 2, nome: 'Murilo',  posto: 'Limpeza',    salario: 1412.00, polo: 'Santo Amaro' },
    { id: 3, nome: 'Nicolas', posto: 'Caixa',      salario: 1700.00, polo: 'Interlagos' }
  ];

  cadastrar(nome: string, posto: string, polo: string) {
    const postoObj = this.postos.find(p => p.nome === posto);
    this.funcionarios.push({
      id: this.funcionarios.length + 1,
      nome,
      posto,
      salario: postoObj?.salario ?? 0,
      polo
    });
  }
}