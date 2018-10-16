import React, { Component } from 'react'
import Box from './components/box'
import './css/main.scss'

class App extends React.Component {
  render () {
    return (
      <div >
        <Box
          color={'red'}
          size={'24px'}
        />
      </div>
    )
  }
}
export default App
