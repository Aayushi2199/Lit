import React, { Component, useState } from 'react';
import md5 from 'md5';
import { useNavigate } from 'react-router-dom';
import Navigation from '../component/Navigation';
import Tabs from '../component/Tabs';


const Portfolio = () => {

  return (
    <div >
      <div className='w-full h-10  pt-10'>
<Navigation/>
<Tabs/>
      </div>
    </div>
  )
}

export default Portfolio;