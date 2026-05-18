import { Injectable } from '@angular/core';

export interface Funcionario {
  id: number;
  nome: string;
  cpf: string;
  rg: string;
  dataNascimento: string;
  posto: string;
  salario: number;
  polo: string;
  celular: string;
  email: string;
}

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
    { id: 1,  nome: 'Limpeza',                salario: 1412.00 },
    { id: 2,  nome: 'Estoquista',              salario: 1600.00 },
    { id: 3,  nome: 'Caixa',                   salario: 1700.00 },
    { id: 4,  nome: 'Gerente',                 salario: 4500.00 },
    { id: 5,  nome: 'Padeiro',                 salario: 2100.00 },
    { id: 6,  nome: 'Empacotador',             salario: 1412.00 },
    { id: 7,  nome: 'Fiscal de Loja',          salario: 2200.00 },
    { id: 8,  nome: 'Supervisor de Setor',     salario: 3200.00 },
    { id: 9,  nome: 'Auxiliar Administrativo', salario: 2300.00 },
    { id: 10, nome: 'Conferente de Loja',      salario: 2000.00 }
  ];
    funcionarios: Funcionario[] = [
  { id: 1,  nome: 'Eduardo Almeida',  cpf: '123.456.789-01', rg: '12.345.678-9', dataNascimento: '1995-03-15', posto: 'Estoquista',              salario: 1600.00, polo: 'Vila Maria',   celular: '(11) 91234-5678', email: 'eduardo.silva@email.com' },
  { id: 2,  nome: 'Murilo Rocha',     cpf: '234.567.890-12', rg: '23.456.789-0', dataNascimento: '1990-07-22', posto: 'Limpeza',                  salario: 1412.00, polo: 'Santo Amaro', celular: '(11) 92345-6789', email: 'murilo.santos@email.com' },
  { id: 3,  nome: 'Nicolas Soares',   cpf: '345.678.901-23', rg: '34.567.890-1', dataNascimento: '1998-11-05', posto: 'Caixa',                    salario: 1700.00, polo: 'Interlagos',  celular: '(11) 93456-7890', email: 'nicolas.oliveira@email.com' },
  { id: 4,  nome: 'Ana Paula Lima',   cpf: '456.789.012-34', rg: '45.678.901-2', dataNascimento: '1993-01-30', posto: 'Gerente',                  salario: 4500.00, polo: 'Jurubatuba',  celular: '(11) 94567-8901', email: 'ana.lima@email.com' },
  { id: 5,  nome: 'Carlos Mendes',    cpf: '567.890.123-45', rg: '56.789.012-3', dataNascimento: '1988-06-18', posto: 'Padeiro',                  salario: 2100.00, polo: 'Taipas',      celular: '(11) 95678-9012', email: 'carlos.mendes@email.com' },
  { id: 6,  nome: 'Fernanda Costa',   cpf: '678.901.234-56', rg: '67.890.123-4', dataNascimento: '1997-09-12', posto: 'Empacotador',              salario: 1412.00, polo: 'Parelheiros', celular: '(11) 96789-0123', email: 'fernanda.costa@email.com' },
  { id: 7,  nome: 'Rafael Souza',     cpf: '789.012.345-67', rg: '78.901.234-5', dataNascimento: '1992-04-25', posto: 'Fiscal de Loja',           salario: 2200.00, polo: 'São José',    celular: '(11) 97890-1234', email: 'rafael.souza@email.com' },
  { id: 8,  nome: 'Juliana Ferreira', cpf: '890.123.456-78', rg: '89.012.345-6', dataNascimento: '1996-08-08', posto: 'Supervisor de Setor',      salario: 3200.00, polo: 'Vila Maria',  celular: '(11) 98901-2345', email: 'juliana.ferreira@email.com' },
  { id: 9,  nome: 'Marcos Rocha',     cpf: '901.234.567-89', rg: '90.123.456-7', dataNascimento: '1985-12-03', posto: 'Auxiliar Administrativo',  salario: 2300.00, polo: 'Santo Amaro', celular: '(11) 99012-3456', email: 'marcos.rocha@email.com' },
  { id: 10, nome: 'Patricia Alves',   cpf: '012.345.678-90', rg: '01.234.567-8', dataNascimento: '1994-05-20', posto: 'Conferente de Loja',       salario: 2000.00, polo: 'Interlagos',  celular: '(11) 90123-4567', email: 'patricia.alves@email.com' }
];
 funcionarioSelecionado: Funcionario | null = null;

  cadastrar(func: Omit<Funcionario, 'id'>) {
    this.funcionarios.push({
      id: this.funcionarios.length + 1,
      ...func
    });
  }
}