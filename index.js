function createPost() {
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  
  let title = document.getElementById("postTitle").value;
  let body = document.getElementById("postBody").value;
  let author = document.getElementById("postAuthor").value;
  
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
  
  let blogSection =  postTemplate({'title': title, 'body': body, 'author': author});
  let commentsSection = commentsTemplate();
  let postElement = document.getElementById("post");
  
  postElement.innerHTML = blogSection
  postElement.getElementsByTagName("footer")[0].innerHTML += commentsSection;

}


function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;

  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');

  let templateHTML = templateFn({'comment': comment, 'commenter': commenter});

  commentsDiv.innerHTML += templateHTML;
}
