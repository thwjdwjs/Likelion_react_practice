import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListMenubarBlock = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
  background-color: #FFC1B4;
`;

const ListLink = styled(Link)`
  padding-left: 25px;
  padding-bottom: 15px;
  font-size: 18px; ;
  color: #343a40;
`

function ListMenubar() {

  return (
    <ListMenubarBlock>
      <ListLink to={`/items/all`}>전체</ListLink> 
      <ListLink to={`/items/kr`}>한식</ListLink> 
      <ListLink to={`/items/cn`}>중식</ListLink> 
      <ListLink to={`/items/jp`}>일식</ListLink> 
      <ListLink to={`/items/west`}>양식</ListLink> 
      <ListLink to={`/items/coffee`}>카페</ListLink> 
      <ListLink to={`/MyPage`}>마이페이지</ListLink>
    </ListMenubarBlock>
  );
}

export default ListMenubar;