import React, { Component }  from 'react'

import './styles.css'

function Comment({data}) {
    return (
        <div id="commentContainer">
          <div id="commentContent">
            <div id="userImg"> 
                <img src={data.author.avatar} />
            </div>
            <div id="commentMessage">
              <span id="commentUserName">{data.author.name}</span>
              <span>{data.content}</span>
            </div>
            <hr />            
           </div>
         </div>
     )
}

export default Comment