import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from './Container';
import UserSwitch from './UserSwitch';

// Header de navigación, agregado al BaseLayout
export default function Navigation() {
  return (
    <StyledHeader>
      <Container>
        <NavBar>
          <span>SWAPI DEMO</span>
          <Nav>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/characters">Characters</Link>
            </NavItem>
            <NavItem>
              <Link to="/planets">Planets</Link>
            </NavItem>
            <NavItem>
              <Link to="/spaceships">Spaceships</Link>
            </NavItem>
            <UserSwitch />
          </Nav>
        </NavBar>
      </Container>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  border-bottom: 1px solid #cbcbcb;
  padding: 6px 0;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NavItem = styled.li`
  display: block;
  font-size: 12px;
  list-style: none;
`;
