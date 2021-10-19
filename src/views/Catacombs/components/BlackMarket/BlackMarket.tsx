import { useTranslation } from 'contexts/Localization'
import React from 'react'
import Menu from '../../../../components/Catacombs/Menu'
import Page from '../../../../components/layout/Page'


const BlackMarket: React.FC = () => {
  const { t } = useTranslation()
  return (
      <Menu>
        <Page>
          <div className='parent-div'>
            Black Market is coming soon!
          </div>
        </Page>
      </Menu>
  )
}

export default BlackMarket
