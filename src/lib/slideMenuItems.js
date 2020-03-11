module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'LISTAGEM FORNECEDORES'
  },
  {
    type: 'tree',
    icon: 'fa fa-circle-o',
    name: 'Modulos',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Empresas',
        router: {
          name: 'EmpresaPage'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Fornecedores',
        router: {
          name: 'Fornecedores'
        }
      }
    ]
  }
]
