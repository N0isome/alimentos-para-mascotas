# Alimentos para Mascotas

## Publicar en Render

1. Crea un repositorio nuevo en GitHub, por ejemplo `alimentos-para-mascotas`.
2. Extrae esta carpeta en tu computador y sube todos sus archivos al repositorio.
3. En [Render](https://render.com), inicia sesión con GitHub.
4. Selecciona **New → Blueprint** y elige el repositorio.
5. Render detectará automáticamente `render.yaml`. Confirma la creación y espera el primer despliegue.

Cada vez que hagas `git push` a la rama principal, Render actualizará el sitio.

## Si Render no detecta el Blueprint

1. Elige **New → Web Service**.
2. Conecta el repositorio y selecciona la rama `main`.
3. Usa estas configuraciones:
   - Runtime: `Node`
   - Build Command: `npm ci && npm run build`
   - Start Command: `npm run start -- --host 0.0.0.0 --port $PORT`
4. Presiona **Create Web Service**.

## Dominio propio

Cuando el sitio esté publicado, en Render abre **Settings → Custom Domains** y agrega tu dominio. Render te mostrará el registro DNS que debes copiar en el panel de tu proveedor de dominio.
