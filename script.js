function createPost() {
  const postInput = document.querySelector('.post-input');
  const feed = document.getElementById('feed');

  if (postInput.value.trim() !== '') {
    const post = document.createElement('div');
    post.className = 'post';
    post.textContent = postInput.value;

    // Add the post to the feed
    feed.prepend(post);

    // Clear the input
    postInput.value = '';
  } else {
    alert('Please write something before posting!');
  }
}
