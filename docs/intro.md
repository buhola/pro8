---
title: Sistema de Facturación Pro 8
description: "Sistema de Facturación Pro 8: Solución completa de facturación electrónica para empresas peruanas que cumple con los requisitos de SUNAT."
slug: /
sidebar_position: 0
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Sistema de Facturación Pro 8

<head>
  <title>Sistema de Facturación Pro 8 - Facturalo Perú</title>
  <meta
    name="description"
    content="Sistema de Facturación Pro 8: Solución completa de facturación electrónica para empresas peruanas que cumple con los requisitos de SUNAT."
  />
</head>

## Introducción

Pro 8 es un sistema completo de facturación electrónica diseñado específicamente para cumplir con los requerimientos fiscales de SUNAT en Perú. Nuestra plataforma permite emitir comprobantes electrónicos de manera eficiente, gestionar inventarios, controlar ventas y administrar tu negocio desde cualquier dispositivo.

Comienza ahora siguiendo nuestra [Guía de Configuracion esencial para tu cuenta](../docs/guias-adicionales/Configuracion/01-Configuracion-esencial-para-tu-cuenta-de-facturacion.md) o explorando las funcionalidades principales del sistema.

<DocsCards>
  <DocsCard 
    header="Guía de Despliegue"
    href="despliegue"
  >
    <p>Guías paso a paso para configurar e instalar el Sistema de Facturación Pro 8.</p>
  </DocsCard>

<DocsCard
header="Aplicación para Facturación"
href="app-facturacion"

>

    <p>Manual del aplicativo móvil del sistema de facturación.</p>

  </DocsCard>

<DocsCard
header="Manuales Adicionales"
href="manuales-adicionales"

>

    <p>Guía de configuraciones del sistema, para los procesos de configuración primarios.</p>

  </DocsCard>

<DocsCard
header="Mozo APP"
href="mozo"

>

    <p>Encuentra ayuda sobre nuestra aplicación Mozo, una extensión del sistema Pro 8 diseñada para restaurantes.</p>

  </DocsCard>
</DocsCards>

## Descripción General

Pro 8 se enfoca en proporcionar un sistema de facturación electrónica completo y fácil de usar, permitiendo a las empresas peruanas cumplir con las normativas de SUNAT mientras optimizan sus procesos de venta e inventario. La plataforma está diseñada para ser accesible desde múltiples dispositivos, incluyendo computadoras de escritorio, tablets y smartphones.

## Funcionalidades Principales

- **Facturación Electrónica:** Emite comprobantes electrónicos como facturas, boletas, notas de venta, etc. cumpliendo con los requisitos de SUNAT.
- **Gestión de Inventarios:** Controla el stock de productos en tiempo real, con opciones avanzadas como búsqueda por serie y precios por almacén.
- **Punto de Venta (POS):** Optimiza las ventas con funcionalidades como impresión automática de comprobantes y búsqueda con escáner de códigos de barras.
- **Reportes Financieros:** Genera reportes detallados para analizar el rendimiento de tu negocio.
- **Gestión de Usuarios:** Configura permisos y roles para cada usuario según las necesidades de tu empresa.
- **Multi-Tenancy:** Soporte para múltiples empresas en una sola instalación.

## Enfoque en el Rendimiento

Pro 8 está construido para funcionar de manera óptima incluso en situaciones de alta demanda, con transiciones eficientes y una interfaz táctil optimizada para dispositivos móviles.

## Diseño Limpio, Simple y Funcional

Nuestro sistema presenta una interfaz de usuario intuitiva y moderna que facilita su uso por parte de cualquier miembro de tu equipo. Con componentes prediseñados y una estructura visual coherente, la curva de aprendizaje es mínima.

### Optimizado para Web y Dispositivos Móviles

Pro 8 funciona perfectamente en navegadores web y como aplicación móvil, adaptándose a las necesidades de tu negocio y permitiéndote trabajar desde cualquier lugar.

## Tecnologías

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" width="20" height="20" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Laravel y PHP

El sistema utiliza **Laravel 9.0**, un framework de PHP conocido por su elegancia y simplicidad. Laravel permite un desarrollo rápido gracias a características como Eloquent ORM, migraciones de base de datos y un sistema de enrutamiento robusto. **PHP 8.0+** ofrece mejoras significativas en rendimiento, JIT compilation y nuevas características como tipos union y atributos nativos.

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="20" height="20" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> MySQL

Para la base de datos, el sistema utiliza **MySQL 8.0**, una versión moderna y de alto rendimiento que ofrece mejoras significativas en velocidad de consultas, soporte JSON mejorado y características avanzadas como window functions. MySQL permite manejar grandes volúmenes de datos y consultas complejas, ideal para aplicaciones de facturación empresarial.

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="20" height="20" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Vue.js 2

El sistema aprovecha **Vue 2.6.14**, una biblioteca de JavaScript moderna y progresiva que facilita la creación de interfaces de usuario interactivas. Vue 2 se integra perfectamente con Laravel, permitiendo construir aplicaciones dinámicas y reactivas con un ecosistema robusto de componentes.

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="20" height="20" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Bootstrap 5

La interfaz de usuario está construida con **Bootstrap 5.3.7**, proporcionando un diseño responsive y componentes UI modernos que garantizan una experiencia consistente en todos los dispositivos, con mejoras en personalización y rendimiento.

### ⚡ Vite

Pro 8 utiliza **Vite 4.4** como herramienta de build moderna, reemplazando Laravel Mix para ofrecer tiempos de compilación ultra-rápidos, Hot Module Replacement instantáneo y una experiencia de desarrollo significativamente mejorada.

### 📊 Chart.js

Para la visualización de datos y reportes, el sistema integra **Chart.js 2.7**, permitiendo crear gráficos interactivos y dashboards informativos que facilitan el análisis del negocio en tiempo real.

### 🔐 Librerías de Seguridad

El sistema implementa **XMLSecLibs 3.1** para garantizar la firma digital y seguridad de los documentos electrónicos conforme a los estándares de SUNAT, asegurando la integridad y autenticidad de cada comprobante.

### 📄 Generación de PDFs

Pro 8 integra múltiples soluciones para la generación de documentos:

- **DomPDF 2.0**: Generación de PDFs desde HTML
- **mPDF 8.0**: PDFs avanzados con soporte completo para UTF-8 y diseños complejos
- **FPDF/FPDI**: Manipulación y generación de PDFs de alto rendimiento

### 🏢 Multi-Tenancy

Implementa **Hyn Multi-Tenant 5.8** para soporte robusto de múltiples empresas, permitiendo aislar datos y configuraciones de forma segura en una sola instalación.

### 📊 Manejo de Datos

- **Maatwebsite Excel 3.1**: Importación y exportación de archivos Excel
- **Papa Parse**: Procesamiento eficiente de archivos CSV
- **XML2JS**: Procesamiento de documentos XML para integración con SUNAT

### 💳 Integraciones de Pago

- **Culqi PHP 1.3.4**: Integración con pasarela de pagos Culqi
- **Mercado Pago DX PHP 2.5**: Soporte completo para pagos con Mercado Pago

### 🖨️ Impresión y Códigos

- **QZ Tray 2.2**: Impresión directa desde el navegador sin diálogos
- **Picqer Barcode Generator 2.2**: Generación de códigos de barras en múltiples formatos
- **mPDF QRCode 1.2**: Generación de códigos QR para comprobantes

### 🔧 Herramientas de Desarrollo

- **Composer**: Gestión de paquetes PHP
- **NPM**: Gestión de paquetes JavaScript
- **Laravel Debugbar 3.6**: Herramienta de debugging para desarrollo
- **Laravel Dusk 7.0**: Testing automatizado del navegador

### 📦 Librerías Adicionales

- **Guzzle HTTP 7.2**: Cliente HTTP moderno para integraciones API
- **Intervention Image 2.7**: Procesamiento y manipulación de imágenes
- **Moment.js 2.22**: Manipulación y formato de fechas
- **Lodash 4.17**: Utilidades JavaScript de alto rendimiento
- **Element UI 2.13**: Componentes Vue.js empresariales
- **Socket.io Client 4.5**: Comunicación en tiempo real
- **Vuex 3.6**: Gestión de estado centralizada

## Compatibilidad con Ecosistema

Pro 8 es compatible con **VendeYa.pe** y **Mozo.pe**, ampliando sus capacidades para adaptarse a diferentes necesidades comerciales y puntos de venta.

## Comunidad

Pro 8 es desarrollado y mantenido activamente por un equipo central, y su ecosistema está guiado por una comunidad de desarrolladores y contribuyentes que impulsan su crecimiento y adopción. Empresas de todos los tamaños utilizan Pro 8 para gestionar sus operaciones de facturación electrónica en Perú.
