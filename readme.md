# VetApp 

Utilizaremos un servidor creado con node/express.
En esta segunda parte vamos a:
- Crear la base de datos, tablas e incluir datos mediante mysql.
- Incluir packete mysql en node.
- Conectar con la base de datos.
- Hacer las queries a la base de datos correspondientes.

## rutas.

| ruta  | respuesta  |
|---|---|
|  / |  debe devolver el index.html |
| /owners  | debe devolver todos los dueños |
| /pets | debe devolver todas las mascotas |
| /pet?name |  debe devolver la mascota especificada |
| /pet?id |  debe devolver la mascota especificada |
| /owner/:id |  debe devolver el dueño especificado |

## base de datos.
Debemos crear la base de datos vetapp con las tablas de más abajo.

### nombre base de datos
vetapp

### pet
(Las tablas pueden ser modificadas en un futuro ejercicio)

| columna  | valor  |
|---|---|
| pet_id |  int not null auto_increment |
| pet_name | varchar(30) not null |
| pet_description | varchar(30) not null |
| pet_picture | varchar(150) not null |
| pet_last_visit |  date not null |
| pet_owner |  int not null |
| Primary key | pet_id |


## owner
(Las tablas pueden ser modificadas en un futuro ejercicio)

| columna  | valor  |
|---|---|
| owner_id |  int not null auto_increment |
| owner_name | varchar(30) not null |
| owner_phone | varchar(30) not null |
| owner_pet | varchar(150) not null |
| pet_last_visit |  date not null |
| pet_owner |  int not null |
| Primary Key | owner_id |

### datos para insertar en pet

```
INSERT INTO pet (pet_id, pet_name, pet_description, pet_picture, pet_last_visit, pet_owner) VALUES 
(1, 'Simón', 'El nene mimado', 'simon.jpg', '2019-12-28', 1),
(2, 'Hugo', 'Se cree piraña', 'hugo.jpg', '2019-10-20', 2),
(3, 'Felipe', 'Es es chico lindo del barrio', 'felipe.jpg', '2018-08-17', 3),
(4, 'Maggi', 'Es brava', 'maggi.jpg', '2019-02-20', 4),
(5, 'Rocco', 'Es muy inteligente', 'rocco.jpg', '2020-01-12', 5);
```

### datos para insertar en owner

```
INSERT INTO owner (owner_id, owner_name, owner_phone, owner_pet)
VALUES
(1, 'Cristian', 344332323, 1),
(2, 'Day', 323323233, 2),
(3, 'Ricky', 323233322, 3),
(4, 'Fer', 233309323, 4),
(5, 'Marina', 233489033, 5),
(6, 'Matias', 23324390, 2),
(7, 'Nico', 2438934340, 4),
(8, 'Nacho', 432490932, 1);
```