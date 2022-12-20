/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

const FixedSearch = () => {

  useEffect(() => {
    let offset = 150;
    let fixedSearch = document.querySelector(".fixed-search .search-area");

    window.addEventListener("scroll", function () {
      if (window.pageYOffset > offset) {
        fixedSearch.classList.add("scroll");
      } else {
        fixedSearch.classList.remove("scroll");

      }
    });
  }, []);

  const toggleSearch = () => {
   window.open(
     "https://wa.me/5511971707515?text=Olá!%20Gostaria%20de%20falar%20com%20um%20de%20seus%20atendentes",
     "_blank"
   );
  }

  return (
    <>
      <div className="fixed-search">
        <div className="search-area" onClick={toggleSearch}>
          <img
            src="https://i.ibb.co/VgSspjY/whatsapp-button.png"
            alt="botão whatsapp"
          ></img>
        </div>
      </div>
    </>
  );
}

export default FixedSearch;