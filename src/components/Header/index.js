import React, { Component }  from 'react'

import facebookImg from '../../../assets/facebook-1.png'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import './styles.css'


class Header extends Component {

  render(){
    return (
        <div id="container">
          <div id="faceImgContainer">
            <img id="facebookImg" src={facebookImg} />
          </div>
          <div id="myProfileContainer">
            <span>My profile</span>
            <AccountCircleIcon id="profileIcon" fontSize= 'large'  />
          </div>
        </div>
    )
  }

}

export default Header