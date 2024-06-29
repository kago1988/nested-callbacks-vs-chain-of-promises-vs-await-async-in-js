function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: userId, name: "John Doe" }), 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, title: "First Post" },
          { id: 2, title: "Second Post" },
        ]),
      1000
    );
  });
}

function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, text: "Great post!" },
          { id: 2, text: "Thanks for sharing" },
        ]),
      1000
    );
  });
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
