import React from 'react';

    class Api extends React.Component{
        constructor() {
            super()
            this.state = {
                proxyurl: "https://cors-anywhere.herokuapp.com/",
                apiURL: 'api.salic.cultura.gov.br/v1/projetos/',
                loading: false,
                projects: []
            }
        }

        componentDidMount(){
          this.setState({loading: true})
            fetch(this.state.proxyurl +this.state.apiURL)
              .then(reponse => reponse.json())
                .then(data => {
                    this.setState({
                        loading: false,
                        projects: data._embedded.projetos
                    })
                  })
          }

        render(){

            //Loader
            const text = this.state.loading ? 
            <div>
            <br/>
            <span className="title">Aguarde, conexão com a API em andamento...</span> 
            <br/><br/>
            <progress className="progress is-small is-primary" max="100">15%</progress>
            </div>
            : 
            ''
            
            return (
                <div className="cardConteiner"> 
                {text}
                    {this.state.projects.map(projetos => (
                        <div key={projetos.PRONAC}>

<div className="card">
      <div className="cardHeader">
          <div className="headerContainer">
        <div className="columns">
          <div className="column is-four-fifths"><span className="title cardTitle">{projetos.nome}</span></div>
            <div className="column has-text-right">
              <a className="button headerButton is-large">
                <span className="icon is-small">
                  <i className="fas fa-pencil-ruler"></i>
                </span>
              </a>
            </div>
          </div></div>
      </div>
      <div className="card-content">
        <div className="content">
          <span className="title proponenteText has-text-weight-bold">{projetos.proponente}</span><br/>
          <span className="subtitle area">{projetos.area}</span><br/>
            <div className="columns">
              <div className="column is-half">
                <span className="subtitle municipio is-6">{projetos.municipio} - {projetos.UF}</span></div>
              <div className="column has-text-right">
                <span className="subtitle rouanet has-text-weight-bold">ROUANET - Art {(projetos.enquadramento).substring(7)}</span>
                </div>
              </div>     
  
          <div className="priceSection">
          <span className="subtitle is-6">
            <div className="columns dinheiroAprovado">
              <div className="column is-half margintop">
                <span className="subtitle dinheiroText has-text-weight-bold">Aprovado</span>
                        
              </div>
              <div className="column has-text-right margintop"> 
                <span className="subtitle dinheiroTextValor has-text-weight-bold">R$ {(projetos.valor_proposta).toLocaleString('pt-br')}</span>
              </div>
            </div>
          </span>

          <span className="subtitle is-6">
            <div className="columns dinheiroCaptado">
              <div className="column is-half margintop">
                <span className="subtitle dinheiroText has-text-weight-bold">Captado</span>
              </div>
              <div className="column has-text-right margintop"> 
                <span className="subtitle dinheiroTextValor has-text-weight-bold">R$ {(projetos.valor_captado).toLocaleString('pt-br')}</span>
              </div>
            </div>
          </span>

          <span className="subtitle is-6">
            <div className="columns dinheiroPerc">
              <div className="column is-full margintopperc">
                <span className="subtitle percText has-text-weight-bold">{(projetos.valor_captado/projetos.valor_proposta*100)}%</span>
              </div>
            </div>
          </span>
          </div>
          <br/>

          <span className="subtitle area has-text-weight-bold">Aportaram este projeto:</span><br/>

         
            <div className="columns">
              <div className="column is-three-fifths"><span className="supporters">{projetos.justificativa}</span></div>
              <div className="column has-text-right">
                <a className="button seeAll">
                  <span className="icon">
                    <i className="fas fa-eye"></i>
                  </span>
                  <span>Ver todos</span>
                </a>
              </div>
            </div>
  
        </div>

        <div className="cardFooter">
            <span className="subtitle is-7">
              <div className="columns">
                <div className="column is-three-fifths">

                <p className="buttons">
                  <a className="button footerButton is-medium">
                    <span className="icon is-small">
                    <i className="fas fa-expand-arrows-alt"></i>
                    </span>
                  </a>
                  
                  <a className="button footerButton is-medium">
                    <span className="icon is-small">
                      <i className="fas fa-search-plus"></i>
                    </span>
                  </a>

                  
                  <a className="button footerButton is-medium">
                    <span className="icon is-small">
                      <i className="fas fa-home"></i>
                    </span>
                  </a>
                </p>
                
                </div>
                <div className="column has-text-right">
                <a className="button footerButtonChoose is-medium">
                  <span>Me escolhe :D</span>
                </a>
                </div>
              </div>
            </span>
        </div>


      </div>
    </div>

                        </div>
                    ))}
                </div>
                )
            }
        }

export default Api;