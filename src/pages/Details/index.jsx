import { useState, useEffect } from "react"; 
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Wrapper, Content, Infos, Scrollbar } from "./styles";

import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      { data &&
      <Scrollbar>
        <Content>
          <Wrapper>
            <h1>{data.name}</h1>
            <button type="button" onClick={handleBack}>
              <FiArrowLeft />
              Voltar
            </button>
          </Wrapper>

         

          <Infos>
            <span>Age: {data.age}</span>
            <span>Gender: {data.gender}</span>
            <span>Form: {data.form}</span>
            <span>Height: {data.height} cm</span>
            <span>Weight: {data.weight} kg</span>
            <span>Style: {data.style}</span>
            
            <h2>About</h2>
            <p>
              {data.description}
            </p>

            <h2>Goals</h2>
            <p>
              {data.goals}
            </p>

            <h2>Skills</h2>
            {
              data.tags &&
              <div>
              {
                data.tags.map(tag => (
                <Tag 
                  key={String(tag.id)}
                  title={tag.title} />
                ))
              }
              </div>
            }
          </Infos>
        </Content>
      </Scrollbar>
      }
    </Container>
  );
}
