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

              <Chat title={' i-did-it'}></Chat>
              <Chat title={' general'}></Chat>
              <Chat title={' setups'}></Chat>
              <Chat title={' '}></Chat>
              <Chat title={' i-did-it'}></Chat>

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

function Chat({title}){
  return(
    <div className='group-chats-section__chats__chat '>
      <i className="fa-solid fa-hashtag"></i> &nbsp;{title}
    </div>
    
  )


}

export default App
