import { loadLists } from '../../services/api'

import { Container } from './styles'

import List from '../List'

// import { uuid } from 'uuidv4'

const lists : dataTask[] = loadLists()


export default function index() {
  return (
    <Container>

        {lists.map(
          list => <List key={list.title} {...list}/>
        )}

        
        
    </Container>

  )
}
