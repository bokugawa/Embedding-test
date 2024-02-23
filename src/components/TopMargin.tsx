import React from 'react'
import styled from 'styled-components'

interface ITopMarginProps {
  height?: string
}

export const TopMargin = (props: { height?: string }) => {
  return <S.Margin height={props.height} />
}

const S = {
  Margin: styled.div<ITopMarginProps>`
    margin-top: ${(props) => props.height ?? '20px'};
  `,
}
