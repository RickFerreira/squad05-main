import { PrimeIcons } from 'primereact/api';
import UrlRouter from './UrlRouter';

const menus = [
  { label: 'Dashboard', icon: PrimeIcons.HOME, to: '/' },
  { label: 'Comissão', icon: PrimeIcons.MONEY_BILL, to: UrlRouter.comissao.index },
  { label: 'Contrato', icon: PrimeIcons.PAPERCLIP, to: UrlRouter.contrato.index },
  { label: 'Campeonato', icon: PrimeIcons.APPLE, to: UrlRouter.campeonato.index },
  { label: 'Jogador', icon: PrimeIcons.USER, to: UrlRouter.jogador.index },
  { label: 'Professor', icon: PrimeIcons.PENCIL, to: UrlRouter.professor.index },
  { label: 'Aluno', icon: PrimeIcons.USERS, to: UrlRouter.aluno.index },
  { label: 'Time de Futebol', icon: PrimeIcons.TH_LARGE, to: UrlRouter.time.index },
  { label: 'Usuário', icon: PrimeIcons.USER, to: UrlRouter.usuario.index },
  { label: 'Tecnico', icon: PrimeIcons.USER_PLUS, to: UrlRouter.tecnico.index },
  { label: 'Disciplina', icon: PrimeIcons.BOOK, to: UrlRouter.disciplina.index },
  { label: 'Crud Exemplo Layout', icon: PrimeIcons.USER_EDIT, to: '/crud' },
  {
    label: 'Youtube',
    icon: PrimeIcons.YOUTUBE,
    items: [{ label: 'Video', icon: PrimeIcons.VIDEO, to: UrlRouter.video.index }],
  },
  {
    label: 'Hierarquia de Menu',
    icon: PrimeIcons.SEARCH,
    items: [
      {
        label: 'Submenu 1',
        icon: PrimeIcons.BOOKMARK,
        items: [
          {
            label: 'Submenu 1.1',
            icon: PrimeIcons.BOOKMARK,
            items: [
              { label: 'Submenu 1.1.1', icon: PrimeIcons.BOOKMARK },
              { label: 'Submenu 1.1.2', icon: PrimeIcons.BOOKMARK },
              { label: 'Submenu 1.1.3', icon: PrimeIcons.BOOKMARK },
            ],
          },
          {
            label: 'Submenu 1.2',
            icon: PrimeIcons.BOOKMARK,
            items: [
              { label: 'Submenu 1.2.1', icon: PrimeIcons.BOOKMARK },
              { label: 'Submenu 1.2.2', icon: PrimeIcons.BOOKMARK },
            ],
          },
        ],
      },
      {
        label: 'Submenu 2',
        icon: PrimeIcons.BOOKMARK,
        items: [
          {
            label: 'Submenu 2.1',
            icon: PrimeIcons.BOOKMARK,
            items: [
              { label: 'Submenu 2.1.1', icon: PrimeIcons.BOOKMARK },
              { label: 'Submenu 2.1.2', icon: PrimeIcons.BOOKMARK },
              { label: 'Submenu 2.1.3', icon: PrimeIcons.BOOKMARK },
            ],
          },
          {
            label: 'Submenu 2.2',
            icon: PrimeIcons.BOOKMARK,
            items: [
              { label: 'Submenu 2.2.1', icon: PrimeIcons.BOOKMARK },
              { label: 'Submenu 2.2.2', icon: PrimeIcons.BOOKMARK },
            ],
          },
        ],
      },
    ],
  },
];

export default menus;
