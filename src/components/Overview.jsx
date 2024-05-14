import { NarrowDiv } from "../styles/ThemeContainers"
import { TypeH1, TypeText } from "../styles/Typography"

const Overview = () => {
    return (
        <NarrowDiv style={{marginBottom: '72px'}}>
          <TypeH1 style={{textAlign: 'center', marginBottom: '32px'}}>Nath Dev</TypeH1>
          <TypeText style={{textAlign: 'justify'}}>Hey there, I'm Nathaniel Mendoza, or just Nath for short, a <b>front&#8209;end developer</b> located in <b>Rolleston, New Zealand</b>. My expertise lies in crafting web applications that provide digital services, ranging in complexity. I thrive on the challenge of constructing projects from scratch and enjoy finding inventive/unique solutions to problems along the way.</TypeText>
        </NarrowDiv>
    )
}

export default Overview