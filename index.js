// Write your code here!

function displayPosts(posts) {
  const postList = document.querySelector("#post-list");
  
  posts.forEach((post) => {
    const listItem = document.createElement("li");

    const header = document.createElement("h1");

    const paragraph = document.createElement("p");
    paragraph.textContent = `${post.body}`;

    header.textContent = `${post.title}`;

    listItem.appendChild(header);

    listItem.appendChild(paragraph);

    postList.appendChild(listItem);
  });
}

async function fetchAndDisplayPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error("error fetching data:", error);
  }
}
fetchAndDisplayPosts();
