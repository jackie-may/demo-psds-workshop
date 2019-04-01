import { AsideLayout } from '@pluralsight/ps-design-system-layout/react'
import React from 'react'
import styleable from 'react-styleable'

import css from './app.module.css'

export default styleable(css)(function App() {
  return (
    <div className="app">
      <AsideLayout
        aside={<AsideLayout.Aside>asdf</AsideLayout.Aside>}
        main={<AsideLayout.Main>qwer</AsideLayout.Main>}
      />
    </div>
  )
})
