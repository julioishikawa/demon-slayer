import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiArrowLeft } from "react-icons/fi";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

import { Container, Wrapper, Content, Scrollbar } from "./styles";

export function Hashiras() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const hashirasLeader = notes.filter((note) => note.id === 1);
  const hashirasAlive = notes.filter((note) => note.id >= 2 && note.id <= 8);
  const formerHashiras = notes.filter((note) => note.id >= 11 && note.id <= 14);
  const hashirasDead = notes.filter((note) => note.id >= 9 && note.id <= 10);

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
          <h1>Hashira's Leader</h1>

          <button type="button" onClick={handleBack}>
            <FiArrowLeft />
            Back
          </button>
        </Wrapper>

        <Content>
          {hashirasLeader.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Content>

        <Content>
          <h1>Hashira's Alive</h1>
          {hashirasAlive.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Content>

        <Content>
          <h1>Former Hashira's</h1>
          {formerHashiras.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Content>

        <Content>
          <h1>Dead Hashira's</h1>
          {hashirasDead.map((note) => (
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
