import { styled, keyframes, css } from 'styled-components'

export const WrapDiv = styled.div`
  width: ${({ $noLang }) => ($noLang === 'false' ? '500px' : '305px')};
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-size: 24px;
    ${({ $langColor }) => `color: ${$langColor};`}
  }
`

export const ProgressSection = styled.section`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  ${({ $backgroundColor }) => `background-color: ${$backgroundColor}; border: 1px solid lightgray`}
`

export const PercentageDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0px 0px 10px;
  border-radius: ${({ $percentage }) => ($percentage >= 97 ? '10px' : '10px 0px 0px 10px')};
  ${({ $percentageColor }) => `background-color: ${$percentageColor};`}
  ${({ $fontColor }) => `color: ${$fontColor};`}
  ${({ $percentage }) =>
    0 < $percentage &&
    100 >= $percentage &&
    css`
      width: ${$percentage}%;
      animation: ${fillAnimation($percentage)} 3s ease-out;
    `}
`

const fillAnimation = (percentage) => keyframes`
  0% {
    width: 10%;
  }
  100% {
    width: ${percentage}%;
  }
`
