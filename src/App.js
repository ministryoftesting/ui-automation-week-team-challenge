import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Node from './Node';

import useInterval from './useInterval';
import { useEffect, useState } from 'react';

function App() {

  const [monitorData, setMonitorData] = useState({ nodes : [] });

  const pollForData = async () => {
    fetch('http://localhost:8080/monitor/', {
      mode: 'cors',
      method: 'GET',
      headers: {
          'Accept': 'application/json'
      }      
    })
    .then(res => res.json())
    .then(res => {
      setMonitorData(res);
    });

  }

  useEffect(() => {
    pollForData();
  })

  useInterval(async () => {
    await pollForData();
  }, 2000);

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
          {monitorData.nodes.map((item, i) => {
            return <Node nodeDetails={item} key={i} />
          })}
        </Row>
        <Row className='h-100'>
          <Col className='border'>
            <p><strong>Transactions:</strong> <span className='float-right'>{monitorData.transactions}</span></p>
          </Col>
          <Col className='border'>
            <p><strong>Timestamp:</strong> <span className='float-right'>{monitorData.timestamp}</span></p>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;
