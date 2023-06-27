import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiChevronDown, FiX, FiMenu } from "react-icons/fi";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { ButtonText } from "../../components/ButtonText";
import { Dropdown } from "../../components/Menu/Dropdown";

import {
  Navbar,
  Container,
  List,
  Wrapper,
  Content,
  NewChar,
  Scrollbar,
} from "./styles";

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    if (tagName === "all") {
      return setTagsSelected([]);
    }

    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/titles");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?name=${search}&titles=${tagsSelected}`
      );
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <Container>
      <Navbar>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FiX /> : <FiMenu />}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <h3 className="nav-links" onClick={closeMobileMenu}>
              Rankings
              <FiChevronDown />
            </h3>

            {dropdown && <Dropdown />}
          </li>
        </ul>
      </Navbar>

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

        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.title}
                onClick={() => handleTagSelected(tag.title)}
                isActive={tagsSelected.includes(tag.title)}
              />
            </li>
          ))}
      </List>

      <Scrollbar>
        <Content>
          <Wrapper>
            <h1>Characters</h1>
          </Wrapper>

          {notes.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Content>
      </Scrollbar>

      <NewChar to="/create">New character</NewChar>
    </Container>
  );
}
