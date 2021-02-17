import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>Monitor app</h1>
          </Col>
        </Row>
        <Row>
          <Col className="node border-success bg-success">
                <p className="text-center mt-5">Node 1 - Fine</p>
          </Col>
          <Col className="node border-warning bg-warning">
            <p className="text-center mt-5">Node 2 - Warning</p>
            <p className="mt-5" style={{fontSize : "0.5em"}}>
              <samp>
                  Exception in thread "Animation Thread" java.lang.NullPointerException
                  at sketch_apr20a.displayStar(sketch_apr20a.java:36)
                  at sketch_apr20a.draw(sketch_apr20a.java:65)
                  at processing.core.PApplet.handleDraw(Unknown Source)
                  at processing.core.PApplet.run(Unknown Source)
                  at java.lang.Thread.run(Thread.java:662)
              </samp>
            </p>
          </Col>
          <Col className="node border-danger bg-danger">
            <p className="text-center mt-5 text-white">Node 3 - Errors</p>
            <p className="mt-5 text-white" style={{fontSize : "0.5em"}}>
              <samp>
                  Exception in thread "Animation Thread" java.lang.NullPointerException
                  at sketch_apr20a.displayStar(sketch_apr20a.java:36)
                  at sketch_apr20a.draw(sketch_apr20a.java:65)
                  at processing.core.PApplet.handleDraw(Unknown Source)
                  at processing.core.PApplet.run(Unknown Source)
                  at java.lang.Thread.run(Thread.java:662)
                </samp>
            </p>
          </Col>
        </Row>
        <Row className="h-100">
          <Col className="border">
            <p><strong>Transactions:</strong> <span className="float-right">124911</span></p>
          </Col>
          <Col className="border">
            <p><strong>Timestamp:</strong> <span className="float-right">2012-02-01 12:00pm</span></p>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;
