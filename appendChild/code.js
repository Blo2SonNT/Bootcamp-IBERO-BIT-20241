let bodyPagina = document.querySelector('body')
let navbar = document.createElement('nav')
navbar.classList.add('navbar', 'bg-dark', 'navbar-dark', 'text-white')
bodyPagina.appendChild(navbar)


let divPadre = document.createElement('div')
divPadre.classList.add('container')
divPadre.style.padding = '5px 200px'
navbar.appendChild(divPadre)

let cajaImagen = document.createElement('img')
cajaImagen.src = "https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png"
cajaImagen.style.width = '120px'
divPadre.appendChild(cajaImagen)


let cajaMenus = document.createElement('ul')
cajaMenus.classList.add('d-flex', 'justify-content-center', 'px-3')
divPadre.appendChild(cajaMenus)


for (let x = 1; x <= 3; x++) {
    let flechabajo = document.createElement('i')
    flechabajo.classList.add('fa-solid', 'fa-chevron-down')
    let menu1 = document.createElement('li')
    menu1.classList.add('nav-item')
    menu1.innerText = 'Inicio ' + x
    cajaMenus.appendChild(menu1)
    menu1.appendChild(flechabajo)
}

bodyPagina.innerHTML += `

<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
`



let variable = document.querySelectorAll('.elemento')
console.log('variable:', variable)