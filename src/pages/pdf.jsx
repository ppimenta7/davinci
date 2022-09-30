/* eslint-disable @next/next/no-css-tags */
import jsPDF from "jspdf";
import MainLightLayout from "../layouts/main-light";

import Head from "next/head";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useEffect } from "react";

function Pdf({ products, categories, bugets, customers }) {
  
  /*
  function gerarPDF(){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const reportTitle= [
      {
        text: 'Teste',
        fontSize: 15,
        bold: true,
        margin: [15, 20, 0, 45]
      }
    ]
    const details = []
    const rodape = []
    const docDefinitions = {
      pageSize: 'A4',
      pageMargins: [15,50,15,40],
      header: [reportTitle],
    }
    pdfMake.createPdf(docDefinitions).open();
  }*/

  useEffect(() => {
    function gerarPDF() {
      const doc = new jsPDF("p", "pt", "a4");
      doc.html(document.querySelector("#teste"), {
        callback: function (pdf) {
          // pdf.save("output.pdf");

          // pdf.output("dataurlnewwindow");
          var string = pdf.output("datauristring");

          var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
          var x = window.open();
          x.document.open();
          window.close()
          x.document.write(iframe);
          x.document.close();
        },
      });
    }
    document.body.classList.add("pdf");
    window.addEventListener("load", gerarPDF);
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <section 
      // style={{ overflow: "hidden", height: "100vh" }}
      >
        {/* <div style={{ height: "100vh" }}>
          <h1>O download já está sendo iniciado</h1>
        </div> */}
        <div id="teste">
          <h1>Teste</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor
            reiciendis quaerat odio quae ducimus vitae recusandae soluta?
            Facilis aliquid aperiam asperiores id assumenda labore explicabo
            fugit accusantium doloremque tempore.
          </p>
        </div>
        <div className="container">
          <div className="round-head text-center mb-20">
            <h2 className="orange-color text-u fz-35 pt-40 pb-30">
              <span className="fw-300 text-dark">Orçamento para</span>teste
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pdf;
