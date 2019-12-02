import React from "react";
import classnames from "classnames";
import styles from "./Veneraveis.module.css";

const MOCK = {
  atual: {
    nome: "Luciano de Oliveira",
    pic: "images/veneraveis/vm1.jpg"
  },
  galeria: [
    {
      nome: "Antônio Dias Pereria Góis",
      periodo: "2015-2017",
      pic: "images/veneraveis/vm2.jpg"
    }
  ]
};

const Veneraveis = ({ dados = MOCK }) => {
  const { atual, galeria } = dados;
  return (
    <div className="flex justify-center">
      <div className={classnames("ph3 ph0-ns",  styles.container)}>
        <h1 className="f3 f2-ns tl">Galera de Veneráveis</h1>
        <p className="tl">
          Uma Loja Maçônica é comandada por um Venerável-Mestre, que é um maçom
          eleito para liderar a gestão administrativa nos próximos dois anos.
          Conheça o histórico de veneráveis de nossa Loja:
        </p>
        <div className="flex flew-rom justify-center">
          <div
            className={classnames(
              "w-40 w-30-ns flex flex-column pv2 mt3 br2 dim ph2 bg-black-10",
              styles.atual
            )}
          >
            <img src={atual.pic} alt="" className="br3" />
            <b className="mv2">{atual.nome}</b>
            <span className={styles.atualSpan}>ATUAL VENERÁVEL</span>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-around mt4">
          {galeria.map(({ nome, pic, periodo }) => (
            <div
              key={periodo}
              className="w-40 w-30-ns flex flex-column pv2 mb2 br2 dim ph2 bg-black-10"
            >
              <img src={pic} alt={nome} className="br3" />
              <b className="mv2">{nome}</b>
              <i>{periodo}</i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Veneraveis;
