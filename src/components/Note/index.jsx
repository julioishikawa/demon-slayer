import { Container } from './styles'
import { Tag } from '../Tag'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.name}</h1>

      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => {
            return <Tag key={tag.id} title={tag.title} />
          })}
        </footer>
      )}
    </Container>
  )
}
