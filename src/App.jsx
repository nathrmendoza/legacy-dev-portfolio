import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import ThreeDContainer from './components/ThreeDModel'

import Overview from './components/Overview'
import Background from './components/Background'
import Work from './components/Work'
import Tools from './components/Tools'
import GetInTouch from './components/GetInTouch'
import CopyrightRow from './components/Copyright'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <ThreeDContainer/>
      <Overview/>
      <Background/>
      <Work/>
      <Tools/>
      <GetInTouch/>
      <CopyrightRow/>
    </ThemeProvider>
  )
}
export default App
