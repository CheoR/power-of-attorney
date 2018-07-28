import React from 'react'
import {NavLink} from 'react-router-dom'
import i18n from 'i18next'
import {Box, Button, Header, Menu} from 'grommet'
import GrommetClassnames from 'grommet/utils/CSSClassnames.js'
import {translate} from 'react-i18next'
import {FAQ_PATH, HOME_PATH} from '../../paths'

import './style.css'

// Class added to Grommet anchor when `disabled=True`
// Below we use NavLink instead of <Anchor tag={NavLink}...> to work around
// a runtime error, "TypeError: location is undefined" I received when trying
const ANCHOR_DISABLED = `${GrommetClassnames.ANCHOR}--disabled`

const POAHeader = props => {
  const {t} = props

  const nextLanguage = i18n.language === 'en' ? 'es' : 'en'
  const label = i18n.language === 'en' ? 'Español' : 'English'
  const onClick = () => i18n.changeLanguage(nextLanguage)

  return (
    <Header>
      <Box flex={true} justify="between" direction="row" responsive={false}>
        <Menu direction="row">
          <NavLink
            activeClassName={ANCHOR_DISABLED}
            className={GrommetClassnames.ANCHOR}
            exact
            to={HOME_PATH}
          >
            {t('Home')}
          </NavLink>
          <NavLink
            activeClassName={ANCHOR_DISABLED}
            className={GrommetClassnames.ANCHOR}
            exact
            to={FAQ_PATH}
          >
            {t('FAQ')}
          </NavLink>
        </Menu>
        <Button
          className={'language-button'}
          label={label}
          onClick={onClick}
          secondary
          hoverIndicator={{background: 'neutral-2'}}
        />
      </Box>
    </Header>
  )
}

export default translate()(POAHeader)
