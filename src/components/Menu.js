import styledCom from 'styled-components';
import SimpleImageSlider from "react-simple-image-slider";
import menu1 from '../imgs/Menu1.png';
import menu2 from '../imgs/Menu2.png';
import menu3 from '../imgs/Menu3.png';
import menu4 from '../imgs/Menu4.png';
import Frontdoor from '../imgs/Frontdoor.jpg';
import queso from '../imgs/Queso.jpg';
import fries from '../imgs/Loadedfries.jpg';
import steak from '../imgs/Steak.jpg';
import pulledpork from '../imgs/Pulledpork.jpg';


const Pages = [
  { url: menu1 },
  { url: menu3 },
  { url: menu4 },
  { url: menu2 },

];

const Menu = () => {
    return(
        <>
        <Container>
            <Queso/>
            <Fries/>
            <Steak/>
            <Pork/>
      <SimpleImageSlider
        width={370}
        height={500}
        images={Pages}
        showBullets={false}
        showNavs={true}
        navMargin={-10}
        navStyle={2}
        style={{cursor:'pointer', border:'red 15px ridge', zIndex:'10'}}
      />
        </Container> 
        </>
    )
};

export default Menu;

// Styled Components //


const Queso = styledCom.img.attrs({
    src:queso, alt:'queso'
})`
position:absolute;
height:300px;
width: 450px;
left:5%;
top:10%;
@media(max-width: 575px) {
  display:none;
  }
`;

const Fries = styledCom.img.attrs({
    src:fries, alt:'fries'
})`
position:absolute;
height:300px;
width: 450px;
left:5%;
bottom:15%;
@media(max-width: 575px) {
  display:none;
  }
`;

const Steak = styledCom.img.attrs({
    src:steak, alt:'steak'
})`
position:absolute;
height:300px;
width: 450px;
right:5%;
top:10%;
@media(max-width: 575px) {
  display:none;
  }
`;

const Pork = styledCom.img.attrs({
    src:pulledpork, alt:'pulledpork'
})`
position:absolute;
height:300px;
width: 450px;
right:5%;
bottom:15%;
@media(max-width: 575px) {
  display:none;
  }
`;

const Container = styledCom.div`
  top: 100px;
  width: 100vw;
  min-height: 90vh;
  position: absolute;
  display:flex;
  justify-content: center;
  align-items: center;
  background: black;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  `;