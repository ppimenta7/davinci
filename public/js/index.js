export function formateDate(date){
    const data = new Date(date),
          dia  = data.getDate().toString(),
          diaF = (dia.length == 1) ? '0'+dia : dia,
          mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
          mesF = (mes.length == 1) ? '0'+mes : mes,
          anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
  }

export function formateValue(val) {
    val = parseFloat(val)
    const value = val.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) 
    return value;
}

export function formataCPF(cpf){
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

export function formateDateNow(){
    const data = new Date();

    const mesExtenso = Array("Janeiro", "Fevereiro", "Março", 
    "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", 
    "Outubro", "Novembro", "Dezembro");

    const dia = data.getDate(); 
    const mes = data.getMonth();
    const ano4 = data.getFullYear();

    return dia + ' de '+  mesExtenso[mes] + ' de ' + ano4;
}

export function friendlyFilename(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/([^\w]+|\s+)/g, '-') // substitui espaço e outros caracteres por hífen
    .replace(/\-\-+/g, '-') // substitui múltiplos hífens por um único hífen
    .replace(/(ˆ-+|-+$)/, '') // remove hífens extras do final ou do início da string
}