import moment from "moment";

function titleCase(str) {
    return typeof str === 'string'
        ? str.replaceAll('.', ' ').replaceAll('_', ' ').replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();})
        : '';
}

function formatNumber(number) {
    return (parseFloat(number) || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function formatMoney(number) {
    return (number < 0 ? '-' : '')+'$'+Number(parseFloat(number) || 0).toFixed(2).replace('-','').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatDate(date, format='MM/DD/YYYY') {
    return moment(date).format(format);
}

export {
    titleCase,
    formatDate,
    formatMoney,
    formatNumber,
}