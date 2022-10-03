"use strict";
exports.id = 308;
exports.ids = [308];
exports.modules = {

/***/ 9308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F8": () => (/* binding */ formateDate),
/* harmony export */   "bE": () => (/* binding */ formataCPF),
/* harmony export */   "cC": () => (/* binding */ friendlyFilename),
/* harmony export */   "es": () => (/* binding */ formateValue),
/* harmony export */   "tb": () => (/* binding */ formateDateNow)
/* harmony export */ });
function formateDate(date) {
    const data = new Date(date), dia = data.getDate().toString(), diaF = dia.length == 1 ? "0" + dia : dia, mes = (data.getMonth() + 1).toString(), mesF = mes.length == 1 ? "0" + mes : mes, anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}
function formateValue(val) {
    val = parseFloat(val);
    const value = val.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });
    return value;
}
function formataCPF(cpf) {
    const cpfFormate = cpf?.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return cpfFormate;
}
function formateDateNow() {
    const data = new Date();
    const mesExtenso = Array("Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano4 = data.getFullYear();
    return dia + " de " + mesExtenso[mes] + " de " + ano4;
}
function friendlyFilename(text) {
    const filename = text?.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/([^\w]+|\s+)/g, "-") // substitui espaço e outros caracteres por hífen
    .replace(/\-\-+/g, "-") // substitui múltiplos hífens por um único hífen
    .replace(/(ˆ-+|-+$)/, ""); // remove hífens extras do final ou do início da string
    return filename;
}


/***/ })

};
;