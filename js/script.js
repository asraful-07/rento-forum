// const loadAllPost = async(category) => {
    // const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ''}`);
//     const data = await res.json();
//     displayAlPost(data.posts);
// }

// const displayAlPost = (posts) => {
//     const postContainer = document.getElementById('post-container')
//     posts.forEach(post => {
//         console.log(post)
//     const div = document.createElement('div')
//     div.innerHTML = ``;    
//     })
// }



// const handleSearchByCategory = () => {
//     const searchText = document.getElementById('searchPostsInput').value; // assuming you have an input with id 'searchPostsInput'
//     loadAllPost(searchText);
// }

// video.others.posted_date?.length == 0 ? " " : ` <span class="absolute right-2 bottom-2 bg-black text-white rounded p-2">${video.others.posted_date}</span>`
// 
// loadAllPost();


const loadPost = async() => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
        const data = await res.json();
        displayShow(data);
    } catch (error) {
        console.error('Error data:',error);
    }
}

const displayShow = (posts) => {
    const latestPostContainer = document.getElementById('latest-post-container')
    posts.forEach(post => {
        console.log(post);
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card lg:w-96 pb-5 bg-base-100 shadow-2xl">
          <figure class="lg:px-6 px-4 pt-4 lg:pt-8">
              <img
                  src=${post.cover_image}
                  alt="Shoes"
                  class="rounded-xl"
              />
          </figure>
          <div class="p-5 lg:p-10 space-y-4 lg:space-y-5">
              <p class="opacity-50 text-start">
            <i class="fa-solid fa-calendar-days me-2">${post.posted_date?.length == 0 ? " " : post.posted_date}</i> 
              </p>
              <h2 class="card-title text-start">title</h2>
              <p class="text-start">
                  description
              </p>
              <div class="card-actions flex gap-5 items-center">
                  <div class="avatar">
                      <div
                          class="lg:w-12 w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      >
                          <img
                          src=${post.profile_image}
                          />
                      </div>
                  </div>
              <div>
              <h3 class="text-start font-extrabold">author.name</h3>
              <p class="text-start opacity-60">author?.designation || "Unknown"</p>
          </div>
      </div>
          <span
            id="latestPostLoader"
            class="loading loading-infinity loading-lg lg:mt-24 text-primary hidden"
          >
        </span>
          <!-- dynamic content -->
        </div>
        </div>
    `;    
    latestPostContainer.appendChild(div);
    })
}

loadPost();
