import { Container } from './styles';

export function TagSkill({ name, ...rest }) {
  return (
    <Container {...rest}>
      {name}
    </Container>
  );
}