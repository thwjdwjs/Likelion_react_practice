import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import MyPageContext from "../components/MyPageContext";
import styled from 'styled-components'
import usePagination from "./usePagination";

const AllItemsBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
`;

const AllItemsItem = styled.div`
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

const AllItemsPagination = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  margin-top: 550px;
`

const AllItemsPaginationNumber = styled.span`
  font-size: 15px;
  color: black;
  margin-left: 15px;
  cursor: pointer;
  &:first-of-type {
    margin-left: 170px
  }
`

function AllItems() {
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
            "https://cffb044b-c7ae-4505-a0b6-0d743cd9b0b4.mock.pstmn.io/all"
          );  
          setItems(response.data);
      } catch(e) {
        setError(e);
      }
      setLoading(false);
    };
    setItems(items)
    fetchUsers();
  },[]); 

    function onItemClick(item) { 
        alert("추가되었습니다.")
        MyPageContextValue.addItem(item) 
    }

    const changePage = (pageIdx) => navigate(`/items/all?page=${pageIdx}`) 
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    return (
        <AllItemsBlock>
            {pageItems.map((item) => { 
                return <AllItemsItem key={item.id} onClick={() => onItemClick(item)}>{item.name}</AllItemsItem>
            })}
            <AllItemsPagination>
                {numberOfPagesArr.map((_, idx) => {
                    return <AllItemsPaginationNumber onClick={() => changePage(idx)} key={idx}>{idx + 1}</AllItemsPaginationNumber> 
                })} 
            </AllItemsPagination>
        </AllItemsBlock >
    )
}

export default AllItems