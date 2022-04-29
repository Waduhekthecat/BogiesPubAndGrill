import styledCom from 'styled-components';
import Grid from '@mui/material/Grid';
    import drafts from '../imgs/DraftTaps.jpg';
    import fries from '../imgs/Loadedfries.jpg';
    import steak from '../imgs/Steak.jpg';
    import pulledpork from '../imgs/Pulledpork.jpg';
    import Footer from './Footer.js';

const Drinks = () => {
    return(<>
        <Backdrop/>
        {/* <Container> */}
            {/* <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}></Grid></Grid>
        </Container></> */}
        </>
    )
};

export default Drinks;

const Container = styledCom.div`
top: 100px;
width: 100vw;
min-height: 90vh;
position: absolute;
display:flex;
justify-content: center;
align-items: center;
background: black;
padding-top:5%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index:-10;
`;

const Drafts = styledCom.img.attrs({
src: drafts, alt: 'drafts'
})`
width:80%;
height:80%;
justify-content: center;
align-items: center;
display: block;
margin-left: auto;
margin-right: auto;
`;

const Backdrop = styledCom.div`
background: url(${drafts}) no-repeat center fixed;
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