import { useState } from "react";
import { Link } from "react-router-dom";

import { MenuItems } from "../MenuItem/MenuItems";
import { Container } from "./styles";

export function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Container>
      <ul
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        onClick={handleClick}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
