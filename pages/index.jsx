import React, { useState } from 'react'
import Card from '../Components/Card'
import Portfolio from './Portfolio'
import Topbor from '@/Components/Topbor'
import Portfolio1 from './Portfolio1'
import { ToastContainer, toast } from 'react-toastify';



export default function Home() {

  const data=[
      {title:"welcome",subtTitle:"aaaa",tags:["a","b","c",'d','e'],bgColor:'bg-red-300'},
      {title:"Favorites",subtTitle:"bbb",tags:["a","b","c"],bgColor: 'bg-red-500'},
      {title:"Foods",subtTitle:"ccc",tags:["a","b","c"], bgColor: 'bg-red-700'}
    ]

  return (

    <div>
      <div class="p-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {data.map((obj, index) => {
          return (
            <Card title={obj.title} subTitle={obj.subtTitle} bgColor={obj.bgColor} tags={obj.tags} index={index}/>
          )
        })}

        {/* <Card name="Welcome" />
        <Card name="Favorites" />
        <Card name="Foods" />
        <Card name="Habits" /> */}

      </div>
      <ToastContainer  position="top-center"/>

      <div>
        <Portfolio />
        <Topbor />
        <Portfolio1 />
      </div>

    </div>
  )
}


