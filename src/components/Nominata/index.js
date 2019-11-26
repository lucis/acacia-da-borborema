import React from 'react'
import classnames from 'classnames'
import styles from './Nominata.module.css'

const MOCK = [
  { cargo: 'Venerável-Mestre', oficial: 'Luciano de Oliveira' },
  { cargo: '1º Vigilante', oficial: 'José Romualdo' },
  { cargo: '2º Vigilante', oficial: 'José Romualdo' },
]

const Nominata = ({ cargos = MOCK }) => {
  return (
    <div className={classnames('flex justify-center mb4')}>
      <div className={classnames('ph4', styles.container)}>
        <h1>Nominata da Loja</h1>
        <p>
          A cada gestão de uma Loja, a diretoria escolhe os nomes dos irmãos que
          irão compor a nominata. Confira quais são os oficiais da atual gestão:
        </p>
        <table
          className={classnames(
            'lh-copy w-100 mt3',
          )}
          cellSpacing={0}
        >
          <thead>
            <tr className="bg-light-gray">
              <th className="fw6 bb b--black-20 tl pv3 pr3 tc">
                Cargo
              </th>
              <th className="fw6 bb b--black-20 tl pv3 pr3 tc">
                Irmão
              </th>
            </tr>
          </thead>
          <tbody>
            {cargos.map(({ cargo, oficial }, i) => (
              <tr className={(i % 2) ? 'bg-light-gray': ''} key={cargo}>
                <td className="pv3 pr3 bb b--black-20">{cargo}</td>
                <td className="pv3 pr3 bb b--black-20">{oficial}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Nominata
