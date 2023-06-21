import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import { api } from "../../services/api";

import { Menu, Container, List, Wrapper, Content, NewChar, Scrollbar } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    if(tagName === "all") {
      return setTagsSelected([]);
    }

    const alreadySelected = tagsSelected.includes(tagName);
    
    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?name=${search}&tags=${tagsSelected}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <Container>
      <Menu>
        <h1>MENU</h1>
      </Menu>

      <Header>
        <Input 
          placeholder="Search" 
          icon={FiSearch} 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </Header>
     
      <List>
        <li>
          <ButtonText 
            title="All" 
            onClick={() => handleTagSelected("all")} 
            isActive={tagsSelected.length === 0} 
          />
        </li>

        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText 
                title={tag.title} 
                onClick={() => handleTagSelected(tag.title)}
                isActive={tagsSelected.includes(tag.title)}
              />
            </li>
          ))
        }
      </List>

      <Scrollbar>
        <Content>
          <Wrapper>
            <h1>Characters</h1>
          </Wrapper>

          {
            notes.map(note => (
              <Note 
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Content>
      </Scrollbar>
      
      <NewChar to="/create">
        New character
      </NewChar>
    </Container>
  );
}
