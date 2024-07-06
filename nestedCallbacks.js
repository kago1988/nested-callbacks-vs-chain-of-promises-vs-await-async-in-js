function fetchUser(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: "John Doe" };
    callback(user);
  }, 1000);
}

function fetchPosts(userId, callback) {
  setTimeout(() => {
    const posts = [
      { id: 1, title: "First Post" },
      { id: 2, title: "Second Post" },
    ];
    callback(posts);
  }, 1000);
}

function fetchComments(postId, callback) {
  setTimeout(() => {
    const comments = [
      { id: 1, text: "Great post!" },
      { id: 2, text: "Thanks for sharing" },
    ];
    callback(comments);
  }, 1000);
}

function nestedCallbacks() {
  fetchUser(1, (user) => {
    console.log("User:", user);
    fetchPosts(user.id, (posts) => {
      console.log("Posts:", posts);
      fetchComments(posts[0].id, (comments) => {
        console.log("Comments:", comments);
      });
    });
  });
}

nestedCallbacks();
