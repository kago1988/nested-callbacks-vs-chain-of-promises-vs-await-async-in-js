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

function chainOfPromises() {
  fetchUser(1)
    .then((user) => {
      console.log("User:", user);
      return fetchPosts(user.id);
    })
    .then((posts) => {
      console.log("Posts:", posts);
      return fetchComments(posts[0].id);
    })
    .then((comments) => {
      console.log("Comments:", comments);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

chainOfPromises();
