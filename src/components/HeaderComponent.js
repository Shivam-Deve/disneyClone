import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectUserEmail ,selectUserDp, selectUserName, setUserLoginDetails} from '../features/user/userSlice';
import { auth, provider } from '../firebase';
import { signInWithPopup} from "firebase/auth";
import { useState } from 'react'
const Nav = styled.nav`
    background-color:#090b13;
    position:fixed;
    left:0;
    right:0;
    height:50px;
    top:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0px 20px;
    z-index:2;
`
const Login = styled.a`
    border-radius:4px;
    border:2px solid #0063e5;
    padding: 6px 20px;
    z-index:1000;
    &:hover{
        background-color:#0063e5;
        cursor:pointer;
    }
`
const Logo = styled.a`
    width:50px;
    display:inline-block;
    img{
        display:block;
    }
`
const Dp = styled.img`
    height:70%;
    border-radius:50%;
    border:2px solid #292d3c;
`
const NavMenu = styled.div`
 margin-right:auto;
 margin-left:70px;
 display:flex;
 align-items:center;
 a{
     display:block;
     margin-bottom:10px;
     margin-left:50px;
     transform:scale(1);
     transition:all 0.25s cubic-bezier(0.25,0.46,0.45,0.94) 0s;
     img{
         width:20px;
         vertical-align:bottom;
     }
     span{
         margin-left:5px;
         display:inline-block;
         &:before{
             content:'';
             display:inline-block;
             position:relative;
             border-radius:0 0 3px 3px;
             left:0;
             right:0;
             bottom:-24px;
            background-color:rgb(249,249,249);
            height:3px;
            transform:scaleX(0);
            transition:all 0.25s cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            width:100%
         }
     }
     &:hover{
             span:before{
                 transform:scaleX(1);
             }
             transform:scale(1.15);
         }
 }
 @media screen and (max-width:768px){
     display:none;
 }
`
const Header = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const username= useSelector(selectUserName)
    const useremail= useSelector(selectUserEmail)
    const userdp = useSelector(selectUserDp);
    
    const handleAuth = () => {
        console.log("working")
        signInWithPopup(auth, provider).then(result => setUser(result.user)).catch(err => { console.log(err.message) })
    }
    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                dp:user.photoURL
            })
        )
    }
    return (
        <div>
            <Nav>
                <Logo>
                    <img src="/images/logo.svg" alt="Disney-logo" />
                </Logo>
                {
                    !username ?
                        (<Login onClick={handleAuth}>Login</Login>) :
                        <>
                            <NavMenu>
                                <a href="/home">
                                    <img src="/images/home-icon.svg" />
                                    <span>Home</span>
                                </a>
                                <a href="/search">
                                    <img src="/images/search-icon.svg" />
                                    <span>Search</span>
                                </a>
                                <a href="/home">
                                    <img src="/images/watchlist-icon.svg" />
                                    <span>Watch List</span>
                                </a>
                                <a href="/home">
                                    <img src="/images/original-icon.svg" />
                                    <span>Originals</span>
                                </a>
                                <a href="/home">
                                    <img src="/images/movie-icon.svg" />
                                    <span>Movies</span>
                                </a>
                                <a href="/home">
                                    <img src="/images/series-icon.svg" />
                                    <span>Series</span>
                                </a>
                            </NavMenu>
                            <Dp src={userdp} alt={username}/>
                    </>
                }
               
            </Nav>
        </div>
    )
}
export default Header;
