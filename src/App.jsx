import { useState, useEffect } from 'react'
import { WrapDiv, ProgressSection, PercentageDiv } from './style/AppStyle'

const App = () => {
  const params = window.location.search.slice(1).split('&')

  const [customData, setCustomData] = useState({
    percentage: 0,
    backgroundColor: 'transparent',
    percentageColor: '#BB2649',
    fontColor: 'white',
    text: '',
    lang: 'en',
    noLang: 'false',
    langColor: 'black',
  })
  const [done, setDone] = useState(false)

  useEffect(() => {
    for (let i of params) {
      const [key, value] = i.split('=')
      if (customData.hasOwnProperty(key) && value) {
        setCustomData((prev) => ({
          ...prev,
          [key]: value,
        }))
      }
    }
    setDone((prev) => !prev)
  }, [])

  return (
    done && (
      <WrapDiv $noLang={customData.noLang} $langColor={customData.langColor}>
        {customData.noLang === 'false' ? <span>{customData.lang === 'en' ? 'task progress' : '진행률'}</span> : ''}
        <ProgressSection $backgroundColor={customData.backgroundColor}>
          <PercentageDiv
            $percentage={customData.percentage}
            $percentageColor={customData.percentageColor}
            $fontColor={customData.fontColor}
          >
            {customData.text.replaceAll(/%20/g, ' ')}
          </PercentageDiv>
        </ProgressSection>
      </WrapDiv>
    )
  )
}

export default App
