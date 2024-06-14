import React from 'react';
import Busca from './Busca';
import catApiClient from '../utils/catApiClient';
import ListaImagens from './ListaImagens';
import TheCatAPI from './TheCatAPI'; // Logo the cat API
import './App.css';

export default class App extends React.Component {
  state = {
    photos: []
  };

  onBuscaRealizada = async (termo) => {
    const { data } = await catApiClient.get('/images/search', {
      params: {
        q: termo,
        limit: 12 
      }
    });
    this.setState({ photos: data });
  };

  render() {
    return (
      <div className='app-container'>
        <div className="header">
          <TheCatAPI /> {/* logo do The Cat API */}
          <h1 className="title">Catify</h1>
          <p className="description">Um aplicativo que exibe fotos de gatinhos fofos</p>
        </div>
        <div className="search-section">
          <Busca
            onBuscaRealizada={this.onBuscaRealizada}
            classNameInputText="col-12 md:col-6"
            classNameButton="col-12 md:col-6"
          />
        </div>
        <div className="image-section">
          <ListaImagens photos={this.state.photos} />
        </div>
      </div>
    );
  }
}
