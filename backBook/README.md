hola
recomendacion a usar
- brcypt para hashear la contraseña
- jwt para generar un token de sesion

Si Node.js fuera síncrono (línea por línea, esperando a que termine la anterior), cuando 100 usuarios intentaran iniciar sesión al mismo tiempo, el usuario número 100 tendría que esperar a que el servidor termine de procesar los primeros 99 inicios de sesión. El servidor se congelaría.

Para evitar esto, Node.js usa operaciones asíncronas.

*** async *** le dice a Node: "Oye, esta función va a tomar algo de tiempo, no te quedes congelado esperándola, atiende otras peticiones mientras tanto".

*** await *** le dice a tu código: "Detén la ejecución de esta función en específico hasta que MongoDB o bcrypt terminen de responder, y luego continúa con el resultado".

