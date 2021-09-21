import React from 'react'
import styled from 'styled-components'
const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh
`
const Content = styled.div`
    text-align:center;
    height:100vh;
    justify-content:center;
    align-items:center;
    display:flex;
    flex-direction:column;
    width:100%;
    position:relative;
    padding:80px 40px;
`
const Bgimage = styled.div`
    height:100%;
    background-image:url(/images/login-background.jpg);
    position:absolute;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
    top:0;
    right:0;
    left:0;
    z-index:-1;
`
const CTA = styled.div`
 max-width:650px;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
`
const CtaLogo1 = styled.img`
    max-width:650px;
    width:100%;
    margin:10px;
    display:block;
`
const CtaLogo2 = styled.img`
    max-width:650px;
    width:100%;
    margin:10px;
    display:block;
`
const LoginBtn = styled.a`
    background-color:#0063e5;
    letter-spacing:1.5px;
    display:block;
    color:#f9f9f9;
    margin:10px;
    padding:10px 20px;
    border-radius:5px;
    cursor:pointer;
    &:hover{
        background-color:#0483ee;
    }
`
const Des = styled.div`
    margin:10px;
    color:#f9f9f9;
`
const Login = () => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CtaLogo1 src="/images/cta-logo-one.svg" />
                    <LoginBtn>Login and Chill</LoginBtn>
                    <Des>Kal Se Pakka Padhna | Aaj Chill Maro | Apka Ka Dhyan Kidhar Hai | Apke Barbadi Ka Maal Idhar Hai</Des>
                    <CtaLogo2 src="/images/cta-logo-two.png" />
                </CTA>
                <Bgimage/>
            </Content>
            </Container>
    )
}
export default Login
