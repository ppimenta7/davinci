/* eslint-disable @next/next/no-css-tags */
import jsPDF from "jspdf";
import Head from "next/head";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useEffect } from "react";
import { logo, fundo } from "../../public/img/imgs-datauri";
import {
  formateDate,
  formateValue,
  formataCPF,
  formateDateNow,
  friendlyFilename,
} from "../../public/js/index";

const Pdf = ({ products, categories, bugets, customers }) => {
  const dataBirthdate = formateDate(customers?.birth_date);
  const cpf = formataCPF(customers?.cpf);
  const value = formateValue(bugets?.value);
  const discount = formateValue(bugets?.value - bugets?.discount);
  const data_atual = formateDateNow();
  //   teste?.push(`
  //     { text: ${++idx}, alignment: "center", margin: [5, 5] },
  //     { text: '${product.description}', alignment: "center", margin: [5, 5] },
  //     { text: '', alignment: "center", margin: [5, 5] },`
  //   )
  // })

  // const pp = products.map((prod, idx) =>
  //   [
  //   { text: idx, alignment: "center", margin: [5, 5] },
  //   { text: `${prod.description}`, alignment: "center", margin: [5, 5] },
  //   { text: ``, alignment: "center", margin: [5, 5] },
  // ]
  // );

  // const p = pp.map(
  //   function(obj) {
  //   return Object.keys(obj).map(function(key) {
  //       return obj[key];
  //   })
  // });
  // console.log(p)
  // const pop = p.map(pop => pop)
  // pop.map(p1 => console.log(p1))

  // const comment = "";
  // products.map((prod) => {
  //   comment += `${prod.technical_details}. `;
  // });

  // //   let html = new DOMParser().parseFromString(comment, "text/html");
  // const floatingElement = new DOMParser().parseFromSrting(comment, 'text/xml')
  // const string = floatingElement.innerText
  // console.log(string);
  // // 	console.log(html);
  // 	// const d = comment.replace(/<style([\s\S]*?)<\/style>/gi, '')
  // 	// 			.replace(/<script([\s\S]*?)<\/script>/gi, '')
  // 	// 			.replace(/<\/div>/ig, '\n')
  // 	// 			.replace(/<\/li>/ig, '\n')
  // 	// 			.replace(/<li>/ig, '  *  ')
  // 	// 			.replace(/<\/ul>/ig, '\n')
  // 	// 			.replace(/<\/p>/ig, '\n')
  // 	// 			.replace(/<br\s*[\/]?>/gi, "\n")
  // 	// 			.replace(/<[^>]+>/ig, '');
  // 	// console.log(d)

  // var strippedHtml = comment.replace(/<[^>]+>/g, '');

  //   const comments_report = bugets.comments_report == "" ? strippedHtml : bugets.comments_report

  const comments_report = bugets?.comments_report;

  const teste = ({t}) => {

  }

  const bla = [
    [
      { text: "1", style: "tableHeader" },
      { text: "", style: "tableHeader" },
      { text: '', style: "tableHeader" },
    ],
    [
      { text: "Item1", style: "tableHeader" },
      { text: value, style: "tableHeader" },
      { text: "Valor Unit.", style: "tableHeader" },
    ],
    [
      { text: "Item2", style: "tableHeader" },
      { text: value, style: "tableHeader" },
      { text: "Valor Unit.", style: "tableHeader" },
    ],
  ];

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
          text: "PROPOSTA COMERCIAL PARA SOLUÇÃO I",
          bold: true,
        },
        {
          margin: [0, 5, 0, 15],
          table: {
            headerRows: 1,
            widths: ["auto", "*", "auto"],
            // dontBreakRows: true,
            // keepWithHeaderRows: 1,
            body: [
              [
                { text: "Item", style: "tableHeader" },
                { text: "Descrição", style: "tableHeader" },
                { text: "Valor Unit.", style: "tableHeader" },
              ],
              products.length > 0 & bla.length > 0 ? bla[0]: [{},{},{},],
              // products.length > 1 & bla.length > 1 ? bla[1]: [{},{},{},],
              // products.length > 2 & bla.length > 2 ? bla[2]: [{},{},{},],
              // products.length > 3 & bla.length > 3 ? bla[3]: [{},{},{},],
              // products.length > 4 & bla.length > 4 ? bla[4]: [{},{},{},],
              // products.length > 5 & bla.length > 5 ? bla[5]: [{},{},{},],
              // products.length > 6 & bla.length > 6 ? bla[6]: 
              // products.length > 7 & bla.length > 7 ? bla[7]: 
              // products.length > 8 & bla.length > 8 ? bla[8]: 
              // products.length > 9 & bla.length > 9 ? bla[9]: 
              [
                {
                  border: [false, true, true, false],
                  text: "",
                },
                {
                  text: "Total c/ Desconto",
                  alignment: "right",
                  margin: [10, 5, 10, 5],
                },
                { text: `${value}`, bold: true, margin: [10, 5, 10, 5] },
              ],
            ],
            margin: [0, 0, 0, 20],
          },
        },
        {
          margin: [0, 5, 0, 15],
          margin: [0, 5, 0, 2],
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
            "Toda e qualquer assistência técnica do material será prestado por esta empresa sempre que necessário, sendo recomendado a cada oito meses de manutenção para conservação do material. Certos de contarmos com a sua preferência, colocamo-nos ao inteiro dispor para qualquer eventual esclarecimento",
          ],
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

    pdfMake.createPdf(docDefinitions).download(`pdf_${filename}`);
    pdfMake.createPdf(docDefinitions).open({}, window);
    // pdfMake.createPdf(docDefinitions).open();
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
};

export default Pdf;
