import React from "react";
import { Navbar, Container, Image } from "react-bootstrap";

const AboutPage = () => {
  return (
    <>
      
      <Container className="mt-4">
        <h2 className="text-center" style={{ fontWeight: 'bold', fontStyle: 'inherit' }}>ABOUT</h2>
        <Image
          src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
          roundedCircle
          style={{ width: '250px', float: 'left', marginRight: '50px', marginLeft: '50px', marginTop: '100px' }} // Adjust width and add margin for spacing
        />
        <p>
          Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now., The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.
        </p>
      </Container>
      <Navbar bg="info" expand="lg" variant="dark" className="p-3 mt-1">
        <Container >
          <Navbar.Brand style={{ fontSize: 50, fontWeight: 'bolder', fontFamily: 'Times New Roman' }}>The Generics</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default AboutPage;