import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content } from "./styles";
import hashira from "../../assets/hashira.jpg";
import oni from "../../assets/oni.jpg";

export function CreateChar() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <header>
        <h1>CHOOSE YOUR WAY</h1>
 
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
          Voltar
        </button>
      </header>
        
      
      <Content>
        <div>
          <h2>GOOD</h2>
          <Link to="/createhashira">
            <img src={hashira} alt="hashira picture" />
          </Link>
        </div>

        <h2>or</h2>

        <div>
          <h2>EVIL</h2>
          <Link to="/createoni">
            <img src={oni} alt="oni picture" />
          </Link>
        </div>
      </Content>
    </Container>
  );
}
