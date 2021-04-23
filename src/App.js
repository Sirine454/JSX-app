
import './App.css';
import LogoS from "./LogoS.jpg"

function App() {
  return (
    <div className="App">

<div style={{ border:'solid 1px black',maxWidth:'100vw'}}/>

<h1 className='titleRed'>Bennaceur Sirine</h1>
<br/>
<div className='image'>
<img src={LogoS} alt ='myLogo' />

<br/>

<img src="/sirine.jpg" alt="myimage" />
<br/>
</div>
<video width="420" height="440" controls >
<source src="/Skills.mp4" type="video/mp4"/>
</video>

    </div>
  );
}

export default App;
