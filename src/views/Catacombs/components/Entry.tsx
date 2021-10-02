import { useTranslation } from 'contexts/Localization'
import React from 'react'
import Typewriter from 'typewriter-effect'
import { Heading, Text } from '@catacombs-libs/uikit'
import styled from 'styled-components'
import Page from '../../../components/layout/Page'
import CatacombsEntryBackgroundSVG from '../../../images/Catacombs_Entry_650_x_650_px.svg'

const StyledText = styled(Text)`
  font-size: 35px;
  color: white;
  @media (max-width: 479px) {
    font-size: 20px;
  }
`

const Entry = () => {
  const { t } = useTranslation()
  const Input = () => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        console.log('do validate')
      }
    }
    // eslint-disable-next-line jsx-a11y/no-autofocus
    return <input type="password" className="password-input" onKeyDown={handleKeyDown} maxLength={8} autoFocus/>
  }
  return (
    <>
      <Page>
        <div className='parent-div'>
          <img src={CatacombsEntryBackgroundSVG} alt='catacombs-rug-zombie' className="backgroundImageStyle" />
          <div className='main-text'>
            <Typewriter options={{ cursor: '' }}
                        onInit={(typewriter) => {
                          typewriter
                            .pauseFor(150)
                            .changeDelay(50)
                            .typeString(
                              '<p class="text-size">You found the black market.' +
                              '<br><br>Clever humans have been hiding in the catacombs for years.' +
                              '<br><br>Enter at your own risk.</p>',
                            )
                            .start()
                        }}
            />
          </div>
          <div className='enter-password'>
            <StyledText>
              {t('Enter Password : ')}
            </StyledText>
          </div>
          <div className='password'>
            <Input />
          </div>
        </div>
      </Page>
    </>
  )
}

export default Entry
