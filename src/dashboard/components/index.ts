import { TablaListaFondos } from "./tabla-lista-fondos/tabla-lista-fondos";
export * from "./tabla-lista-fondos/tabla-lista-fondos";

import { TablaListaTransacciones } from "./tabla-lista-transacciones/tabla-lista-transacciones";
export * from "./tabla-lista-transacciones/tabla-lista-transacciones";

import { RegistrarSuscripcionDialog } from "./registrar-suscripcion-dialog/registrar-suscripcion-dialog";
export * from "./registrar-suscripcion-dialog/registrar-suscripcion-dialog";

export const components: any[] = [
   TablaListaFondos,
   TablaListaTransacciones,
   RegistrarSuscripcionDialog
];
