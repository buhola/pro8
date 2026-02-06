# Mesas

## 1. Acceso al Módulo de Mesas

Para acceder al módulo de gestión de mesas, haga clic en el botón **"MESAS"** ubicado en la barra de navegación superior.

![Acceso al módulo de mesas](img/mesas_v4_1.png)

## 2. Vista Principal - Selector de Mesas

### 2.1 Descripción General

La vista principal muestra un grid con todas las mesas disponibles en el establecimiento, organizadas por pisos (Piso 01, Piso 02, etc.).

![Vista principal del selector de mesas](img/mesas_v4_1.png)

## 3. Selección de Mesa

### 3.1 Seleccionar una Mesa Disponible

Para seleccionar una mesa disponible:

1. Haga clic sobre la mesa deseada
2. La mesa se resaltará con un borde verde

![Selección de mesa](img/mesas_v4_13.png)

### 3.2 Gestión Individual de Mesas

#### 1. Abrir Mesa

1. En el panel derecho se mostrará la información de la mesa:
   - **Número de mesa y Piso**
   - **1. Personas en la mesa**: Campo editable
   - **2. Cliente**: Campo para ingresar nombre del cliente
   - **3. Mozo**: Selector de mozo asignado
   - **4. Comentarios**: Área de texto para observaciones

![Panel de información de la mesa](img/mesas_v4_14.png)

2. Complete la información requerida
3. Haga clic en **"Abrir mesa"** para activarla

#### 2. Opciones de Visualización

En la parte superior del módulo puede configurar qué tipo de mesas mostrar:

![Filtros de visualización](img/mesas_v4_12.png)

- **Disponibles**: Mostrar mesas libres
- **Ocupadas**: Mostrar mesas en uso
- **Fuera de servicio**: Mostrar mesas no disponibles

## 4. Mover Mesa a Otro Ambiente

### 4.1 Iniciar el Proceso de Traslado

Cuando necesite reubicar una mesa a otro ambiente (piso):

1. Seleccione la mesa que desea mover
2. Aparecerá un icono de traslado
3. Haga clic en **"Mover a otro ambiente"**

![Opción de mover mesa](img/mesas_v4_5.png)

### 4.2 Confirmar el Traslado

Se abrirá un modal con las siguientes opciones:

![Modal de confirmación de traslado](img/mesas_v4_6.png)

- **DESDE**: Muestra el piso y mesa de origen (Piso 01 - Mesa 18)
- **HACIA**: Seleccione el ambiente destino usando el dropdown
- **Seleccionar Ambiente**: Elija el piso de destino (ej. Piso 02)

Haga clic en **"Confirmar"** para completar el traslado, o **"Cancelar"** para abortar la operación.

### 4.3 Resultado del Traslado

Una vez confirmado el traslado, la mesa será movida al nuevo ambiente y el sistema actualizará automáticamente el estado.

## 5. Editar Configuración de Mesa

### 5.1 Acceder a la Edición

Para modificar la configuración de una mesa:

1. Haga clic en el botón **"Editar mesas"**
2. Seleccione la mesa a editar

![Opción editar mesas](img/mesas_v4_2.png)

### 5.2 Filtros de Visualización

En la parte superior se encuentran las opciones de filtrado:

![Filtros de visualización](img/mesas_v4_15.png)

- **Mozo**: Filtrar mesas por mozo asignado
- **Tiempo**: Filtrar por tiempo de ocupación
- **N° Pedidos**: Filtrar por cantidad de pedidos
- **Monto**: Filtrar por monto acumulado
- **Personas**: Filtrar por cantidad de personas

### 5.3 Estados de las Mesas

Las mesas se identifican visualmente según su estado:

![Estados de las mesas](img/mesas_v4_16.png)

- **Verde con check (✓)**: Mesa disponible
- **Gris con check (✓)**: Mesa ocupada (no se puede desactivar)
- **Círculo con línea**: Mesa fuera de servicio
- **Patrón de cuadros**: Mesa reubicada

### 5.4 Opciones de Mesa

![Opciones de mesa](img/mesas_v4_17.png)

Al hacer clic derecho sobre una mesa, se desplegará un menú contextual con las siguientes opciones:

- **Nombre**: Permite modificar el nombre de la mesa
- **Forma**: Permite cambiar la forma de la mesa entre **Cuadrada** y **Redonda**

![Forma de la mesa](img/mesas_v4_4.png)

## 6. Unir Mesas

### 6.1 Seleccionar Mesas para Unir

Para unir múltiples mesas:

1. Seleccione la primera mesa haciendo clic sobre ella
2. Mantenga presionada la tecla Ctrl (o Cmd en Mac)
3. Seleccione las mesas adicionales que desea unir
4. Las mesas seleccionadas se resaltarán con un borde punteado

![Proceso de unión de mesas](img/mesas_v4_10.png)

### 6.2 Confirmar la Unión

1. Aparecerá un banner naranja en la parte superior indicando:
   - **"Uniendo Mesa 5"**
   - **"Selecciona las mesas secundarias (3 seleccionadas)"**
2. En el panel derecho se mostrará la sección **"Mesas unidas"** con la lista de mesas seleccionadas
3. Haga clic en **"Confirmar unión"** para completar el proceso

![Confirmar unión](img/mesas_v4_11.png)

4. Si desea cancelar, haga clic en **"Cancelar"**

### 6.3 Visualización de Mesa Unida

![Vista de mesa unida](img/mesas_v4_18.png)

Una vez unidas, las mesas se mostrarán agrupadas con el identificador compuesto (ej. "MESA 8 + 3 + 7").

## 7. Opciones Contextuales de Mesa

### 7.1 Menú de Acciones

Al hacer clic derecho sobre una mesa ocupada, se desplegará un menú contextual con las siguientes opciones:

- **Unir mesas**: Permite unir la mesa actual con otras mesas
- **Editar mesa**: Abre el modal de edición de configuración

### 7.2 Estados Visuales de las Mesas

#### 7.2.1 Leyenda de Colores

- 🟢 **Verde claro**: Mesa disponible
- 🟧 **Naranja**: Mesa con órdenes servidas
- 🟥 **Rojo/Rosa**: Mesa con órdenes pendientes
- 🟦 **Azul**: Frecuenta generada
- ⬜ **Gris**: Mesa fuera de servicio
- 🟩 **Verde oscuro**: Mesa ocupada sin pedidos
- 🔲 **Patrón de cuadros**: Mesa reubicada

#### 7.2.2 Información Adicional en las Mesas

Las mesas ocupadas muestran información relevante:

- **Mozo asignado**: Icono de persona con nombre
- **Tiempo de ocupación**: Reloj con tiempo transcurrido (ej. "43m", "45m")
- **Número de pedidos**: Cantidad de órdenes (ej. "🍴 1")
- **Monto acumulado**: Total de la cuenta (ej. "S/ 51.20", "S/ 90.70")

### 7.3 Botón "Editar mesas"

El botón verde **"Editar mesas"** en la esquina superior derecha permite acceder rápidamente al modo de edición para modificar la configuración de las mesas del establecimiento.

### Notas Importantes

- Las mesas ocupadas no pueden ser desactivadas hasta que se cierre la cuenta
- Al unir mesas, se combinan los pedidos y el monto total
- Los cambios en la configuración de mesas se reflejan inmediatamente en el sistema
- El tiempo de ocupación se actualiza en tiempo real
