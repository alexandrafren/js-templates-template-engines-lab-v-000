function createPost() {
  let title = document.getElementById('postTitle').value;
  let body = document.getElementById('postBody').value;
  let author = document.getElementById('postAuthor').value;

  let pageTemplate = _.template(document.getElementById('page-template').innerHTML;);
  let pageDiv = document.getElementById('posts');
  let pageHTML = pageTemplate({title: title, author: author});
  pageDiv.innerHTML += pageHTML;

  let postTemplate = _.template(document.getElementById('post-template').innerHTML;);
  let postDiv = document.getElementById('post');
  let postHTML = postTemplate({body: body});
  postDiv.innerHTML += postHTML;

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
