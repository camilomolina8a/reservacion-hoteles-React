export function fechaLenguajeNatural (fecha){

    if (typeof(fecha) === "string") {
        let hoy = new Date(fecha);

        let arrayFecha = fecha.split("-");
        let dia = arrayFecha[2];
        dia = dia[0] === "0" ? dia[1] : dia;
        let diaDeLaSeamana = hoy.getDay();
        let mes = arrayFecha[1];
        mes = mes.includes("0") ? mes[1] : mes;
        let anio = arrayFecha[0];

        let nombreDiaDeLaSemana = [
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
            "Domingo",
        ];
        let nombreMes = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ];

        return `${nombreDiaDeLaSemana[diaDeLaSeamana]}, ${dia} de ${
            nombreMes[mes - 1]
        } del ${anio}`;
    } else {
        let hoy = new Date(fecha);
        let diaDeLaSeamana = hoy.getDay();
        let nombreDiaDeLaSemana = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
        ];
        let dia = hoy.getDate();
        let mes = hoy.getMonth();
        let nombreMes = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ];
        let anio = hoy.getFullYear();
        return `${nombreDiaDeLaSemana[diaDeLaSeamana]}, ${dia} de ${nombreMes[mes]} del ${anio}`;
    }
};

export function transformacionPrecio(numero){
    if (numero === 1) {
        return "$";
    } else if (numero === 2) {
        return "$ $";
    } else if (numero === 3) {
        return "$ $ $";
    } else if (numero === 4) {
        return "$ $ $ $";
    }
};

export function fechaDeHoyFormateadaAnioMesDia(){
    let hoy = new Date();
    let dia = hoy.getDate();
    dia = ("0" + dia).slice(-2);
    let mes = hoy.getMonth() + 1;
    mes = ("0" + mes).slice(-2);
    let anio = hoy.getFullYear();
    let fechaHoyFormateadaAnioMesDia = `${anio}-${mes}-${dia}`;
    return fechaHoyFormateadaAnioMesDia;
};