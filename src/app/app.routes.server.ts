import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Client: la ruta se pinta en el navegador (no HTML congelado en build).
 * Evita que al recargar se vea una plantilla vieja del prerender (p. ej. "dashboard works!").
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
];
