import { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

import {
  Container,
  Wrapper,
  Content,
  Infos,
  Delete,
  Scrollbar,
} from "./styles";

import { Header } from "../../components/Header";
import { TagTitle } from "../../components/TagTitle";

export function Details() {
  const [data, setData] = useState(null);

  const [avatar, setAvatar] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    try {
      const confirm = window.confirm(
        "Are you sure you want to remove this character?"
      );

      if (confirm) {
        await api.delete(`/notes/${params.id}`);
        navigate(-1);
      }
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert("Could not do that.");
      }
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      const charImage = `${api.defaults.baseURL}/files/${response.data.avatar}`;

      setAvatar(charImage);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <Scrollbar>
          <Content>
            <Wrapper>
              <h1>{data.name}</h1>
              <button type="button" onClick={handleBack}>
                <FiArrowLeft />
                Voltar
              </button>
            </Wrapper>

            <img src={avatar} alt="Character image" />

            <Infos>
              <span>Age: {data.age}</span>
              <span>Gender: {data.gender}</span>
              <span>Form: {data.form}</span>
              <span>Height: {data.height} cm</span>
              <span>Weight: {data.weight} kg</span>
              <span>Style: {data.style}</span>
              {data.skills && (
                <div>
                  <span>
                    Skills: {data.skills.map((item) => item.name).join(", ")}
                  </span>
                </div>
              )}

              <h2>About</h2>
              <p>{data.description}</p>

              <h2>Goals</h2>
              <p>{data.goals}</p>

              <h2>Title's</h2>
              {data.titles && (
                <div>
                  {data.titles.map((tag) => (
                    <TagTitle key={String(tag.id)} title={tag.title} />
                  ))}
                </div>
              )}

              <Delete>
                <button className="delete" type="button" onClick={handleRemove}>
                  Remove character
                </button>
              </Delete>
            </Infos>
          </Content>
        </Scrollbar>
      )}
    </Container>
  );
}
