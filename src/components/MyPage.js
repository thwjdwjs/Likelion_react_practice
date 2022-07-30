import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyPageContext from '../components/MyPageContext';
import usePagination from './usePagination';

const MyPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const MyPageItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

const MyPageCheckbox = styled.input.attrs({ type: "checkbox" })`
  background-color: red;
  width: 30px;
  height: 30px;
`

const MyPageItemText = styled.span`
  color: #495057;
  margin-left: 10px;
  font-size: 21px;;
`

const MyPageRemoveButton = styled.button`
  width: 50px;
  font-size: 25px;
  background-color: transparent;
  border-color: #8f8f8f;
  color: white;
  right: 40px;
  position: absolute;
`

const MyPagePagination = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  margin-top: 550px;
`

const MyPagePaginationNumber = styled.span`
  font-size: 15px;
  color: black;
  
  cursor: pointer;
  &:first-of-type {
    margin-left: 230px;
  }
  
`

function MyPage() {
  const navigate = useNavigate() 
  const MyPageContextValue = useContext(MyPageContext) 
  const [items, setItems] = useState([]) 
  const { pageItems, numberOfPagesArr } = usePagination(items)

  useEffect(() => {
    const items = MyPageContextValue.getItemsArr() 
    setItems(items)
  }, [])

  function removeItemFromMyPage(item) { 
    alert("삭제되었습니다.")
    const newItems = MyPageContextValue.removeItem(item) 
    setItems(newItems) 
  }

  return (
    <MyPageBlock>
      {pageItems.map((item) => { 
        return (
          <MyPageItem key={item.id}> 
            <MyPageCheckbox />
            <MyPageItemText>{item.name}</MyPageItemText>
            <MyPageRemoveButton onClick={() => removeItemFromMyPage(item)}>
            🗑️
            </MyPageRemoveButton>
          </MyPageItem>
        )
      })}
      <MyPagePagination>
        {numberOfPagesArr.map((_, idx) => {
          return <MyPagePaginationNumber onClick={() => navigate(`/mypage?page=${idx}`)} key={idx}>{idx + 1}</MyPagePaginationNumber>
        })}
      </MyPagePagination>
    </MyPageBlock>
  )
}

export default MyPage;