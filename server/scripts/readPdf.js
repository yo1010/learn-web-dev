let fs = require('fs')
let PDFParser = require("pdf2json");


const readPdf = () => {
    let pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {
        const jsonPdf = JSON.stringify(pdfData);
        return jsonPdf;
    });

    pdfParser.loadPDF('./YD.pdf');
};

module.exports = {
    readPdf: readPdf
};