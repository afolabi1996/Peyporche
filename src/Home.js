import React from 'react';
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from 'react-bootstrap'

function ContainerFluidExample() {
  return (
    <Container fluid>
      <Row>
        <Col className='Left_Intro'>
        <h1>Your Digital Dollar Wallet</h1>
        <p>
           It is a long established fact that a reader will be distracted<br></br>
           by the readable content of a page when looking at its layout.<br></br>
           The point of using Lorem Ipsum is that it has a more-or-less <br></br>
           normal distribution of letters, as opposed to using 'Content here, content here',<br></br>
        </p>

        <Button variant="success">Join</Button>{' '}
        </Col>

        <Col className='Right_Intro'>
          <img className='Img_Card' alt="Illustrator" src="images/Illustrator.png"/>
        </Col>
      </Row>

      <Row className='counter_Row'>
        <Col sm>
          <h3>+2,400,000</h3>
          <p>
            Lorem ipsum dolor sit aamrt<br></br>
             consectur adipscing elit.
          </p>
        </Col>
        <Col sm>
          <h3>45,990,877</h3>
          <p>
            Lorem ipsum dolor sit aamrt<br></br>
             consectur adipscing elit.
          </p>
        </Col>
        <Col sm>
          <h3>+350</h3>
          <p>
            Lorem ipsum dolor sit aamrt<br></br>
             consectur adipscing elit.
          </p>
        </Col>
        <Col sm>
          <h3>10mins</h3>
          <p>
            Lorem ipsum dolor sit aamrt<br></br>
             consectur adipscing elit.
          </p>
        </Col>
      </Row>

      <Row>
        <Col className='iconbar_section'>
        <img className='iconbars' alt="iconbars" src="images/iconbars.png"/>
        </Col>
      </Row>

      <Row>
        <Col className='ProtectYourMoneySection'>
         <img className='protectyourmoneyimg' alt="protectyourmoneyimg" src="images/protectyourmoney.png"/>
         <Col className='Protectyourmoneytext'>
         <h1>Protect Your Money.</h1>
         <p>
         Lorem ipsum dolor sit amet, consectetur <br></br>
         adipiscing elit. Duis id nisl libero aliquet<br></br> 
         vestibulum diam diam maecenas. Nunc id justo <br></br>
         non porta suspendisse cursus.<br></br>
         </p>
         </Col>
        </Col>
      </Row>

      <Row>
        <Col className='sendmoneygloballygroup'>
          <Col className='sendmoneygloballytext'>
            <h1>Send Money Globally.</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>
            adipiscing elit. Duis id nisl libero aliquet<br></br> 
            vestibulum diam diam maecenas. Nunc id justo <br></br>
            vestibulum diam diam maecenas. Nunc id justo <br></br>
            non porta suspendisse cursus.<br></br>
            </p>
          </Col>

          <Col className='sendgloballysection'>
            <img className='sendgloballyimg' alt="sendmoneyglobally" src="images/sendglobally.png"/>
          </Col>
        </Col>

        <Row>
          <Col className='receiveonlinepaymentsection'>
          <Col className='receiveonlinepayment'>
            <img className='receiveonlinepaymentimg' alt="receiveonlinepayment" src="images/receiveonlinepayment.png"/>
          </Col>
          <Col className='receiveonlinepaymenttext'>
            <h1>Receive Online Payment.</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>
            adipiscing elit. Duis id nisl libero aliquet<br></br> 
            vestibulum diam diam maecenas. Nunc id justo <br></br>
            vestibulum diam diam maecenas. Nunc id justo <br></br>
            non porta suspendisse cursus.<br></br>
            </p>
          </Col>
          </Col>
        </Row> 

        <Row>
          <Col className='makebillpaymentsection'>
          <Col className='makebillpayments'>
           <h1>Make Bill Payments.</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>
            adipiscing elit. Duis id nisl libero aliquet<br></br> 
            vestibulum diam diam maecenas. Nunc id justo <br></br>
            vestibulum diam diam maecenas. Nunc id justo <br></br>
            non porta suspendisse cursus.<br></br>
            </p>
          </Col>
          <Col>
            <img className='makebillpaymentimg' alt="makebillpayment" src="images/makebillpayment.png"/>
          </Col>
          </Col>
        </Row>

        <Row>
          <Col className='tradecryptocurrencysection'>
            <Col>
            <img className='tradecryptocurrency' alt="tradecryptocurrency" src="images/tradecryptocurrency.png"/>
            </Col>
            <Col className='makebillpayments'>
            <h1>Trade Cryptocurrencies.</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur <br></br>
              adipiscing elit. Duis id nisl libero aliquet<br></br> 
              vestibulum diam diam maecenas. Nunc id justo <br></br>
              vestibulum diam diam maecenas. Nunc id justo <br></br>
              non porta suspendisse cursus.<br></br>
              </p>
            </Col>
          </Col>
        </Row>

        <Row className='FSA_Section'>
          <Col className='freemarketrate_section'>
            <Col sm>
              <img className='freemarketrate' alt="freemarketrate" src="images/freemarketrateicon.png"/>
            </Col>
            <Col sm>
              <h2>Free market Rates</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur <br></br>
              adipiscing elit. Nam
              </p>
          </Col>
          </Col>

          <Col className='safeandreliable_section'>
          <Col sm>
            <img className='safeandreliable' alt="safeandreliable" src="images/safeandreliableicon.png"/>
          </Col>
          <Col>
            <h2>Safe and reliable</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur<br></br>
             adipiscing elit. Amet
            </p>
          </Col>
          </Col>
          
          <Col sm>
            <Col className='availableicon_section'>
              <Col>
              <img className='availableicon' alt="available24/7" src="images/availableicon.png"/>
              </Col>

              <Col>
              <h2>Available 24/7</h2>
               <p>
               Lorem ipsum dolor sit amet,<br></br> 
               consectetur adipiscing elit. Velit.
               </p>
              </Col>
             
            </Col>
            
            </Col>
        </Row>
        
      </Row>

      <Col className='whatourclientsay'>
      <h1>What Our Clients Say</h1>
      <p>Neque, pulvinar vestibulum non aliquam.</p>
      </Col>

      <Row>
        <Col className='testimony_section'>
          <Col>
          <img className='vector' alt="vector" src="images/vector.png" />
            <img className='starrating' alt="testimony" src="images/starrating.png"/>
            <p>“Orci vel eget in eu. Integer amet porttitor <br></br>
                hendrerit etiam arcu, aliquet duis <br></br>
                pretium consequat. Semper sed viverra enim ut nunc.”</p>
          </Col>
        </Col>
        <Col>
        </Col>
      </Row>
      
      
    </Container>

    
  );
}

export default ContainerFluidExample;