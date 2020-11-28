//requireds
const fs = require("fs");
const colors = require("colors");
const { resolve } = require("path");

//const fs = require('express');
//const fs = require('./fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite introducido ${limite} no es número`);
            return;
        }
        let data = "";
        data += `=======================\n`.green;
        data += `====table de ${base}===\n`.green;
        data += `========================\n`.green;

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        resolve(data);
    });
};

let crearArchivo = (base, limite = 10) => {
    //module.exports.crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${base} no es número`);
            return;
        }

        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n `;
        }

        fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla,
};