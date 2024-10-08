const loadLestPost = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    displayShow(data)
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
            <i class="fa-solid fa-calendar-days me-2">${post.author?.posted_date ? post.author.posted_date : "no date publish"}</i> 
              </p>
              <h2 class="card-title text-start">title</h2>
              <p class="text-start">
                  ${post.description}
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
              <h3 class="text-start font-extrabold">${post.author.name}</h3>
              <p class="text-start opacity-60">${post.author?.designation ? post.author.designation : "Unknown"}</p>
          </div>
      </div>
          <span
            id="latestPostLoader"
            class="loading loading-infinity loading-lg lg:mt-24 text-primary hidden"
          >
        </span>
        </div>
        </div>
    `;    
    latestPostContainer.appendChild(div);
    })
}

loadLestPost ();