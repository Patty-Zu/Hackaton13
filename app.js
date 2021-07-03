const btn = document.getElementById('btnGet')
const listado = document.getElementById('listado')

btn.addEventListener('click', getInfo)

async function getInfo() {
  try {
    const response = await fetch("./array.js")
    const posts = await response.json()
    let template = ''
    posts.forEach(post => {
      template += `
      <div class="col-sm-6 col-md-4 mb-4">
        <div class="card border-secondary">
          <div class="card-body">
            <h5 class="card-title"><span class="fw-bolder text-light">Title: </span> ${post.title}</h5>
            <p class="card-text mb-0"><span class="fw-bolder text-light">Body: </span> ${post.body}</p>
          </div>
        </div>
      </div>
      `
    })

    listado.innerHTML = template
  } catch (error) {
    console.error(error)
  }
}