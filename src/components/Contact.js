import styledCom from 'styled-components';
import customers from '../imgs/Customers.jpg';

const Contact = () => {
    return(
        <Container>
             <h1 style={{textAlign:'center', color:'white'}}>
                 <br/>
                 Bogie's Pub & Grill
                <br/></h1><h2 style={{textAlign:'center', color:'white'}}>
                2803 Dulles Ave<br/>
                Missouri City, TX 77459<br/>
                (281)-499-9898<br/>
                </h2>
                <br/>
                <h1 style={{textAlign:'center', color:'white'}}>
                Bogies Pearland<br/></h1>
                <h2 style={{textAlign:'center', color:'white'}}>
                9330 Broadway St <br/>
                Pearland, TX 77584<br/>
                (281) 412-5299</h2> 
            <Customers/>
        </Container>

    )
};

export default Contact;

const Container = styledCom.div`
top: 100px;
width: 100vw;
min-height: 100vh;
position: absolute;
  background: black;
z-index:-5;
  `;

  const Customers = styledCom.img.attrs({
    src:customers, alt:"customers"
  })`
  width: 100vw;
  height:100%;
  display:block;
  marginLeft:auto;
  marginRight:auto;
  justifyContent:center;
  top: 25%;
  @media(max-width: 860px) {
    width:98vw;
    }
  `;

  