import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import ThreeDContainer from './components/ThreeDModel'
import { NarrowDiv } from './styles/ThemeContainers'
import { TypeH1, TypeH2, TypeText } from './styles/Typography'

import Overview from './components/Overview'
import Background from './components/Background'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <ThreeDContainer/>
      <Overview/>
      <Background/>
    </ThemeProvider>
  )
}
export default App
