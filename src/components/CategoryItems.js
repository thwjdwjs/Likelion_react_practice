import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";
import MyPageContext from "../components/MyPageContext";
import usePagination from "../components/usePagination";

const CategoriedItemsBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
`;

const CategoriedItemsItem = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  flex: 1;
  font-size: 21px;
  color: #495057;

  &:hover{
    color: #000000;
    cursor: pointer;
  }
`;

const CategoriedItemsPagination = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  margin-top: 550px;
`

const CategoriedItemsPaginationNumber = styled.span`
  font-size: 15px;
  color: black;
  margin-left: 15px;
  cursor: pointer;
  &:first-of-type {
    margin-left: 210px;
  }
`

function CategoriedItems() {
  const params = useParams() 
  const navigate = useNavigate() 
  const MyPageContextValue = useContext(MyPageContext) 
  const [items, setItems] = useState([]) 
  const { pageItems, numberOfPagesArr } = usePagination(items) 

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async()=> {
      try {
        setError(null);
        setLoading(true);
        const response = await axios.get(
          `https://cffb044b-c7ae-4505-a0b6-0d743cd9b0b4.mock.pstmn.io/${params.category}`
        );  
        setItems(response.data);
    } catch(e) {
      setError(e);
    }
    setLoading(false);
  };
  fetchUsers();
},[params]); 

  function onItemClick(item) { 
    alert("추가되었습니다.") 
    MyPageContextValue.addItem(item) 
  }

  const changePage = (pageIdx) => navigate(`/items/${params.category}?page=${pageIdx}`) 
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  return (
    <CategoriedItemsBlock>
      {pageItems.map((item) => { 
        return <CategoriedItemsItem key={item.id} onClick={() => onItemClick(item)}>{item.name}</CategoriedItemsItem>
      })}
      <CategoriedItemsPagination>
        {numberOfPagesArr.map((_, idx) => {
          return <CategoriedItemsPaginationNumber onClick={() => changePage(idx)} key={idx}>{idx + 1}</CategoriedItemsPaginationNumber> 
        })} 
      </CategoriedItemsPagination>
    </CategoriedItemsBlock >
  )
}

export default CategoriedItems