import React from "react";
import classnames from "classnames";
import MD from "react-markdown/with-html";
import styles from "./Maconaria.module.css";

const primeiraSecao = `
<h1 class="f3 f2-ns">O que é Maçonaria?</h1>

A Maçonaria é a maior **ordem fraternal** do mundo, formada por homens de todas as raças, credos e nacionalidades. Os maçons, como são chamados os membros da Maçonaria, são acolhidos através de uma **iniciação** e congregados em Lojas, nas quais, auxiliados por símbolos e alegorias, estudam e trabalham para a construção de uma **sociedade humana fundada no amor fraternal, na tolerância e na liberdade.**
<br/>
<br/>

A Maçonaria **não é uma religião**, mas é necessária a crença em um princípio criador para o ingresso na instituição. O amor a Deus, à Pátria, à Família e ao Próximo, com tolerância, com virtude e com sabedoria deve guiar a vida de um maçom, buscando sempre de maneira livre a investigação da verdade, aliada ao progresso do conhecimento humano, das ciências e das artes, sob a tríade: **Liberdade, Igualdade e Fraternidade**; dentro dos princípios da razão e da justiça, a fim de que o mundo alcance a felicidade geral e a paz universal. A maçonaria também tem um forte pilar filantrópico, promovendo **ações de caridade** e de conscientização social.
<br/>
<br/>
`;

const segundaSecao = `
<br/>

## Fraternidade
As reuniões nas Lojas e o aprendizado dentro da ordem criam um forte laço de companheirismo entre os maçons, tornando-se também um dos pontos fundamentais da maçonaria. A **amizade e a benevolência** devem sempre prevalecer entre irmãos, tratamento usado para com todos homens que são iniciados na instituição, desde os que já passaram por todos os graus da ordem, até os que acabaram de passar pela cerimônia de iniciação. A fraternidade de maçonaria é irrestrita, e deve ser perpetuada por toda a vida de quem vem a iniciar, estando sempre disposto a ajudar seus irmãos e familiares em necessidade.

<br/>

## Liderança
A maçonaria oferece inúmera e diversas oportunidades de liderança para seus membros, seja nas Lojas ou nas instituições administrativas pelo país, chamadas também de potências maçônicas. Ao longo do caminho de aprendizado dentro da ordem, o maçom encontrará diversos **desafios**, descobrirá **aspectos pessoais**, e poderá **desenvolver habilidades** que ele talvez nem soubesse que tinha. Através de papéis de liderança, um maçom abre as portas para descobrir todo o seu potencial.

<br/>

## Graus e Aprendizado
As cerimônias maçônicas fornecem instruções a todos os membros, complementadas por várias outras atividades, como seminários, palestras, oficinas e leitura. Como a Maçonaria é uma **sociedade esotérica**, certos aspectos de seu trabalho geralmente não são divulgados ao público. A Maçonaria usa um sistema de graus para explorar questões éticas e filosóficas, e o sistema é menos eficaz se o observador souber de antemão o que acontecerá. É descrito no ritual do ofício maçônico como "um belo sistema de moralidade velado na alegoria e ilustrado por símbolos".

<br/>

## Família
Por mais que a maçonaria permita apenas homens adultos em suas fileiras, toda a família é bem-vinda às Lojas através das **organizações paramaçônicas**. Atualmente, há diversas destas instituições em atividade e se destinam a diferentes públicos: a [**Ordem DeMolay**]([http://juntosvamosmaislonge.com.br/](http://juntosvamosmaislonge.com.br/)) aceita jovens de 12 a 21 anos e utiliza-se de ideais comuns a maçonaria para construir uma melhor juventude. Já para meninas, existem a [**Ordem Internacional das Filhas de Jó**](https://pt.wikipedia.org/wiki/Ordem_Internacional_das_Filhas_de_J%C3%B3) ou a [**Ordem Internacional do Arco-íris**](https://pt.wikipedia.org/wiki/Ordem_Internacional_das_Filhas_de_J%C3%B3) que apresentam propósito semelhantes. As esposas dos maçons também se congregam em associações vinculadas as Lojas, como o grupo **Damas da Acácia**.

<br/><br/>
`;
const Maconaria = () => {
  return (
    <div className="flex justify-center">
      <div className={classnames("mh4 tj", styles.container)}>
        <MD source={primeiraSecao} escapeHtml={false} />
        <img src={require("./graus.jpg")} alt="Graus da Maçonaria" />
        <MD source={segundaSecao} escapeHtml={false} />
        <h3 className="mt4">Saiba mais em:</h3>
        <ul className="list pl3 pv3">
          <li>
            <a href="http://www.grandelojapb.org/maconaria/conceito">
              Grande Loja Maçônica do Estado Paraíba
            </a>
          </li>
          <li>
            <a href="http://www.langley218.com/what-is-freemasonry/">
              O que é Maçonaria? (em inglês)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Maconaria;
