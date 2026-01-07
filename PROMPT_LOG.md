# PROMPT LOGS

##  0. Instalación de dependencias

**Prompt:** 

```bash
Dame el paso a paso para realizar la instalación de lo siguiente: 
1. Instalación de next.js, junto con las siguientes librerías: 
    - app router 
    - typescript 
    - tailwind 
    -react (última versión) 
    -react-markdown, rehype-sanitize 
    -lucide icons
```
## 1. Creación hardcoded data.json

**Prompt:**

```bash
Estoy creando una aplicación con next.js, esta aplicación es Block-Based Page Builder. Esta aplicación es Headless CMS y necesito que el archivo data.json contenga la siguiente estructura:

- Hero Section: título, subtítulo, imagen de fondo (URL), botón (texto y URL)
- About Section: título, descripción, imagen (URL)
- Services Section: una lista de servicios, cada uno con título, descripción e ícono (
URL)
- Pricing Section: una lista de planes, cada uno con nombre del plan, precio, lista de características (3 tipos de planes)
- Contact Section: dirección, teléfono, correo electrónico, formulario de contacto (nombre, correo electrónico, mensaje)

Genera un archivo data.json con datos de ejemplo para cada una de estas secciones. Las imágenes serán cargadas desde la carpeta public/ de next.js. Para el ejemplo usa URLs ficticias como /images/hero-bg.jpg, /images/about.jpg, /images/service1-icon.png, etc. La temática de la página es una agencia digital radicada en colombia y maneja valores en dólares.

Asegúrate de que el JSON sea un array de objetos donde cada objeto tenga la propiedad type (ej: 'hero', 'about') y la propiedad props (que contenga todos los campos de esa sección). Esto me facilitará el mapeo dinámico en el componente PageBuilder.
```

## 2. Creación de las interfases de typescript y PageBuilder.tsx

**Prompt:**

```bash
Basado en el archivo data.json, genera las interfaces de TypeScript y necesito que creas un componente central llamado PageBuilder.tsx en Next.js (App Router).

Requerimientos técnicos:
 
 - Crea un objeto constante llamado COMPONENTS_MAP que relacione los 'types' del JSON (hero, about, services, etc.) con sus componentes correspondientes.

 - El PageBuilder debe recibir el array de datos y usar un .map() para renderizar los componentes dinámicamente, pasando las props de forma desestructurada.

 - Implementa un componente de Fallback ( UnknownComponent). Si el type en el JSON no existe en nuestro mapa, el PageBuilder debe mostrar este componente de aviso en lugar de romper la aplicación.

 - Asegúrate de que el código sea 'Clean Code', usando TypeScript para validar que las props pasadas a cada componente sean las correctas.

```

## 3. Creación de los componentes individuales

**Prompt:**

```bash 
Crea los componentes individuales para cada sección del PageBuilder en Next.js (App Router) usando TypeScript y Tailwind CSS. Los componentes son:

- HeroSection: title, subtitle, backgroundImage (URL), button (text and URL)
- AboutSection: title, description, image (URL)
- ServicesSection: una lista de servicios, cada uno con título, descripción e ícono (URL)
- PricingSection: una lista de planes, cada uno con nombre del plan, precio, lista de características (3 tipos de planes)
- ContactSection: dirección, teléfono, correo electrónico, formulario de contacto (nombre, correo electrónico, mensaje)

Requerimientos técnicos:
- Cada componente debe recibir sus props de forma desestructurada.
- Usa Tailwind CSS para el diseño y asegúrate de que cada sección sea responsiva.
- Implementa validaciones de TypeScript para las props de cada componente.  
- Usa imágenes desde la carpeta public/ de Next.js.
- Asegúrate de que el código sea 'Clean Code' y fácil de mantener.
```

## 4. Pruebas 

**Prompt:**

```bash
Genera una suite de pruebas unitarias usando Vitest y React Testing Library que valide lo siguiente:

- Verifica que si el JSON tiene un tipo válido ('hero', 'about', 'services', 'pricing', 'contact'), se renderice el componente correcto con sus props.
- Crea un test específico para el escenario de 'Unknown Component Type'. Si el JSON solicita un componente que no existe en mi COMPONENTS_MAP (por ejemplo, type: 'slider'), la aplicación no debe romperse. El test debe verificar que, en su lugar, se renderice mi componente UnknownComponent.
- Por favor, utiliza vi.mock para simular los componentes de bloque (Hero, About, Services, Pricing, Contact) y así probar únicamente la lógica de decisión del PageBuilder.
- Asume que uso archivos .tsx y proporciona también los comandos necesarios para instalar las dependencias de testing si no las tuviera.
```

## 5. Dockerización

**Prompt:**

```bash
He terminado mi proyecto de Next.js (App Router) y ahora necesito desplegarlo usando Docker. Por favor, genera los siguientes archivos con estas especificaciones:

- Utiliza una estructura de Multi-stage build (instalar, construir y ejecutar) basada en la imagen node:18-alpine o superior para optimizar el tamaño. Asegúrate de configurar la salida como standalone y de exponer el puerto 3000.
- Crea un archivo sencillo que levante el contenedor de la aplicación, asigne el nombre del servicio como headless-cms-app y mapee el puerto 3000 de mi máquina local al 3000 del contenedor.
- Incluye una lista de archivos que deben ignorarse (como node_modules, .next, README.md y archivos de Git) para no ralentizar la construcción de la imagen.
- Dame los comandos exactos para construir la imagen y levantar el contenedor desde la terminal.

```