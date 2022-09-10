import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import { Player, Controls } from '@lottiefiles/react-lottie-player'


const Home: NextPage = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h3>Test</h3>
        <Player
          src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
          style={{ height: '300px', width: '300px' }}
        >
        </Player>
      </div>
    </div>
  )
}

export default Home;
