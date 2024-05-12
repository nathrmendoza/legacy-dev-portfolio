import styled, { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      Hello World
    </ThemeProvider>
  )
}
export default App
