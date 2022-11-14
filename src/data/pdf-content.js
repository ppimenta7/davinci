import {
  formateDate,
  formateValue,
  formataCPF,
  formateDateNow,
  friendlyFilename,
} from "../../public/js/index";

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
};

export const nada = [
  {
    colSpan: 3,
    text: "",
    border: [false, false, false, false],
  },
];

export const contentProducts = (products, bugets) => {
  let allProducts = [];
  products?.map((prod, idx) => {
    allProducts.push(
      { text: `${prod.name} - ${prod.short_description}: `, bold: true },
      `${prod.technical_description}\n`
    );
  });

  const contentProducts = [];
  contentProducts.push([
    { text: 1, alignment: "center", margin: [5, 5] },
    {
      text: allProducts,
      margin: [5, 5],
    },

    { text: formateValue(bugets?.value), alignment: "center", margin: [5, 5] },
  ]);

  bugets?.comments_report != ""
    ? contentProducts.push([
        { border: [false, false, false, false], text: "" },
        {
          text: [
            { text: "Comentário/Laudo: ", bold: true },
            bugets?.comments_report,
          ],
          alignment: "center",
          margin: [5, 5],
        },
        { text: "", alignment: "center", margin: [5, 5] },
      ])
    : null;

  return contentProducts;
};