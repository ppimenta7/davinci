export const totalValueBugets = (value) => {
  const totalValueBugets = [
    {
      border: [false, false, true, false],
      text: "",
    },
    {
      text: "Total c/ Desconto",
      alignment: "right",
      margin: [10, 5, 10, 5],
    },
    { text: `${value}`, bold: true, margin: [10, 5, 10, 5] },
  ];
   return totalValueBugets;
}

export const nada = [
  {
    colSpan: 3,
    text: '',
    border: [false, false, false, false]
  },
];


export const blabla = (products, bugets) => {
  const bla = [];
    products?.map((prod, idx) => {

      const { htmlToText } = require('html-to-text');
      const comment = htmlToText(prod.technical_details, {
        wordwrap: 130
    });
      bla.push([
        { text: +idx, alignment: "center", margin: [5, 5] },
        {
          text: [
            { text: prod.name, bold: true },": ",
            { text: prod?.description},
            // { text: comment}
          ], margin: [5, 5],
        },
        
        { text: '', alignment: "center", margin: [5, 5] },
      ],)
    });

    bugets?.comments_report != "" ? (
    bla.push([
      {border: [false, false, false, false], text: "",},
      {
        text: [
          { text: "Comentário/Laudo: ", bold: true },
          bugets?.comments_report,
        ], alignment: "center", margin: [5, 5],
      },
      { text: '', alignment: "center", margin: [5, 5] },
    ],)) : null;

   return bla;
}

