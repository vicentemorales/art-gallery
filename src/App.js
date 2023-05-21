import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Gallery from './Gallery';
import ButtonBar from './ButtonBar';

function App() {


  let [data, setData] = useState({})
  let [artId, setArtId] = useState(465)
  
  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))

  }, [artId])

  const handleIterate = e => {
    setArtId(artId + Number(e.target.value))
  }
  

  return (
    <div className="App">
      <h1> {data.title}</h1>
      <Gallery data={data}/>
      <ButtonBar handleIterate={handleIterate}/>
    </div>
  );
}

export default App;
