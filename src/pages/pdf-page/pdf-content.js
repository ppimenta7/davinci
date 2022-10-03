import {
  formateDate,
  formateValue,
  formataCPF,
  formateDateNow,
} from "../../../public/js/index";
import {logo, fundo} from "../../../public/img/imgs-datauri"

export const dd = (products, bugets, customers, filename) => {

  const dataBirthdate = formateDate(customers?.birth_date);
  const cpf = formataCPF(customers?.cpf);
  const value = formateValue(bugets.value);
  const discount = formateValue(bugets.value - bugets.discount);

  const data_atual = formateDateNow()

  const comment = "";
  products.map((prod) => {
    comment += `${prod.technical_details}. `;
  });

//   let html = new DOMParser().parseFromString(comment, "text/html");
const floatingElement = new DOMParser().parseFromSrting(comment, 'text/xml')
const string = floatingElement.innerText
console.log(string);
// 	console.log(html);
	// const d = comment.replace(/<style([\s\S]*?)<\/style>/gi, '')
	// 			.replace(/<script([\s\S]*?)<\/script>/gi, '')
	// 			.replace(/<\/div>/ig, '\n')
	// 			.replace(/<\/li>/ig, '\n')
	// 			.replace(/<li>/ig, '  *  ')
	// 			.replace(/<\/ul>/ig, '\n')
	// 			.replace(/<\/p>/ig, '\n')
	// 			.replace(/<br\s*[\/]?>/gi, "\n")
	// 			.replace(/<[^>]+>/ig, '');
	// console.log(d)

var strippedHtml = comment.replace(/<[^>]+>/g, '');

  const comments_report = bugets.comments_report == "" ? strippedHtml : bugets.comments_report


  const dd = {
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
	  {text: `Barueri, ${data_atual}`, margin: [0,0,0, 50]},
      { text: `Dados do Paciente`, style: "header" },
      {
        text: [
          { text: `Nome: `, style: "subheader" },
          `${customers.full_name}          `,
          { text: `Endereço: `, style: "subheader" },
          `${customers.address}\n`,
        ],
        margin: [0, 0, 0, 10],
      },
      {
        text: [
          { text: `CPF: `, style: "subheader" },
          `${cpf}          `,
          { text: `Data de Nascimento: `, style: "subheader" },
          `${dataBirthdate}\n`,
        ],
        margin: [0, 0, 0, 10],
      },
      {
        text: [
          { text: `Doutor Responsável: `, style: "subheader" },
          `${customers.dr_responsible}\n`,
        ],
        margin: [0, 0, 0, 10],
      },
      {
        text: [
          { text: `Tipo de Amputação: `, style: "subheader" },
          `${customers.type_of_amputation}`,
        ],
        margin: [0, 0, 0, 50],
      },

      {
        text: "PROPOSTA COMERCIAL PARA SOLUÇÃO I",
        style: "subheader",
      },
      {
        style: "tableExample",
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
            [
              { text: "1", alignment: "center", margin: [5,5]  },
              { text: `${comments_report}`, alignment: "center", margin: [5,5] },
              { text: `${discount}`, alignment: "center", margin: [5,5]  },
            ],
            [
              {
                border: [false, true, true, false],
                text: "",
              },
              { text: "Total c/ Desconto", alignment: "right", margin: [10, 5, 10, 5] },
              { text: `${value}`, bold: true, margin: [10, 5, 10, 5]  },
            ],
          ], margin: [0, 0, 0, 20] ,
        },
      },
      {
        style: "tableExample",
        margin: [0, 5, 0, 2],
        table: {
          widths: ["*"],
          body: [
            [{ text: "Condição de Pagamento", style: "tableHeader" }],
            [{ text: `${bugets.payment_conditions}`, alignment: "center" }],
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
        style: "tableExample",
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
      subheader: {
        // fontSize: 14,
        bold: true,
      },
      tableExample: {
        margin: [0, 5, 0, 15],
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

  return dd;
};
