import './App.css'
import { Card } from './components/Card'
import { Carousel } from './components/Carousel'
import { InputSearch } from './components/InputSearch'

function App() {
  return (
    <>
      <div className='App'>
        <InputSearch></InputSearch>
        <Card></Card>
        <Carousel></Carousel>
      </div>
    </>
  )
}

export default App
