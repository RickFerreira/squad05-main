import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import './layout/flags/flags.css';
import './layout/layout.scss';
import './App.scss';

import React from 'react';

import Template from './pages/Template';

import { Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { Dashboard } from './components/Dashboard';
import Crud from './pages/Crud';

import PrimeReact from 'primereact/api';
import ComissaoIndexPage from './pages/showcase';
import UrlRouter from './constants/UrlRouter';
import EditComissao from './pages/showcase/edit';
import NewComissao from './pages/showcase/new';
import { BrowserRouter } from 'react-router-dom';
import ContratoIndexPage from './pages/contrato';
import EditContrato from './pages/contrato/edit';
import NewContrato from './pages/contrato/new';
import CampeonatoIndexPage from './pages/campeonato';
import EditCampeonato from './pages/campeonato/edit';
import NewCampeonato from './pages/campeonato/new';
import AlunoIndexPage from './pages/aluno';
import EditAluno from './pages/aluno/edit';
import NewAluno from './pages/aluno/new';
import NewUsuario from './pages/usuario/new';
import UsuarioIndexPage from './pages/usuario';
import EditUsuario from './pages/usuario/edit';
import DisciplinaIndexPage from './pages/disciplina';
import EditDisciplina from './pages/disciplina/edit';
import NewDisciplina from './pages/disciplina/new';
import VideoIndexPage from './pages/video';
import EditVideo from './pages/video/edit';
import NewVideo from './pages/video/new';
import JogadorIndexPage from './pages/jogador';
import EditJogador from './pages/jogador/edit';
import NewJogador from './pages/jogador/new';
import ProfessorIndexPage from './pages/professor';
import EditProfessor from  './pages/professor/edit';
import NewProfessor from './pages/professor/new';
import TimeIndexPage from './pages/time';
import EditTime from './pages/time/edit';
import NewTime from './pages/time/new';
import TecnicoIndexPage from './pages/tecnico';
import EditTecnico from './pages/tecnico/edit';
import NewTecnico from './pages/tecnico/new';


PrimeReact.ripple = true;

require('dotenv').config();
const history = createBrowserHistory();

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Template>
        <Switch>
          <>
            <Route path="/" exact component={Dashboard} />
            <Route path="/crud" exact component={Crud} />
            <Route path={UrlRouter.comissao.index} exact component={ComissaoIndexPage} />
            <Route path={UrlRouter.comissao.editar} exact component={EditComissao} />
            <Route path={UrlRouter.comissao.novo} exact component={NewComissao} />
            <Route path={UrlRouter.contrato.index} exact component={ContratoIndexPage} />
            <Route path={UrlRouter.contrato.editar} exact component={EditContrato} />
            <Route path={UrlRouter.contrato.novo} exact component={NewContrato} />
            <Route path={UrlRouter.campeonato.index} exact component={CampeonatoIndexPage} />
            <Route path={UrlRouter.campeonato.editar} exact component={EditCampeonato} />
            <Route path={UrlRouter.campeonato.novo} exact component={NewCampeonato} />
            <Route path={UrlRouter.aluno.index} exact component={AlunoIndexPage} />
            <Route path={UrlRouter.aluno.editar} exact component={EditAluno} />
            <Route path={UrlRouter.aluno.novo} exact component={NewAluno} />
            <Route path={UrlRouter.usuario.index} exact component={UsuarioIndexPage} />
            <Route path={UrlRouter.usuario.editar} exact component={EditUsuario} />
            <Route path={UrlRouter.usuario.novo} exact component={NewUsuario} />
            <Route path={UrlRouter.disciplina.index} exact component={DisciplinaIndexPage} />
            <Route path={UrlRouter.disciplina.editar} exact component={EditDisciplina} />
            <Route path={UrlRouter.disciplina.novo} exact component={NewDisciplina} />
            <Route path={UrlRouter.video.index} exact component={VideoIndexPage} />
            <Route path={UrlRouter.video.editar} exact component={EditVideo} />
            <Route path={UrlRouter.video.novo} exact component={NewVideo} />
            <Route path={UrlRouter.jogador.index} exact component={JogadorIndexPage} />
            <Route path={UrlRouter.jogador.editar} exact component={EditJogador} />
            <Route path={UrlRouter.jogador.novo} exact component={NewJogador} />
            <Route path={UrlRouter.professor.index} exact component={ProfessorIndexPage} />
            <Route path={UrlRouter.professor.editar} exact component={EditProfessor} />
            <Route path={UrlRouter.professor.novo} exact component={NewProfessor} />
            <Route path={UrlRouter.time.index} exact component={TimeIndexPage} />
            <Route path={UrlRouter.time.novo} exact component={NewTime} />
            <Route path={UrlRouter.time.editar} exact component={EditTime} />
            <Route path={UrlRouter.tecnico.index} exact component={TecnicoIndexPage} />
            <Route path={UrlRouter.tecnico.editar} exact component={EditTecnico} />
            <Route path={UrlRouter.tecnico.novo} exact component={NewTecnico} />
          </>
        </Switch>
      </Template>
    </BrowserRouter>
  );
};

export default App;
