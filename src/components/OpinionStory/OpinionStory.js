import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <Content>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </Content>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "content avatar";

  @media ${QUERIES.tabletOnly} {
    display: revert;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  grid-area: avatar;
  align-self: start;
  margin-left: 16px;
`;

const Content = styled.div`
  grid-area: content;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
