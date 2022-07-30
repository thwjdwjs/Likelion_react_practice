import React from 'react';
import styled from 'styled-components';

const ListHeaderBlock = styled.div`
  padding-top:30px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e9ecef;
  border-radius: 16px 16px 0px 0px;
  font-size: 36px;
  font-weight: 900;
  color: #454545;
  background-color: #FDE9E5;
  text-align: center;
`;

function ListHeader() {
  return (
    <ListHeaderBlock>
      ~❤️맛집 리스트❤️~
    </ListHeaderBlock>
  );
}

export default ListHeader;