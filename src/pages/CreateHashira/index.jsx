import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";

import { Container, Form, Scrollbar } from "./styles";
import { Button } from "../../components/Button";

export function CreateHashira() {
  return (
    <Container>
      <Header />

      <Scrollbar>
        <main>
          <Form>
            <header>
              <h1>New Hashira</h1>
            </header>

            <div className="infos">
              <Input placeholder="Name" />
              <Input placeholder="Age" />
              <Input placeholder="Gender" />
            </div>

            <div className="infos">
              <Input placeholder="Form" />
              <Input placeholder="Height" />
              <Input placeholder="Weight" />
            </div>

            <Textarea placeholder="About" />

            <div>
              <h2>Skills</h2>
              <div className="tags">
                <NoteItem value="Flame Breathing" />
                <NoteItem isNew placeholder="Example: Flame Breathing" />
              </div>
            </div>

            <Input
              placeholder="Power Level (0 at 5)"
              type="number"
              min="0"
              max="5"
            />

            <Textarea placeholder="Goals" clasName="goals" />

            <div className="buttons">
              <Button title="Create" />
              <Button title="Delete" />
            </div>
          </Form>
        </main>
      </Scrollbar>
    </Container>
  );
}
