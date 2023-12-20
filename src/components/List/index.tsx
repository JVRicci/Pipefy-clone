import {MdAdd} from 'react-icons/md'
import { Container } from './styles'
import Card from '../Card'

export default function index(props: dataTask) {
  return (
    <Container>

        <header>
          <h2>{props.title}</h2>

          {
            props.creatable && 
            <button> <MdAdd size={24} color="#FFF"/></button>
          }
        </header>

        <ul>

          {
            props.cards?.map(
              card => <Card key={card.id} {...card} />
            )
          }
          
        </ul>

    </Container>
  )
}
