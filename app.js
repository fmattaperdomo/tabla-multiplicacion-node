const argv = require("./config/yargs").argv;
const colors = require("colors/safe");

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
let comando = argv._[0];
switch (comando) {
    case "listar":
        console.log("Listar");
        listarTabla(argv.base, argv.limite)
            .then((mensaje) => console.log(mensaje))
            .catch((e) => console.log(e));
        break;
    case "crear":
        console.log("Crear");
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch((e) => console.log(e));
        break;
    default:
        console.log("Comando no reconocido");
}
// console.log(argv);

//console.log(module);

//let base = "4";

//console.log(process.argv);

// let argv2 = process.argv;
// console.log(argv.base);
// console.log("limite", argv.limite);

// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split("=")[1];

//console.log(base);

//console.log(multiplicar);