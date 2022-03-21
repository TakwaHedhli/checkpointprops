
import './App.css';
import Profil from './profil/Profil';
import image from './images/profil.jpg';

function App() {
  let handleClick = () =>{
    alert ('alert')
  }
  return (
    <div>
      <h1 style={{textAlign:"center"}}> Votre profil</h1>
      <Profil FullName="Hedhli_Takwa"  bio="Etudiante"  profession="Développer" handleClick={handleClick}>
        <img src={image}/>
      </Profil>
    </div>
  );
}

export default App;
