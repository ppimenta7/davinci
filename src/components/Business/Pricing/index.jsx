/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const Pricing = ({ bugets, customers }) => {

  function formateDate(date){
    const data = new Date(date),
          dia  = data.getDate().toString(),
          diaF = (dia.length == 1) ? '0'+dia : dia,
          mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
          mesF = (mes.length == 1) ? '0'+mes : mes,
          anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}
  const dataBirthdate = formateDate(customers.birth_date)

  function formataCPF(cpf){
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  const cpf = formataCPF(customers.cpf);


  return (
    <section className="price section-padding" data-scroll-index="4">
      <div className="container">
        <div className="price-table col-md-10 col-lg-8 margin-rl-auto ">
        <h5>Dados do Paciente</h5>
          <div className="row justify-content-center primery-shadow bg-light">
            <div className="customer">
              <p className="inline"><span>Nome:</span> {customers.full_name}</p>
              <p className="inline"><span>Endereço:</span> {customers.address}</p>
              <p className="inline"><span>CPF:</span> {cpf}</p>
              <p className="inline"><span>Data de Nascimento:</span> {dataBirthdate}</p>
              <p><span>Doutor Responsável:</span> {customers.dr_responsible}</p>
              <p><span>Tipo de Amputação:</span>R$ {customers.type_of_amputation}</p>
            {/* "reference": "teste" */}
            </div>

                <div className={`item md-mb50`}>
                  <div className="round-head type">
                    <h6 className="ls2 text-u fz-12 mb-30">
                    Proposta Comercial para Solução I <span></span>
                    </h6>
                  </div>
                  
                  <div className="amount text-center">
                    <table>
                      <tr>
                        <td>Item</td>
                        <td style={{width:"70%"}}>Descrição</td>
                        <td>Valor Unit.</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>{bugets.comments_report}</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td style={{border: "none"}}></td>
                        <td >Total c/ Desconto</td>
                        <td>{bugets.value}</td>
                      </tr>
                    </table>
                  </div>
                  <table>
                      <tr>
                        <td>Condição Especial de Pagamento - até 18x no Cartão de Crédito*</td>
                      </tr>
                      <tr>
                        <td>O valor normal pode ser dividido em até <span>10</span> parcelas iguais de <span>R$ 233.714,00</span> no cartão de credito.</td>
                      </tr>
                    </table>
                  <div>
                    <p>Obs: *Sujeito a análise de crédito. **Sujeito a limite disponível no cartão de crédito. O pagamento pode ser realizado em mais um um cartão.</p>
                  
                    <p style={{fontSize: "16px", color:"#15171f", padding: "20px 0"}}>*ESTE ORÇAMENTO INCLUI TODO SERVIÇO E FISIOTERAPIA NECESSÁRIOS PARA A COMPLETA REABILITAÇÃO DO(A) PACIENTE</p>

                    <table className="table-bd-none">
                      <tr>
                          <td>Prazo de Entrega: <span>A combinar</span></td>
                          <td>Validade deste Orçamento: 30 Dias</td>
                          <td>Garantia dos componentes: Do fabricante</td>
                      </tr>
                      <tr>
                      <td colSpan={3}>Assistência Técnica: Toda e qualquer assistência técnica do material será prestado por esta empresa sempre que necessário, sendo recomendado a cada oito meses de manutenção para conservação do material. 
                          Certos de contarmos com a sua preferência, colocamo-nos ao inteiro dispor para qualquer eventual esclarecimento </td>
                      </tr>
                    </table>
                  </div>
                  <div style={{flexDirection: "column", alignItems: "flex-end"}} className="flex pb-30 pr-30">
                    <img style={{width:"250px", transform:"translateY(45px)"}} src="/img/davinci/ass.png" alt="" />
                    <span style={{width:"250px", borderBottom: "2px black solid"}}></span>
                  </div>

                  <div className="valign pl-30">
                    <Image width={140} height={102} src="/img/davinci/logo.png" alt=""/>
                    <p className="fz-16 pl-30">Av. Aruanâ, nº 280/352 - 1º andar - Sala 7 - Tamboré - Barueri - SP</p>
                  </div>

                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
