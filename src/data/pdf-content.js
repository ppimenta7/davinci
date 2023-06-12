import { formateValue } from "../../public/js/index";

export const totalValueBudgets = (value) => {
  const totalValueBudgets = [
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
  return totalValueBudgets;
};

export const nada = [
  {
    colSpan: 3,
    text: "",
    border: [false, false, false, false],
  },
];

export const contentProducts = (products, budgets) => {
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

    { text: formateValue(budgets?.value), alignment: "center", margin: [5, 5] },
  ]);

  budgets?.comments_report != ""
    && contentProducts.push([
        { border: [false, false, false, false], text: "" },
        {
          text: [
            { text: "Comentário/Laudo: ", bold: true },
            budgets?.comments_report,
          ],
          alignment: "center",
          margin: [5, 5],
        },
        { text: "", alignment: "center", margin: [5, 5] },
      ]);

  return contentProducts;
};
