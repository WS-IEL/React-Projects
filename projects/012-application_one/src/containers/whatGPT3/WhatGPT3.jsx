import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt perferendis debitis non id.' />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsam eum quaerat maiores unde! Est dicta sapiente distinctio fugit exercitationem.' />
        <Feature title='Knowledgebase' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea consectetur inventore quidem illo culpa!' />
        <Feature title='Education' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, accusamus.' />
      </div>
    </div>
  )
}

export default WhatGPT3