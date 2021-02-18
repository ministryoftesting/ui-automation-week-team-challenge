import Col from 'react-bootstrap/Col';

function Node({nodeDetails}){
    
    let nodeClassLevel = 'node ';
    let nodeErrorMessage;

    switch(nodeDetails.level){
        case 'error':
            nodeClassLevel += 'border-danger bg-danger text-white';
            break;
        case 'warning':
            nodeClassLevel += 'border-warning bg-warning';
            break;
        case 'ok':
            nodeClassLevel += 'border-success bg-success';
            break;
        default:
            nodeClassLevel += 'border-primary bg-primary';
            break;
    }

    if(nodeDetails.error){
        nodeErrorMessage = <p className='mt-5 node-error'>
                                <samp>
                                    {nodeDetails.error};
                                </samp>
                            </p>
    }

    return(
        <Col className={nodeClassLevel}>
            <p className='text-center mt-5'>Node 3 - {nodeDetails.level}</p>
            {nodeErrorMessage}
          </Col>
    )

}

export default Node;