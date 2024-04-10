const template = document.createElement('template')

const html = await (await fetch('../assets/navbar.html')).text()
template.innerHTML = html

export class Navbar extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    // Obtener los elementos relevantes por su ID
    const dropdownServicioLink = this.shadowRoot.getElementById(
      'dropdownServicioLink'
    )
    const dropdownNavbarServicio = this.shadowRoot.getElementById(
      'dropdownNavbarServicio'
    )
    const dropdownConsultaLink = this.shadowRoot.getElementById(
      'dropdownConsultaLink'
    )
    const dropdownNavbarConsulta = this.shadowRoot.getElementById(
      'dropdownNavbarConsulta'
    )


    // Obtener los elementos relevantes por su ID
    const dropdownServicioLink2 = this.shadowRoot.getElementById(
      'dropdownServicioLink2'
    )
    const dropdownNavbarServicio2 = this.shadowRoot.getElementById(
      'dropdownNavbarServicio2'
    )



    const dropdownRegistrosLink2 = this.shadowRoot.getElementById('dropdownRegistrosLink2') // Nuevo
    const dropdownNavbarRegistros2 = this.shadowRoot.getElementById('dropdownNavbarRegistros2') // Nuevo



    const mobileMenuToggle =
      this.shadowRoot.getElementById('mobile-menu-toggle')
    const navbarDropdown = this.shadowRoot.getElementById('navbar-dropdown')

    // Función para mostrar u ocultar un menú desplegable
    const toggleDropdown = (dropdown, event) => {
      event.stopPropagation()
      dropdown.classList.toggle('hidden')
    }

    // Función para mostrar u ocultar el menú
    const toggleMobileMenu = event => {
      event.stopPropagation()
      navbarDropdown.classList.toggle('hidden')
    }

    // Agregar evento de clic para mostrar/ocultar el menú en dispositivos móviles
    mobileMenuToggle.addEventListener('click', e => {
      toggleMobileMenu(e)
    })

    // Agregar eventos de clic para mostrar/ocultar el menú desplegable de "Servicio"
    dropdownServicioLink.addEventListener('click', event => {
      toggleDropdown(dropdownNavbarServicio, event)
      dropdownNavbarConsulta.classList.add('hidden')
      dropdownNavbarRegistros2.classList.add('hidden')

    })

    // Agregar eventos de clic para mostrar/ocultar el menú desplegable de "Consulta"
    dropdownConsultaLink.addEventListener('click', event => {
      toggleDropdown(dropdownNavbarConsulta, event)
      dropdownNavbarServicio.classList.add('hidden')
      dropdownNavbarRegistros2.classList.add('hidden')
    })

    dropdownRegistrosLink2.addEventListener('click', event => {
      toggleDropdown(dropdownNavbarRegistros2, event)
     dropdownNavbarServicio.classList.add('hidden')
     dropdownNavbarConsulta.classList.add('hidden')
    
    
     // Ocultar el menú de "Consulta" al mostrar "Registros"
    })
    

    // Cierra los menús desplegables si se hace clic en cualquier parte del documento
    document.addEventListener('click', event => {
      if (event.target !== dropdownServicioLink) {
        dropdownNavbarServicio.classList.add('hidden')
      }
      if (event.target !== dropdownConsultaLink) {
        dropdownNavbarConsulta.classList.add('hidden')
      }
      if (event.target !== dropdownRegistrosLink2) {
        dropdownNavbarRegistros2.classList.add('hidden')
      }
      if (event.target !== mobileMenuToggle) {
        navbarDropdown.classList.add('hidden')
      }
    
    })

    // Manejar el botón de "Salir"
    this.btnLogout = this.shadowRoot.getElementById('btn-logout')
    this.btnLogout.addEventListener('click', () => {
      sessionStorage.clear()
      window.location.href = '/login.html'
    })
  }
}

customElements.define('navbar-comp', Navbar)
