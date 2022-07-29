import './App.css';
import Card from 'react-bootstrap/Card';
import { ProfilePhoto } from './component/Profile/ProfilePhoto';
import { FullName } from './component/Profile/FullName';
import { Adresse } from './component/Profile/Adresse';


function App() {
  return (
    <div className="App">
<Card className='card' style={{ width: '18rem', marginTop:'4rem', backgroundColor:'lightblue',borderColor:'lightblue', borderWidth:'4px', marginLeft:'2rem',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} >
      <ProfilePhoto/>
      <Card.Body>
        <Card.Title> <FullName/> </Card.Title>
        <Card.Text>
          <Adresse />
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
