import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import MyPage from './components/MyPage';
import ListHeader from './components/ListHeader';
import ListMenubar from './components/ListMenubar';
import AllItems from './components/AllItems';
import CategoriedItems from './components/CategoryItems';

const AppBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const AppList = styled.div`
  width: 512px;
  height: 768px;
  position: relative; 
  background: #FFF2F2;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto; 
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`

const ListBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px
`;

function App() { 
  return (
    <AppBody>
      <AppList> 
        <ListHeader />
        <ListMenubar /> 
        <ListBody> 
          <Routes>
            <Route path={`/MyPage`} element={<MyPage />} /> 
            <Route path={`/items/all`} element={<AllItems />} /> 
            <Route path={`/items/:category`} element={<CategoriedItems />} />
          </Routes>
        </ListBody>
      </AppList>
    </AppBody >
  );
}

export default App;

