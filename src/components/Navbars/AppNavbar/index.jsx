/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export const goToSection = (e, link) => {
  if (link == "#0") e.preventDefault();
  
  const section = document.querySelector(`[data-scroll-index="${e.target.dataset.scrollNav}"]`);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
const Navbar = ({ links, navbarRef, theme}) => {
  return (
    <nav className={`navbar navbar-expand-lg ${theme}`} ref={navbarRef}>
      <div className={`container`}>
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
            {
              links && links.length && links.map((link, idx) => (
                <li className="nav-item" key={idx}>
                  <a className="nav-link" href={link.href} data-scroll-nav={idx} onClick={e => goToSection(e, link.href)}>{ link.name }</a>
                </li>
              ))
            }
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