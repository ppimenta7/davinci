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
     "https://wa.me/5511971707515?text=Olá!%Gostaria%20de%falar%20com%20um%20de%20seus%20atendentes",
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

      {/* onClick="window.open('https://api.whatsapp.com/send/?phone=5513991542233&text=Adorei+seu+artigo', '_blank');">
      {/* onClick="window.open('https://wa.me/5513991542233?text=Adorei%20seu%20artigo', '_blank');">
      */}
    </>
  );
}

export default FixedSearch;