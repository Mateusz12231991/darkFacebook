
import React, { Component } from 'react'

import Post from '../Post'

import './styles.css'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Jeff Bezos",
          avatar: "https://imgur.com/S8BQ4Yo.png"
        },
        date: "February 24, 2020",
        content: "I would like to publicly thank @gabrielbarth1 for the following contributions" +
                 " on this planet and also for the insights he has given about our projects.",
        comments: [
          {
            id: 1,
            author: {
              name: "Gabriel Barth",
              avatar: "https://imgur.com/bgx3LVt.jpg"
            },
            content: "You're welcome Jeff! As I told you by WhatsApp text message this is " +
                      "about my life purpose: contributing to a better world through technology."
          },
          {
            id: 2,
            author: {
              name: "Donald Trump",
              avatar: "https://imgur.com/gp4lJcn.jpg"
            },
            content: "Congratulats. Excelent job, Gabriel!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Dan Abramov",
          avatar: "https://imgur.com/zx6hqp2.png"
        },
        date: "February 24, 2020",
        content: "Hello programmers! I'm here to congratulates RocketSeat team for " +
                 "winning prize for the better intensive trainning (bootcamp) that " +
                 "uses JavaScrit. They are really bood. #rocketseat #goNextLevel",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://imgur.com/713AQB6.jpg"
            },
            content: "Thank you so much @damabramov!! See you on next ReactJS conference."
          },
          {
            id: 2,
            author: {
              name: "Rocketseat",
              avatar: "https://imgur.com/0JRnqVB.jpg"
            },
            content: "#goNextLevel !"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Juanita Pereira",
          avatar: "https://imgur.com/0dKmBTj.png"
        },
        date: "February 23, 2020",
        content: "Hello Girls!! I'm selling makups now. " +
                 "For more information visit my website: anitastore.com",
        comments: [
          {
            id: 1,
            author: {
              name: "Gabriel Barth",
              avatar: "https://imgur.com/bgx3LVt.jpg"
            },
            content: "That's great @anitapereira!!"
          },
          {
            id: 2,
            author: {
              name: "Michelle Obama",
              avatar: "https://imgur.com/PCn2lbX.jpg"
            },
            content: "I love your products. More than that, I love young people " +
                      "with entrepreneurial spirit. Congratulation @anitapereira!!"
          }
        ]
      }
    ]
  }

  render(){
    const { posts } = this.state;
    console.log(posts)
    return(
      <>
        <div className="content">
          {posts.map(post => <Post key={post.id} data={post} />)}  
        </div>      
      </>

      
    )
  }
}

export default PostList