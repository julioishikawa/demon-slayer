import { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Wrapper, Content, Infos, Scrollbar } from "./styles";

import { Header } from "../../components/Header";
import { TagTitle } from "../../components/TagTitle";
import { TagSkill } from "../../components/TagSkill";

export function Details() {
  const [data, setData] = useState(null);

  const [avatar, setAvatar] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
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

              <h2>Techniques</h2>
              {data.skills && (
                <div>
                  {data.skills.map((tag) => (
                    <TagSkill key={tag.id} name={tag.name} />
                  ))}

                  <span className="skills">
                    for skills details search{" "}
                    <a href="https://google.com" target="_blank">
                      here
                    </a>
                    <br />
                  </span>
                </div>
              )}

              <h2>About</h2>
              <p>{data.description}</p>

              <h2>Title's</h2>
              {data.titles && (
                <div>
                  {data.titles.map((tag) => (
                    <TagTitle key={String(tag.id)} title={tag.title} />
                  ))}
                </div>
              )}
            </Infos>
          </Content>
        </Scrollbar>
      )}
    </Container>
  );
}
