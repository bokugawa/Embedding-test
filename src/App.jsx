import React, { useState } from 'react'
import styled from 'styled-components'
import { TopMargin } from './components/TopMargin'

function App() {
  const [select, setSelect] = useState(
    'https://app.powerbi.com/view?r=eyJrIjoiODRiOWMzMTItYzI1Mi00MjcyLWFjM2MtYjE4NzhkMWU5ZGZhIiwidCI6Ijg4YzNlM2I1LWFiZGQtNDQ3Ni1iNDdhLWY1NjNhMjZhYWU5OSJ9',
  )

  const [plotly, setPlotly] = useState(false)
  return (
    <S.Container>
      <h1>Team DA. How to Embed BI tool into Web with SSE</h1>
      <TopMargin />
      <S.button>
        <div
          onClick={() => {
            setPlotly(true)
            setSelect(
              'https://app.powerbi.com/view?r=eyJrIjoiODRiOWMzMTItYzI1Mi00MjcyLWFjM2MtYjE4NzhkMWU5ZGZhIiwidCI6Ijg4YzNlM2I1LWFiZGQtNDQ3Ni1iNDdhLWY1NjNhMjZhYWU5OSJ9',
            )
          }}
        >
          power bi 임베딩 대시보드 (1)
        </div>
        <div
          onClick={() => {
            setPlotly(true)
            setSelect(
              'https://app.powerbi.com/view?r=eyJrIjoiYTI4YjU4MDktYTBhOC00OTg3LWI3NGEtOGNjOWM5ZDVmZWE3IiwidCI6Ijg4YzNlM2I1LWFiZGQtNDQ3Ni1iNDdhLWY1NjNhMjZhYWU5OSJ9',
            )
          }}
        >
          power bi 임베딩 대시보드 (2)
        </div>
        <div
          onClick={() => {
            setPlotly(false)
          }}
        >
          Plotly
        </div>
      </S.button>
      <TopMargin />
      {plotly ? (
        <iframe
          title="Retail Analysis Sample PBIX"
          width="100%"
          height="800"
          src={select}
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      ) : (
        <iframe
          title="Retail Analysis Sample PBIX"
          width="100%"
          height="800"
          src="http://15.164.164.74:5050/"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      )}
    </S.Container>
  )
}

export default App

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    margin-top: 20px;
  `,

  button: styled.div`
    display: flex;
    gap: 10px;

    div {
      border: 1px solid #fff;
      background-color: #00c7ae;
      color: #fff;
      padding: 10px;
      border-radius: 6px;

      &:hover {
        cursor: pointer;
      }
    }
  `,
}
