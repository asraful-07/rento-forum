// const loadPost = async (category) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/retro-forum/posts${
//       category ? `?category=${category}` : ""
//     }`
//   );
//   const data = await res.json(res);
//   loadAllPosts(data.posts);
// };

// const loadAllPosts = async (posts) => {
//   const postsContainer = document.getElementById("postsContainer");
//   postsContainer.innerHTML = "";
//   posts.forEach((post) => {
//     console.log(post);
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <div class="card card-side bg-base-100 mt-4 shadow-xl">
//   <figure>
//     <img class="w-40"
//       src="${post.image}"
//       alt="Movie" />
//   </figure>
//   <span class="indicator-item badge ${post.isActive ? "bg-green-600" : "bg-red-600"}"></span>
//   <div class="card-body">
//     <h2 class="card-title">${post.category}</h2>
//     <p>${post.title}</p>
//     <h2>${post.author.name}</h2>
//   </div>
// </div>
//     `;
//     postsContainer.appendChild(div);
//   });
// };

// loadPost();

// const fetchPosts = () => {
//   document.getElementById("categoryInput").value = "";
//   loadPost(categoryInput);
//   const categoryInput = document.getElementById("categoryInput").value;

// };

// 8***************************************************************************8

const loadPost = async (category) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts${
      category ? `?category=${category}` : ""
    }`
  );
  const data = await res.json();
  loadAllPosts(data.posts);
};

const loadAllPosts = async (posts) => {
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.innerHTML = ""; 
  posts.forEach((post) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card card-side bg-base-100 mt-4 shadow-xl">
        <figure>
          <img class="w-40" src="${post.image}" alt="Post Image" />
        </figure>
        <span class="indicator-item badge ${post.isActive ? "bg-green-600" : "bg-red-600"}"></span>
        <div class="card-body">
          <h2 class="card-title">${post.category}</h2>
          <p>${post.title}</p>
          <h2>${post.author.name}</h2>
        </div>
      </div>
    `;
    postsContainer.appendChild(div);
  });
};

loadPost();

const fetchPosts = () => {
  const categoryInput = document.getElementById("categoryInput").value;
  loadPost(categoryInput);
  document.getElementById("categoryInput").value = ""; 
};
