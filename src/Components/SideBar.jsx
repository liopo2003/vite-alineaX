import { NavLink } from 'react-router-dom'
export default function Sidebar() {

  return (
    <div className='sidebar'>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Pagina1">Pagina 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Pagina2">Pagina 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Pagina3">Pagina 3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Deshabilitar</a>
        </li>
      </ul>
    </div>
  )
}
