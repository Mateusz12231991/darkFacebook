import React from 'react'

import './styles.css'

import Comment from '../Comment'

function Post({data}) {
    return (
        <div id="postContainer">
          <div id="postContent">
            <div id="userInfoPost"> 
                <img src={data.author.avatar} />
                <div id="postAuthor">
                  <span id="postUserName">{data.author.name}</span>
                  <span id="postDate">{data.date}</span>
                </div>
            </div>
            <div id="postMessage">
              <span>{data.content}</span>
            </div>
            <hr />
            {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
           </div>
         </div>
     )
}

export default Post