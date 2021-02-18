import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Node from './Node';

function App() {
  return (
    <div className='App'>
      <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Monitor app</h1>
          </Col>
        </Row>
        <Row>
          <Node nodeDetails={{'level' : 'ok'}} />
          <Node nodeDetails={{'level' : 'warning', error : 'This is an error message'}}/>
          <Node nodeDetails={{'level' : 'error', error : 'This is an error message'}}/>
        </Row>
        <Row className='h-100'>
          <Col className='border'>
            <p><strong>Transactions:</strong> <span className='float-right'>124911</span></p>
          </Col>
          <Col className='border'>
            <p><strong>Timestamp:</strong> <span className='float-right'>2012-02-01 12:00pm</span></p>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;
