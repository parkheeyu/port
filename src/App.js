import './App.css';
import RouterPage from './components/RouterPage';
import any from './images/any.png'
import {Container} from 'react-bootstrap'

function App() {
    return (
        <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
        <Container className="App">
            <img src={any} width="100%"/>
            <RouterPage/>
        </Container>
        </div>
    );
}

export default App;