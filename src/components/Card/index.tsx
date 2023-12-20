import { Container, Label} from './styles'

export default function index(props: dataCards) {
  return (
    <Container>
      <header>
        
        <Label color="#7159c1"/>
      </header>
      <p>
        {props.content}
      </p>
      <img src="https://avatars.githubusercontent.com/u/54457696?s=48&v=4" alt="" />
    </Container>
  )
}
