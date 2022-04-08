const UrlRouter = {
  home: '/',
  comissao: {
    index: '/comissao',
    novo: '/comissao/novo',
    editar: '/comissao/editar/:id',
  },
  contrato: {
    index: '/contrato',
    novo: '/contrato/novo',
    editar: '/contrato/editar/:id',
  },  
  campeonato: {
    index: '/campeonato',
    novo: '/campeonato/novo',
    editar: '/campeonato/editar/:id',
  },
  jogador: {
    index: '/jogador',
    novo: '/jogador/novo',
    editar: '/jogador/editar/:id',
  },
  aluno: {
    index: '/aluno',
    novo: '/aluno/novo',
    editar: '/aluno/editar/:id',
  },
  usuario: {
    index: '/usuario',
    novo: '/usuario/novo',
    editar: '/usuario/editar/:id',
  },
  disciplina: {
    index: '/disciplina',
    novo: '/disciplina/novo',
    editar: '/disciplina/editar/:id',
  },
  video: {
    index: '/video',
    novo: '/video/novo',
    editar: '/video/editar/:id',
  },
  professor: {
    index: '/professor',
    novo: '/professor/novo',
    editar: '/professor/editar/:id',
  },
  
  time: {
    index: '/time',
    novo: '/time/novo',
    editar: '/time/editar/:id',
  },

  tecnico: {
    index: '/tecnico',
    novo: '/tecnico/novo',
    editar: '/tecnico/editar/:id',
  },
};

export default UrlRouter;
