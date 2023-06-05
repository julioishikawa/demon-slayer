import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";

import { Container, Form } from "./styles";
import { Button } from "../../components/Button";

export function CreateOni() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>New Oni</h1>
          </header>

          <div className="infos">
            <Input placeholder="Name" />
            <Input placeholder="Age" />
          </div>

          <div className="infos">
            <Input placeholder="Gender" />
            <Input
              placeholder="Power Level (0 at 5)"
              type="number"
              min="0"
              max="5"
            />
          </div>

          <Textarea placeholder="About" />

          <div>
            <h2>Skills</h2>
            <div className="tags">
              <NoteItem value="Blood Demon Art" />
              <NoteItem isNew placeholder="Example: Blood Demon Art" />
            </div>
          </div>

          <Textarea placeholder="Goals" clasName="goals" />

          <div className="buttons">
            <Button title="Create" />
            <Button title="Delete" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
