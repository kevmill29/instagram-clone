import { posts } from './data.js'


// Incrementing and Decrementing Like Count

document.addEventListener('click', function(e){
    if(e.target.dataset.heart){
       handleLikeClick(e.target.dataset.heart) 
       
    }
})


function handleLikeClick(postId){ 
  
    const targetPostObj = posts.filter(function(post){
        return post.username === postId
    })[0]
    
    if (targetPostObj.isLiked ){
        targetPostObj.likes--
       
        
    } else{
        targetPostObj.likes++
        
    }
    targetPostObj.isLiked = !targetPostObj.isLiked
    
    render()
   
}

// Feed Rendering Posts
function getHtmlFeed(){ 
 let igPosts = ``

    posts.forEach(function(post){
       
    //    Swaps Images After isLiked is True
       function imgSwap(){
           if (post.isLiked){
               return "fa-solid fa-heart"
           } else {
               return "fa-regular fa-heart"
           }
       }

    
        
       igPosts += `
<section>
  <div class="post-div">
    <div class="user-loc">
      <img class="avatar" src="${post.avatar}"/>
        <p class="user-info">
          <span><strong>${post.name}</strong></span><br>
          <span>${post.location}</span>
        </p>
    </div>
    <div "img-container">  
      <img 
      class="post-img"  
      src="${post.post}"
    </div>
    <div class="button-sect">
    
      <i
      class="${imgSwap(post)}"
      alt="like this post" 
      data-heart=${post.username}
      id="likeBtn"
      ></i>
      <img 
      src="images/icon-comment.png" 
      alt="comment on this post" 
      class="icon"
      
      />
      <img src="images/icon-dm.png" 
      alt="share this post" 
      class="icon"/>
    </div>
    <div class="post-btm">
      <p -likes" data-heart="${post.username}"><strong>${post.likes} likes</strong><p><br>
      <p><strong>${post.username}</strong> ${post.comment}<p>
  </div>
</section>`
    })
 return igPosts
}   

function render(){
 document.getElementById("posts").innerHTML = getHtmlFeed()
 } 
render()



   