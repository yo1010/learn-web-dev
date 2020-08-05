let fs = require('fs'), PDFParser = require("pdf2json");


const readPdf = () => {
    let pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {
        fs.writeFile("./CV.json", JSON.stringify(pdfData));
    });

    pdfParser.loadPDF('./YD.pdf');
};

module.exports = {
    readPdf: readPdf
}