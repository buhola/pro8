---
sidebar_position: 1
title : Configuración Inicial
---

# 🏨 Configuración Inicial: Módulo de Hoteles

Bienvenido al proceso de configuración del módulo de hoteles. Para asegurar un funcionamiento correcto del sistema de reservas y gestión, es fundamental seguir este orden lógico de implementación.

---

## 🚀 Flujo de Configuración
Siga estos pasos de manera secuencial para preparar su inventario:

### 1. Ubicaciones
Defina las áreas físicas donde se encuentran sus habitaciones. Esto permite organizar el inventario de forma jerárquica.
* **Ejemplos:** Piso 1, Torre A, Sector Jardín, Edificio Principal.
* 📘 [Guía detallada de Ubicaciones](./Ubicaciones.md)

### 2. Categorías
Clasifique sus habitaciones según sus características o nivel de servicio.
* **Ejemplos:** Suite Presidencial, Habitación Simple, Doble Twin, Matrimonial.
* 📘 [Guía detallada de Categorías](./Categorias.md)

### 3. Tarifas
Establezca los distintos esquemas de precios que aplicará a sus habitaciones. Recuerde que una misma categoría puede tener múltiples precios (ej. Tarifa Corporativa vs. Tarifa de Temporada).
* **Ejemplos:** Tarifa Estándar, Fin de Semana, Descuento Especial.
* 📘 [Guía detallada de Tarifas](./Tarifas.md)

### 4. Habitaciones
Este es el paso final donde se materializa la configuración. Aquí vinculará las ubicaciones y categorías, y asignará los precios definidos en el paso de **Tarifas**.
* 📘 [Guía detallada de Habitaciones](./Habitaciones.md)

---

## 🛠️ Herramientas de Gestión
Una vez creadas las habitaciones, dentro del listado principal tendrá acceso a herramientas de control rápido:

| Acción | Descripción |
| :--- | :--- |
| **Asignar Precios** | Configura los montos específicos para cada tarifa creada. |
| **Mantenimiento** | Inhabilita habitaciones temporalmente para evitar reservas. |
| **Edición** | Modifica detalles técnicos o nombres de habitación. |
| **Eliminación** | Remueve la habitación del sistema (solo si no tiene historial activo). |

:::tip Importante
Completar estos pasos en el orden indicado evitará errores de dependencia (por ejemplo, intentar crear una habitación sin haber definido primero su categoría o ubicación).
:::