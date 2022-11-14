// import jsPDF from "jspdf";
import Head from "next/head";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useEffect } from "react";
import { logo, fundo, ass } from "../../public/img/imgs-datauri";
import {
  formateDate,
  formateValue,
  formataCPF,
  formateDateNow,
  friendlyFilename,
} from "../../public/js/index";
import { totalValueBugets, nada, contentProducts } from "../data/pdf-content";
// const { htmlToText } = require("html-to-text");

const Pdf = ({ products, bugets, customers }) => {

  const dataBirthdate = formateDate(customers?.birth_date);
  const cpf = formataCPF(customers?.cpf);
  const value = formateValue(bugets?.value);
  const discount = formateValue(bugets?.value - bugets?.discount);
  const data_atual = formateDateNow();

  const bgTitle = bugets?.title;
  const title = bgTitle ? bgTitle.replace(/Orçamento para/g, "") : null;
  const version = bugets?.version;
  const contentProduct = contentProducts(products, bugets);
  const filename = friendlyFilename(customers?.full_name);

  function gerarPDF() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const docDefinitions = {
      pageSize: "A4",
      pageMargins: [40, 60, 40, 60],
      background: [
        {
          image: fundo,
          width: 595,
        },
      ],
      info: {
        title: `PDF_${filename}`,
      },
      content: [
        {
          image: logo,
          width: 100,
        },
        { text: `Barueri, ${data_atual}`, margin: [0, 0, 0, 50] },
        { text: `Dados do Paciente`, style: "header" },
        {
          text: [
            { text: `Nome: `, bold: true },
            `${customers?.full_name}          `,
            { text: `Endereço: `, bold: true },
            `${customers?.address}\n`,
          ],
          margin: [0, 0, 0, 10],
        },
        {
          text: [
            { text: `CPF: `, bold: true },
            `${cpf}          `,
            { text: `Data de Nascimento: `, bold: true },
            `${dataBirthdate}\n`,
          ],
          margin: [0, 0, 0, 10],
        },
        {
          text: [
            { text: `Doutor Responsável: `, bold: true },
            `${customers?.dr_responsible}\n`,
          ],
          margin: [0, 0, 0, 10],
        },
        {
          text: [
            { text: `Tipo de Amputação: `, bold: true },
            `${customers?.type_of_amputation}`,
          ],
          margin: [0, 0, 0, 50],
        },
        {
          table: {
            headerRows: 1,
            widths: ["*", "auto"],
            body: [
              [
                {
                  text: "PROPOSTA COMERCIAL PARA SOLUÇÃO I",
                  bold: true,
                  noWrap: true,
                  alignment: "left",
                },
                {
                  text: `v${version}.0`,
                  bold: true,
                  alignment: "right",
                  noWrap: true,
                },
              ],
            ],
          },
          layout: "noBorders",
          margin: [10, 0, 15, 0],
        },
        {
          margin: [0, 5, 0, 15],
          table: {
            headerRows: 1,
            widths: ["auto", "*", "auto"],
            body: [
              [
                { text: "Item", style: "tableHeader" },
                { text: "Descrição", style: "tableHeader" },
                { text: "Valor Unit.", style: "tableHeader" },
              ],
              contentProduct[0],
              contentProduct[1],
              totalValueBugets(discount),
            ],
            margin: [0, 0, 0, 20],
          },
        },
        {
          pageBreak: "before",
          margin: [0, 5, 0, 15],
          table: {
            widths: ["*"],
            body: [
              [{ text: "Condição de Pagamento", style: "tableHeader" }],
              [{ text: `${bugets?.payment_conditions}`, alignment: "center" }],
            ],
          },
        },
        {
          text: [
            "Obs: *Sujeito a análise de crédito. **Sujeito a limite disponível no cartão de crédito. O pagamento pode ser realizado em mais um um cartão.",
          ],
          color: "gray",
          italics: true,
          fontSize: 12,
        },
        {
          text: "*ESTE ORÇAMENTO INCLUI TODO SERVIÇO E FISIOTERAPIA NECESSÁRIOS PARA A COMPLETA REABILITAÇÃO DO(A) PACIENTE",
          margin: [0, 20, 0, 20],
        },
        {
          margin: [0, 5, 0, 15],
          table: {
            headerRows: 1,
            body: [
              [
                { text: "Prazo de Entrega:", style: "tableHeader" },
                { text: "Validade deste Orçamento:", style: "tableHeader" },
                { text: "Garantia dos componentes:", style: "tableHeader" },
              ],
              [
                { text: "A combinar", alignment: "center" },
                { text: "30 dias", alignment: "center" },
                { text: "Do Fabricante", alignment: "center" },
              ],
            ],
          },
          layout: "noBorders",
        },

        {
          text: [
            { text: "Assistência Técnica: ", bold: true },
            "Toda e qualquer assistência técnica do material será prestado por esta empresa sempre que necessário, sendo recomendado a cada oito meses de manutenção para conservação do material. Certos de contarmos com a sua preferência, colocamo-nos ao inteiro dispor para qualquer eventual esclarecimento.",
          ],
        },
        {
          image: ass,
          width: 200,
          margin: [20, 20, 0, 20],
          alignment: "right",
        },
      ],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 0, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: "black",
          margin: [10, 5, 10, 5],
          noWrap: true,
          alignment: "center",
        },
      },
      defaultStyle: {
        // alignment: 'justify'
      },
    };

    function carregado() {
      const loader = document.querySelector("#loader");
      const title = document.querySelector("#title");
      loader.style.display = "none";
      title.innerHTML = "Sucesso!";
    }
    const doc = pdfMake.createPdf(docDefinitions);
    setTimeout(carregado, 5000);
    doc.open({}, window);
    // doc.getBase64((data) => { window.location.href = 'data:application/pdf;base64,' + data; });
    // doc.download(`pdf_${filename}`);
  }

  useEffect(() => {
    // function gerarPDF() {
    //   const doc = new jsPDF("p", "pt", "a4");
    //   doc.html(document.querySelector("#teste"), {
    //     callback: function (pdf) {
    //       // pdf.save("output.pdf");
    //       var string = pdf.output("datauristring");
    //       var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
    //       var x = window.open();
    //       x.document.open();
    //       x.document.write(iframe);
    //       x.document.close();
    //     },
    //   });
    // }
    document.body.classList.add("pdf");
    window.addEventListener("load", gerarPDF);
  });

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <section>
        <div id="teste">
          <div className="container loader-container">
            <h2 className="orange-color text-u fz-35 pt-40 pb-30">
              <span className="fw-300 text-dark">Orçamento para</span>
              {title}
            </h2>
            <h3 id="title">Gerando PDF</h3>
            <p className="fz-16">
              A geração não ocorreu automaticamente{" "}
              <span style={{ textDecoration: "underline" }} onClick={gerarPDF}>
                Tente Novamente
              </span>
            </p>
            <div id="loader" className="c-loader"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pdf;
