import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiArrowLeft } from "react-icons/fi";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

import { Container, Wrapper, Content, Scrollbar } from "./styles";

export function YourCreation() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const notesFiltered = notes.filter((note) => note.id >= 50);

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?name=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Search"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>
      <Scrollbar>
        <Wrapper>
          <h1>Your Character's</h1>

          <button type="button" onClick={handleBack}>
            <FiArrowLeft />
            Back
          </button>
        </Wrapper>
        <Content>
          {notesFiltered.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Content>
      </Scrollbar>
    </Container>
  );
}
