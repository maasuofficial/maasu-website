import React, { FC, ComponentClass } from 'react'
import 'css/styles.scss'

const App: FC<{
  Component: ComponentClass
  pageProps: object
}> = ({ Component, pageProps }) => <Component {...pageProps} />

export default App
