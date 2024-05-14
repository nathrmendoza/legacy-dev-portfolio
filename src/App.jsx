import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import ThreeDContainer from './components/ThreeDModel'

import Overview from './components/Overview'
import Background from './components/Background'
import Work from './components/Work'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <ThreeDContainer/>
      <Overview/>
      <Background/>
      <Work/>
    </ThemeProvider>
  )
}
export default App
