import React, { Component } from "react";
import "./styles.css";

class Quiz extends Component {
  state = {
    perguntas: [
      {
        pergunta: "A ESPADA DARKIN?",
        respostas: [
          {
            opcao: "Cho'Gath",
            certo: false
          },
          {
            opcao: "Zed",
            certo: false
          },
          {
            opcao: "Aatrox",
            certo: true
          },
          {
            opcao: "Tahm Kench",
            certo: false
          }
        ]
      },
      {
        pergunta: "O IMPERDOÁVEL?",
        respostas: [
          {
            opcao: "Kayn",
            certo: false
          },
          {
            opcao: "Teemo",
            certo: false
          },
          {
            opcao: "Master Yi",
            certo: false
          },
          {
            opcao: "Yasuo",
            certo: true
          }
        ]
      },
      {
        pergunta: "OS CAÇADORES ETERNOS?",
        respostas: [
          {
            opcao: "Lee Sin",
            certo: false
          },
          {
            opcao: "Kindred",
            certo: true
          },
          {
            opcao: "Pyke",
            certo: false
          },
          {
            opcao: "Kalista",
            certo: false
          }
        ]
      },
      {
        pergunta: "A ASSASSINA RENEGADA?",
        respostas: [
          {
            opcao: "Akali",
            certo: true
          },
          {
            opcao: "Diana",
            certo: false
          },
          {
            opcao: "Katarina",
            certo: false
          },
          {
            opcao: "Orianna",
            certo: false
          }
        ]
      },
      {
        pergunta: "O EXPLORADOR PRÓDIGIO?",
        respostas: [
          {
            opcao: "Jayce",
            certo: false
          },
          {
            opcao: "Graves",
            certo: false
          },
          {
            opcao: "Ezreal",
            certo: true
          },
          {
            opcao: "Varus",
            certo: false
          }
        ]
      },
      {
        pergunta: "O TERROR DO VAZIO?",
        respostas: [
          {
            opcao: "Cho'Gath",
            certo: true
          },
          {
            opcao: "Vel'Koz",
            certo: false
          },
          {
            opcao: "Rek'Sai",
            certo: false
          },
          {
            opcao: "Kha'Zix",
            certo: false
          }
        ]
      },
      {
        pergunta: "A FLECHA DA VINGANÇA?",
        respostas: [
          {
            opcao: "Vayne",
            certo: false
          },
          {
            opcao: "Kalista",
            certo: false
          },
          {
            opcao: "Ashe",
            certo: false
          },
          {
            opcao: "Varus",
            certo: true
          }
        ]
      }
    ],
    perguntaAtual: 1,
    pontos: 0,
    respostaAtual: {}
  };

  renderError = () => {
    return <p>Selecione uma opção</p>;
  };

  handleNext = () => {
    const { respostaAtual, pontos } = this.state;
    this.setState({
      perguntaAtual: this.state.perguntaAtual + 1,
      pontos: respostaAtual.certo ? pontos + 1 : pontos
    });
  };

  renderPergunta = () => {
    return (
      <div className="box-perg">
        {this.state.perguntas
          .slice(this.state.perguntaAtual - 1, this.state.perguntaAtual)
          .map((item) => (
            <div>
              <p className="perg-text">{item.pergunta}</p>
              {this.renderResposta(item.respostas)}
            </div>
          ))}
      </div>
    );
  };

  renderResposta = (item) => {
    return (
      <div>
        {item.map((item) => (
          <div className="box-opcoes">
            <label>
              <input
                type="radio"
                name="resposta"
                onClick={() => {
                  this.setState({
                    respostaAtual: item,
                    error: false
                  });
                }}
              />
              {item.opcao}
            </label>
          </div>
        ))}
      </div>
    );
  };

  renderPontos = () => {
    return <h2 className="result">Você acertou {this.state.pontos} pontos</h2>;
  };

  render() {
    const finalizado =
      this.state.perguntas.length === this.state.perguntaAtual - 1;

    return (
      <div className="App">
        <h1>League Of Quiz</h1>
        <div>
          {finalizado ? this.renderPontos() : this.renderPergunta()}

          {!finalizado && (
            <button className="btn-next" onClick={this.handleNext}>
              Next
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
