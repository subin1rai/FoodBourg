import React from 'react';
import Header from './components/Header.jsx';
import SideBar from './components/SideBar.jsx';
import Content from './components/Content.jsx';

function Admin() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <div className='w-full'>
        <Content />
        </div>
      </div>
    </>
  );
}

export default Admin;
