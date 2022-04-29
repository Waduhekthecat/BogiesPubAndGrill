import React from "react";
import styledCom from 'styled-components';
  
const Footer = () => {
  return (
    <Wrapper>
    <Box>
      <h1 style={{ color: "red", 
                   textAlign: "center"}}>
        Open 7 days a week: 11am-2am
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Locations</FooterLink>
            <FooterLink href="#">Bogies Pub & Grill</FooterLink>
          </Column>
          <Column>
            <Heading>Specials</Heading>
            <FooterLink href="#">Food & Drinks</FooterLink>
            <FooterLink href="#">Happy Hour</FooterLink>
            <FooterLink href="#">Weekly Events</FooterLink>
          </Column>
          <Column2>
            <Heading>Book an Event</Heading>
            <FooterLink href="#">Bogies Pub & Grill</FooterLink>
            <FooterLink href="#">Bogies Pearland</FooterLink>
          </Column2>
          <Column3>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/bogiespub2">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
          </Column3>
        </Row>
      </Container>
    </Box>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styledCom.div`
`;

export const Box = styledCom.div`
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
   
export const Container = styledCom.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    @media(max-width: 500px) {
      display:none;
      }
      @media(max-height: 700px) {
        display:none;
        }
`
   
export const Column = styledCom.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
`;

export const Column2 = styledCom.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
  @media(max-width: 860px) {
    display:none;
    }
`;

export const Column3 = styledCom.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
  @media(max-width: 640px) {
    display:none;
    }
`;
   
export const Row = styledCom.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styledCom.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: yellow;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styledCom.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
