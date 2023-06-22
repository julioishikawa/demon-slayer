import { Container } from './styles'
import { TagTitle } from '../TagTitle'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.name}</h1>

      <p>{data.description}</p>

      {data.titles && (
        <footer>
          {data.titles.map((tag) => {
            return <TagTitle key={tag.id} title={tag.title} />
          })}
        </footer>
      )}
    </Container>
  )
}
