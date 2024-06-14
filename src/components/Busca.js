import React, { Component } from 'react';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './Busca.css'; // Adicione um arquivo CSS para os estilos

export default class Busca extends Component {
  state = {
    termoDeBusca: ''
  };

  onTermoAlterado = (event) => {
    this.setState({ termoDeBusca: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onBuscaRealizada(this.state.termoDeBusca);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="busca-form">
        <div className="input-group">
          <div className="input-field">
            <IconField iconPosition="left">
              <InputIcon className="pi pi-search" />
              <InputText
                value={this.state.termoDeBusca}
                className="w-full h-100"
                placeholder={this.props.dica}
                onChange={this.onTermoAlterado}
              />
            </IconField>
          </div>
          <Button
            label="Buscar"
            className="search-button"
          />
        </div>
      </form>
    );
  }
}

Busca.defaultProps = {
  dica: 'O que deseja buscar?'
};
