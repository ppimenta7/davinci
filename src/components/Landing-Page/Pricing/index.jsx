/* eslint-disable @next/next/no-img-element */
import {
  formataCPF,
  formateDate,
  formateValue,
  formateDateFull
} from "../../../../public/js/index";

import Image from "next/image";
import ImgAss from "../../../../public/img/davinci/ass.png";
import ImgLogo from "../../../../public/img/davinci/logo.png";

import { useEffect, useState } from 'react';
import { getCustomers } from "../../../services/getCustomers";

const Pricing = ({ budgets }) => {
  const products = budgets?.products
  const customer= budgets?.customers

  budgets = budgets.budgets;

  const dataBirthdate = customer?.birth_date ? formateDate(customer?.birth_date) : '';
  const cpf = customer?.cpf ? formataCPF(customer?.cpf) : '';
  const value = formateValue(budgets?.value);

  const comment = "";
  products?.map((prod) => {
    comment += `${prod.technical_description}. `;
  });

  return (
    <section className="price section-padding" data-scroll-index="4">
      <div className="container">
        <div className="price-table col-md-10 col-lg-8 margin-rl-auto ">
          <h5>Dados do Paciente</h5>
          <div className="row justify-content-center primery-shadow bg-light">
            <div className="customer">
              <p className="inline">
                <span>Nome:</span> {customer?.full_name}
              </p>
              {cpf ? <p className="inline">
                <span>CPF:</span> {cpf}
              </p> : null}
              {customer?.address ? <p >
                <span>Endereço:</span> {customer?.address}
              </p>: null}
              {customer?.email ? <p className="inline">
                <span>Email:</span> {customer?.email}
              </p> : null}
              {customer?.phone_number ? <p className="inline">
                <span>Telefone:</span> {customer?.phone_number}
              </p>: null}
              <p>
                <span>Data de Nascimento:</span> {dataBirthdate}
              </p>
              {customer?.dr_responsible ? <p>
                <span>Doutor Responsável:</span> {customer?.dr_responsible}
              </p> : null}
              {customer?.type_of_amputation ? <p>
                <span>Tipo de Amputação:</span> {customer?.type_of_amputation}
              </p> : null}
              {/* "reference": "teste" */}
            </div>

            <div className={`item md-mb50`}>
              <div className="round-head span type mb-30 valign text-black">
                <h6 className="ls2 text-u fz-12">
                  Proposta Comercial para Solução I
                </h6>
                <span className="ls2 fz-12 fw-600">v{budgets?.version}</span>
              </div>
              <div className="amount text-center">
                <table className="table-border">
                  <tr className="fw-600">
                    <td>Item</td>
                    <td style={{ width: "70%" }}>Descrição</td>
                    <td>Valor Unit.</td>
                  </tr>
                  {/* {products.map((prod, idx) => (
                    // eslint-disable-next-line react/jsx-key
                    <tr>
                      <td>{++idx}</td>
                      <td>
                        {prod.technical_description}
                        {/* {budgets.comments_report == "" ? comment : budgets.comments_report}
                      </td>
                      <td>
                        {formateValue(prod.value == null ? 0 : prod.value)}
                      </td>
                    </tr>
                  ))} */}
                  <tr>
                    <td>1</td>
                    <td>
                      {comment}
                      {/* // {budgets.comments_report == "" ? comment : budgets.comments_report}  */}
                    </td>
                    <td>{value}</td>
                  </tr>
                  <tr>
                    <td style={{ border: "none" }}></td>
                    <td style={{ textAlign: "right" }}>Total c/ Desconto</td>
                    <td className="fw-700">
                      {formateValue(budgets?.value - budgets?.discount)}
                    </td>
                  </tr>
                </table>
              </div>
              <table>
                <tr>
                  <td className="text-u">Condição de Pagamento</td>
                </tr>
                <tr>
                  {/* <td>O valor normal pode ser dividido em até <span>10</span> parcelas iguais de <span>R$ 233.714,00</span> no cartão de credito.</td> */}
                  <td>{budgets?.payment_conditions}</td>
                </tr>
              </table>
              <div>
                <p>
                  Obs: *Sujeito a análise de crédito. **Sujeito a limite
                  disponível no cartão de crédito. O pagamento pode ser
                  realizado em mais um um cartão.
                </p>

                <p
                  style={{
                    fontSize: "16px",
                    color: "#15171f",
                    padding: "20px 0",
                  }}
                >
                  *ESTE ORÇAMENTO INCLUI TODO SERVIÇO E FISIOTERAPIA NECESSÁRIOS
                  PARA A COMPLETA REABILITAÇÃO DO(A) PACIENTE
                </p>

                <table className="table-bd-none">
                  <tr>
                    <td className="fw-700">
                      Prazo de Entrega:{" "}
                      <span className="fw-400">A combinar</span>
                    </td>
                    <td className="fw-700">
                      Validade deste Orçamento:{" "}
                      <span className="fw-400">30 Dias</span>
                    </td>
                    <td className="fw-700">
                      Garantia dos componentes:{" "}
                      <span className="fw-400">Do fabricante</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <span className="fw-700">Assistência Técnica:</span> Toda
                      e qualquer assistência técnica do material será prestado
                      por esta empresa sempre que necessário, sendo recomendado
                      a cada oito meses de manutenção para conservação do
                      material. Certos de contarmos com a sua preferência,
                      colocamo-nos ao inteiro dispor para qualquer eventual
                      esclarecimento.
                    </td>
                  </tr>
                </table>
              </div>
              <div
                style={{ justifyContent: 'space-between', alignItems: "flex-end" }}
                className="flex padding-rl-30 pb-30"
              >
                <span
                  style={{ width: "100%", transform: 'translateY(4px)', alignItems: 'flex-end', gap: '8px' }} className="flex pb-30 padding-rl-30"
                >
                 Barueri, <span style={{ fontSize: '18px'}}>{formateDateFull(budgets.creation_date)}</span>
                </span>
                <div style={{ flexDirection: "column", alignItems: "flex-end" }}
                className="flex pb-30 pr-30">
                  <Image
                    style={{ width: "250px", transform: "translateY(45px)" }}
                    src={ImgAss}
                    alt=""
                    width={"250px"}
                    height={"128.2px"}
                  />
                  <span
                    style={{ width: "250px", borderBottom: "2px black solid" }}
                  ></span>
                </div>
              </div>

              <div className="valign pl-30">
                <Image
                  style={{ width: "140px" }}
                  src={ImgLogo}
                  alt=""
                  width={"140px"}
                />
                <p className="fz-16 pl-30">
                  Av. Aruanâ, nº 280/352 - 1º andar - Sala 7 - Tamboré - Barueri
                  - SP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
