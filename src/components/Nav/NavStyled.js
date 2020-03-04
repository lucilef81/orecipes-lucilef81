import styled from 'styled-components';

const NavStyled = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 250px;
  padding: 1rem;
  background-color: #eee;
  border-right: 3px solid #ccc;

  a {
    display: block;
    padding: .5rem;

    &:hover {
      color: orange;
    }
  }
`;

export default NavStyled;
