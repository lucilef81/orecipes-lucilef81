import styled from 'styled-components';

const CardStyled = styled.article`
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 2rem;
  width: calc(50% - 4rem);
  overflow:hidden;

  img {
    max-width: 100%;
  }

  .content {
    padding: 1rem;

    &-title {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    &-text {
      margin-bottom: 0.5rem;
    }

    &-link {
      color: orange;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default CardStyled;
