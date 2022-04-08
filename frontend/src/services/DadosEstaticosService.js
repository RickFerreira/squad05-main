const DadosEstaticosService = {
  getTipoComissao() {
    return [
      { value: 'PERMANENTE', text: 'Permanente' },
      { value: 'ESPECIAL', text: 'Especial' },
    ];
  },
  getTituloProfessor() {
    return [
      { value: 'DOUTOR', text: 'Doutor' },
      { value: 'MESTRE', text: 'Mestre'},
      { value: 'GRADUADO', text: 'Graduado'},
      { value: 'ESPECIALISTA', text: 'Especialista'},
    ]
  },

  getEstados() {
    return [
      { text: 'AC', value: 'Acre'},
      { text: 'AL', value: 'Alagoas' },
      { text: 'AP', value: 'Amapá' },
      { text: 'AM', value: 'Amazonas' },
      { text: 'BA', value: 'Bahia' },
      { text: 'CE', value: 'Ceará' },
      { text: 'DF', value: 'Distrito Federal' },
      { text: 'ES', value: 'Espírito Santo' },
      { text: 'GO', value: 'Goiás' },
      { text: 'MA', value: 'Maranhão' },
      { text: 'MT', value: 'Mato Grosso' },
      { text: 'MS', value: 'Mato Grosso do Sul ' },
      { text: 'MG', value: 'Minas Gerais' },
      { text: 'PA', value: 'Pará' },
      { text: 'PB', value: 'Paraíba' },
      { text: 'PR', value: 'Paraná' },
      { text: 'PE', value: 'Pernambuco' },
      { text: 'PI', value: 'Piauí' },
      { text: 'RR', value: 'Roraima' },
      { text: 'RO', value: 'Rondônia' },
      { text: 'RJ', value: 'Rio de Janeiro' },
      { text: 'RN', value: 'Rio Grande do Norte' },
      { text: 'RS', value: 'Rio Grande do Sul' },
      { text: 'SC', value: 'Santa Catarina' },
      { text: 'SP', value: 'São Paulo' },
      { text: 'SE', value: 'Sergipe' },
      { text: 'TO', value: 'Tocantins' },
    ];
  },

  getPosicao() {
    return [
      {value: "ATACANTE", text: "Atacante"},
      {value: "MEIA", text: "Meia"}, 
      {value: "LATERAL", text: "Lateral"}, 
      {value: "ZAGUEIRO", text: "Zagueiro"}, 
      {value: "GOLEIRO", text: "Goleiro"}
    ];
  }, 

  getPeChute() {
    return [
      {value: "DESTRO", text: "Destro"},
      {value: "CANHOTO", text: "Canhoto"}, 
      {value: "AMBIDESTRO", text: "Ambidestro"}
    ]
  }
};

export default DadosEstaticosService;
