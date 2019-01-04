function createPost() {
  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;

  let pageTemplate = document.getElementById('page-template').innerHTML;
  let templateFn = _.template(pageTemplate);

  let postTemplate = document.getElementById('post-template').innerHTML;
  let templateFnTwo = _.template(postTemplate);

  let postDiv = document.getElementById('post');
  let postHTML = templateFnTwo({body: body});


}


function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;

  let commentTemplate = document.getElementById('comment-template').innerHTML;

  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById('comments');

  let templateHTML = templateFn({comment: comment, commenter: commenter});

  commentsDiv.innerHTML += templateHTML;
}
