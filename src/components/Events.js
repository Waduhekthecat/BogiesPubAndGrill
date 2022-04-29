import styledCom from 'styled-components';
import frontdoor from '../imgs/Frontdoor.jpg';
import steaknight from '../imgs/Steaknight.jpg'


const Events = () => {
    return(
        <Backdrop>

        </Backdrop>
    )
};

export default Events;

const Nights = styledCom.ul`
display: block;
margin-left: auto;
margin-right: auto;
color:white;
font-weight:700;
text-align:center;
`;

const SteakNight = styledCom.div`
display: block;
height: 800px;
width:100%;
margin-left: auto;
margin-right: auto;
background:black;
opacity:.4;
`;

  const Backdrop = styledCom.div`
background: url(${frontdoor}) no-repeat center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
min-height: 100vh;
min-width: 100vw;
position:absolute;
z-index:-5;
display: table;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;`;


const NavBtn = styledCom.button`
background:transparent;
color:white;
cursor: pointer;
width:70px;
height:30px;
font-size: 18px;
font-weight: 700;
border:none;
&:hover {
    transform: scale(1.3);
  }
  &:active {
    transform: scale(1.1);
  }
`;
const NavLinks = styledCom.ul`
margin-top:300px;
position:absolute;
right:20%;
opacity:1;
display:none
    @media (max-width: 1150px) {
    display:block;
    }
`;
const Link = styledCom.li`
right:10%;
margin-right:-40px;

`;