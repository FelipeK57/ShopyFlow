Usuarios
----------
UserID (PK)
Nombre
Email
Dirección
Teléfono
Contraseña
FechaRegistro

Productos
----------
ProductoID (PK)
Nombre
Descripción
CategoríaID (FK)
ImagenURL

Categorías
----------
CategoríaID (PK)
Nombre
Descripción

Tamaños
----------
SizeID (PK)
Nombre

Colores
----------
ColorID (PK)
Nombre
CódigoHexadecimal

ProductoDetalles
----------
ProductoID (PK, FK)
SizeID (PK, FK)
ColorID (PK, FK)
Stock
Precio

Ofertas
----------
OfferID (PK)
Descripción
Descuento
FechaInicio
FechaFin

ProductoOfertas
----------
ProductoID (PK, FK)
OfferID (PK, FK)

Pedidos
----------
PedidoID (PK)
UserID (FK)
FechaPedido
Total
Estado

OrderDetails
----------
PedidoID (PK, FK)
ProductoID (FK)
SizeID (FK)
ColorID (FK)
Cantidad
PrecioUnitario

Carrito de Compras
----------
CarritoID (PK)
UserID (FK)
FechaCreación

CartDetails
----------
CarritoID (PK, FK)
ProductoID (FK)
SizeID (FK)
ColorID (FK)
Cantidad