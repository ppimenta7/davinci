/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Link from 'next/link';
import footerData from '../../../data/footers/main-footer.json';

const Footer = () => {
  return (
    <footer className="main-footer bg-dark-blue bg-img" style={{ backgroundImage: "url('img/background/8.jpg')" }}>
      <div className={`sub-footer pt-0 no-bord`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyrights d-flex justify-content-end">
                <p className="fz-13">
                  © 2022 Davinci is Proudly Powered by 
                  <span className="underline">
                    <a href="https://www.penseapp.com.br" rel="noreferrer" target="_blank" className="gr-green-text ms-1">Penseapp</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer