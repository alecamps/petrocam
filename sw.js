const CACHE_NAME = 'petrocam-v20'; // Modificado: Incremento de versión para forzar actualización de caché offline global
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './img/Logo_app.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  
  // IMÁGENES DEL MENÚ
  './img/fichas.jpg',
  './img/procedimientos.jpg',
  './img/politicas.jpg',
  './img/informacion.jpg',
  './img/gato.jpg',

  /* Modificado: Todas las rutas de almacenamiento apuntan ahora a ./assets/ */
  // DOCUMENTOS PDF
  './assets/ABC3010 - PQB.pdf',
  './assets/AQCUAR - Dupont.pdf',
  './assets/BIOTREAT 16207 - Clariant.pdf',
  './assets/BISULFITO DE AMONIO - Clariant.pdf',
  './assets/BLX-16158 - Buckman.pdf',
  './assets/BW-6033 - Multi-Chem - Halliburton.pdf',
  './assets/BX707 - PECOM.pdf',
  './assets/BX936 - PECOM.pdf',
  './assets/BXC2070 - PECOM.pdf',
  './assets/DBC4070 - PQB.pdf',
  './assets/DBC4878 - PECOM.pdf',
  './assets/DBC4927 - PQB.pdf',
  './assets/DBC4949 - PQB.pdf',
  './assets/DEFOAMER AF-177 - Champion.pdf',
  './assets/DEMTROL D-7623 - PBBPOLISUR.pdf',
  './assets/DISMULGAN V 3377 - Clariant.pdf',
  './assets/DISSOLVAN M - Clariant.pdf',
  './assets/DODISCALE 435 - Clariant.pdf',
  './assets/DPB66 - PQB.pdf',
  './assets/EC2561A - ChampionX.pdf',
  './assets/EC6785A - ChampionX.pdf',
  './assets/ECI 600 - WEZOL.pdf',
  './assets/EMBR18373A - ChampionX.pdf',
  './assets/FBS1747 - PECOM.pdf',
  './assets/FBS2021 - PECOM.pdf',
  './assets/FLEXOIL FM-116 - Nalco.pdf',
  './assets/FLOCTREAT 14107 - Clariant.pdf',
  './assets/FLOCTREAT 15499 - Clariant.pdf',
  './assets/FOAMATRON VDF-138 - Champion.pdf',
  './assets/FONGRAFLOC 030 - Clariant.pdf',
  './assets/GYPTRON TA-70 - ChampionX.pdf',
  './assets/H-100 - Clariant.pdf',
  './assets/HASA N - Clariant.pdf',
  './assets/HASA P 628.pdf',
  './assets/ICS400 - PECOM.pdf',
  './assets/IPC3551 - PECOM.pdf',
  './assets/MC MX 1-4186 - Multi-Chem - Halliburton.pdf',
  './assets/MC MX 1-4188 - Multi-Chem - Halliburton.pdf',
  './assets/MC MX 2-5819 - Multi-Chem - Halliburton.pdf',
  './assets/MC MX 6-2960 - Multi-Chem - Halliburton.pdf',
  './assets/MC MX 6-3469 - Multi-Chem - Halliburton.pdf',
  './assets/MC MX 6-3837 - Multi-Chem - Halliburton.pdf',
  './assets/MC MXC 6-3931 - Multi-Chem - Halliburton.pdf',
  './assets/Metanol - Ladco.pdf',
  './assets/Multisweet M-8055 - Multi-Chem - Halliburton.pdf',
  './assets/NALCO EC2561A - Nalco.pdf',
  './assets/NALCO EC6785A - Nalco.pdf',
  './assets/NORFLOC 17561 - Norken.pdf',
  './assets/NORFLOC PA - Norken.pdf',
  './assets/PERMATREAT PC-510 - Nalco.pdf',
  './assets/PROSOLV HS8786 - SUEZ.pdf',
  './assets/RECO RE733 - RECO.pdf',
  './assets/RECO RF4700 - RECO.pdf',
  './assets/RECO RF4800 - RECO.pdf',
  './assets/RT903SP - PECOM.pdf',
  './assets/SCAL10075B - Nalco.pdf',
  './assets/SCAL16157A EXP - ChampionX.pdf',
  './assets/SCAL16555A - Nalco.pdf',
  './assets/SCAL16762A - Nalco.pdf',
  './assets/SCI-FOAM EC7016A - ChampionX.pdf',
  './assets/SDS AE 650 - WEZOL.pdf',
  './assets/SEQUEST OS 40 - Clariant.pdf',
  './assets/SODA CAUSTICA - Clariant.pdf',
  './assets/SURFATRON DN-155 - ChampionX.pdf',
  './assets/TROSKIL 2415B - Clariant.pdf',
  './assets/UALCO EC6630A - Nalco.pdf',
  './assets/WSW3001 - Baker Petrolite.pdf',
  './assets/PO.02 Reposicion de productos quimicos Rev.08.pdf',
  './assets/PO.03 Bacheo con productos quimicos e pozos e Instalaciones de produccion REV05.pdf',
  './assets/PO.13 Respuesta ante contingencias DyRPQ REV01.pdf',
  './assets/PO.14 Tareas en presencia de sulfhidrico SH2 REV02.pdf',
  './assets/PO.41 Operaciones con Hidrogrua.pdf',
  './assets/PO.42 Limites de Velocidad para la Conduccion Segura.pdf',
  './assets/Calidad, Ambiente, Salud y Seguridad Ocupacional Rev.03 - 2021.pdf',
  './assets/Mision, Vision y Valores Rev.02 - 2021.pdf',
  './assets/Politica Cero Alcohol y Drogas Rev.02 - 2021.pdf',
  './assets/Politica Vehicular Rev.01 - 2021.pdf',
  './assets/Politica Ambiental Rev.08 - 2016.pdf',
  './assets/Politica de Operacion Sustentable y Calidad Rev.07 - 2022.pdf',
  './assets/Politica de Suspension de Tareas Rev.02 - 2022.pdf',
  './assets/Horario nocturno 2026.pdf',
  './assets/Mapa de Cerro Dragon y alrededores.pdf',
  './assets/Plan de Contingencia - Rev.14.pdf',
  './assets/Suspension de tareas.pdf',
  './assets/Velocidades maximas.pdf',
  './assets/IC5400 - PECOM.pdf',
  './assets/IC5405 - PECOM.pdf',
  './assets/PROSOLV BI9495L - VEOLIA.pdf',
  './assets/PROSOLV OS8702 - VEOLIA.pdf',
  './assets/RBW-111 - Baker Hughes.pdf',
  './assets/Pictogramas SGA.pdf',
  './assets/Reglas que salvan vidas - Afiche PAE.pdf',
  './assets/Reglas que salvan vidas - PAE.pdf',
  './assets/Instructivo- Nueva PRP Contratistas.pdf',
  './assets/Modelo - Batcheo de Producto Quimico.pdf',
  './assets/Modelo - Carga y Transporte de Producto Quimico.pdf',
  './assets/Modelo - Reposicion con hidrogrua.pdf',
  './assets/Modelo - Reposicion de Producto Quimico.pdf',
  './assets/PAE-GSV-ES 001 Seguridad vial.pdf',
  './assets/PAE-SAF-PG-005 Espacios Confinados.pdf',
  './assets/PAE-SAF-PG-008 Equipos, EPP y ropa de trabajo.pdf',
  './assets/PAE-SAF-PG-009 Sistema de Permisos de Trabajo.pdf',
  './assets/PAE-SAF-PG-012 Trabajos en Altura.pdf',
  './assets/PAE-SAF-PG-013 Levantamiento de Cargas.pdf',
  './assets/PAE-SAF-PG-013.01 Plan de Izaje Grua Hidrogrua.pdf',
  './assets/PAE-SAF-PG-021 Caida de objetos.pdf',
  './assets/PAE-SAF-PG-022 Excavaciones y movimiento de suelos.pdf',

  // Modificación: Rutas de los nuevos PDFs agregados en assets/ para el soporte offline
  './assets/NORFLOC F30 - Norken.pdf',
  './assets/PROSOLV BI8803 - VEOLIA.pdf',
  './assets/PROSOLV CI8077L - VEOLIA.pdf',
  './assets/PROSOLV WCI8062 - VEOLIA.pdf',
  './assets/GRE 2024.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});