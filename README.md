# LOGIN
- difernciar LOGIN y REGISTER
- LOGIN -> usuario ya registrado en la base de datos
    - Constatación y verificacíon del usuario
    - Acceder o denegar el Inicio de Sesion
- REGISTER -> usuario nuevo
    - Verificación en la base de datos
    - Crear o denegar el registro del nuevo Usuario
- BCRYPT
    - encrimpta la contraseña con un hash
    - en la base de datos solo se guarda el hash, en texto plano no
    - cada vez que ingresan la contraseña esta se hashea y se compara con el hash de la base de datos

# Después del LOGIN
- Una vez que pudimos acceder con nuestra cuenta a la página, también debemos salir de la cuenta
- Cerra sesión/ signOut

# Separar rutas por usuario
- invitado
- usuario
- admin
# invitado solo podrá:
- Ver la página principal
- Ver los libros y sus detalles
- Pantalla de contacto
# Usuario
- Podrá ver todo lo que ve un usuario invitado
- Podrá usar el carrito
- Podrá comprar libros
- Visualizar su perfil con sus datos personales y sus compras
# Admin
- Podrá visualizar y hacer todo lo que puede hacer los Usuarios e invitado
- Tener acceso a todos los datos de los usuarios y libros
- Hacer un CRUD con usuarios y libros, con su respectiva pantallas

