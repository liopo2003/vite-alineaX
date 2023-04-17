import { NavLink } from 'react-router-dom'
import '../Imagen/LogoAlinea.jpg'

export default function Navbar() {

  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-primary">
  <div class="container-fluid">
     <a class="navbar-brand" href="#">Alinea</a> 
  {/* <img src="src/Imagen/LogoAlinea.jpg" alt="" className='logo' /> */}  {/* colocar la ruta completa */}

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto navbar-active">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Pagina1">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Pagina2">Pagina 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Pagina3">Pagina 3</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}


