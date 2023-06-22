import { Container } from './styles';

export function TagTitle({ title, ...rest }) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  );
}