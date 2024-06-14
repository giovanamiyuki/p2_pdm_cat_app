import React from 'react';
import catApiClient from '../utils/catApiClient';
import ListaImagens from './ListaImagens';
import TheCatAPI from './TheCatAPI';
import './App.css';

export default class App extends React.Component {
  state = {
    photos: []
  };

  fetchCatPhotos = async () => {
    const { data } = await catApiClient.get('/images/search', {
      params: {
        limit: 5
      }
    });
    this.setState({ photos: data });
  };

  render() {
    return (
      <div className='app-container'>
        <div className="header">
          <TheCatAPI />
          <h1>Catify</h1>
          <p className="description">Um aplicativo de fotos aleatórias de gatinhos fofos</p>
          <div className="button-container">
            <button onClick={this.fetchCatPhotos} className="search-button">Gerar Fotos</button>
          </div>
        </div>
        <ListaImagens photos={this.state.photos} />
      </div>
    );
  }
}
