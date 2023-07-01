import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiArrowLeft } from "react-icons/fi";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

import { Container, Wrapper, Content, Scrollbar } from "./styles";

export function Onis() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const demonsLeader = notes.filter((note) => note.id === 15);
  const demonsUpper = notes.filter((note) => note.id >= 16 && note.id <= 18);
  const demonsLower = notes.filter((note) => note.id >= 23 && note.id <= 29);
  const demonsDead = notes.filter((note) => note.id >= 19 && note.id <= 22);

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
          <h1>Demon's Leader</h1>

          <button type="button" onClick={handleBack}>
            <FiArrowLeft />
            Back
          </button>
        </Wrapper>

        <Content>
          {demonsLeader.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Content>

        <Content>
          <h1>Demon's Alive</h1>
          {demonsUpper.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Content>

        <Content>
          <h1>Dead Demon's</h1>
          {demonsDead.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}

          {demonsLower.map((note) => (
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
