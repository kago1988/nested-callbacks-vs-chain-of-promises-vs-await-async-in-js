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

async function asyncAwaitFunction() {
  try {
    const user = await fetchUser(1);
    console.log("User:", user);

    const posts = await fetchPosts(user.id);
    console.log("Posts:", posts);

    const comments = await fetchComments(posts[0].id);
    console.log("Comments:", comments);
  } catch (error) {
    console.error("Error:", error);
  }
}

asyncAwaitFunction();
