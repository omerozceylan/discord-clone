import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const objs = [
    {name:'google',
     img:'../src/imgs/google.jpg'
    },
    {name:'rockstar',
     img:'../src/imgs/rockstar.jpg'
    },
    {name:'midjourney',
     img:'../src/imgs/mid.png'
    }
  ]


  return (
    <>
    <div className="discord">
      <div className='groups'>
      <i class="fa-solid fa-truck-front fa-spin-pulse"></i>
        <GroupSymbol imgName='rockstar' obj={objs}></GroupSymbol>
        <GroupSymbol imgName='google' obj={objs}></GroupSymbol>
        <GroupSymbol imgName='midjourney' obj={objs}></GroupSymbol>
        <GroupSymbol imgName='rockstar' obj={objs}></GroupSymbol>
      </div>
      <div className="group">
        <div className="group-header">

        </div>
        <div className="group-chats-section">
        
          <div className="group-chats-section__chats">

          </div>
          <div className="group-chats-section__user-section">

          </div>
        </div>
        <div className="chat-section">
        
          <div className="chat-section__messages">

          </div>
          <div className="chat-section__input">

          </div>
        </div>
        <div className="users-section">

        </div>
      </div>
    </div>
    </>
  )
}

function GroupSymbol({imgName, obj}) {
  let imgSource = null
  obj.map((value)=> {
      if(value.name == imgName) {
        imgSource = value.img
      }
  })
  return(
    <img className='groups__group-logo' src={imgSource} alt="" />
  )
}


export default App
