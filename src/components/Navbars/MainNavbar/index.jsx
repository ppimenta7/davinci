/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Navbar = ({ navbarRef, theme, logoTheme }) => {
  const dropdownHover = (e) => {
    const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
    const dropdownMenu = dropdownItem.querySelector('.dropdown-menu');
    if (dropdownMenu) dropdownMenu.classList.add('show');
  }

  const dropdownLeave = () => {
    const openedDropdown = document.querySelector('.navbar .dropdown-menu.show');
    if (openedDropdown) openedDropdown.classList.remove('show');
  }

  const sideDropdownHover = (e) => {
    const dropdownItem = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
    const dropdownSide = dropdownItem.querySelector('.dropdown-side');
    if (dropdownSide) dropdownSide.classList.add('show');
  }

  const sideDropdownLeave = () => {
    const openedSideDropdown = document.querySelector('.navbar .dropdown-side.show');
    if (openedSideDropdown) openedSideDropdown.classList.remove('show');
  }
  
  return (
    <nav className={`navbar navbar-expand-lg ${theme}`} ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          <div className="logo">
          <img src="img/davinci/d7.png" alt="" />
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button">
                Home
              </span>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button">
                Produtos
              </span>
            </li>
            <li className="nav-item dropdown mega-menu">
              <span className="nav-link dropdown-toggle" role="button" >
                Detalhes
              </span>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button">
                Proposta
              </span>
            </li>
          </ul>
          <div className="social">
            <ul className="rest">
              <li>
                <a href="https://www.facebook.com/davinciclinicbr"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/davincibrasil/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UCa1K4UCwNtivaLBs_zF25VQ"><i className="fab fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;