# Proyecto: Challenge Educabot ✅

Breve README en español con instrucciones completas para instalar las herramientas, dependencias y ejecutar las pruebas automatizadas con Cypress.

---

## 🔧 Requisitos previos

- Node.js (recomendado: **LTS 18+**). Verifica con:

  ```bash
  node -v
  npm -v
  ```

- Git (opcional, si clonas el repo).
- Navegador (Chrome, Edge o Electron) para ejecución en modo headful.

> En Windows: puedes usar PowerShell o Terminal integrado de VS Code.

---

## 🧩 Dependencias principales

Este proyecto usa:

- `cypress` (>= 15.10.0) — framework de automatización.
- `cypress-mochawesome-reporter` — reporter para generar reportes HTML y JSON.

Las dependencias están definidas en `package.json`.

---

## 🚀 Instalación

1. Clona el repositorio (si aplica):

```bash
git clone <REPO_URL>
cd <repo-folder>
```

2. Instala dependencias:

```bash
npm install
```

> Si estás configurando desde cero en otra máquina: asegúrate de instalar Node.js y luego ejecutar `npm install`.

---

## 🧪 Scripts y comandos útiles

- Abrir la interfaz de Cypress (modo interactivo):

```bash
npm test
# (equivalente: npx cypress open)
```

- Ejecutar todos los tests en modo headless y usar el reporter (genera reportes en `cypress/reports`):

```bash
npm run test:report
# (equivalente: npx cypress run --reporter cypress-mochawesome-reporter)
```

- Ejecutar tests headless en un navegador concreto (p. ej. Chrome):

```bash
npx cypress run --headless --browser chrome
```

- Ejecutar un spec/test específico:

```bash
npx cypress run --spec "cypress/e2e/testCases/noHappyPath.cy.js"
```

---

## 📁 Estructura relevante del proyecto

- `cypress/e2e/testCases/` → archivos de pruebas (`*.cy.js`) (ej.: `happyPath.cy.js`, `noHappyPath.cy.js`).
- `cypress/support/pages/` → Page Objects (ej.: `LoginPage.js`, `ProductsPage.js`).
- `cypress/support/elements/` → selectores/elementos.
- `cypress/reports/` → reportes generados por `cypress-mochawesome-reporter` (contiene `index.html`).
- `cypress/screenshots/` → capturas al fallar.

---

## 📝 Configuración del reporter

En `cypress.config.js` ya está configurado `cypress-mochawesome-reporter` con `reportDir: 'cypress/reports'` y la línea de plugin:

```js
require("cypress-mochawesome-reporter/plugin")(on);
```

Además, en cada spec que genera reportes se importa el registro:

```js
import "cypress-mochawesome-reporter/register";
```

---

## 📊 Ver reportes

Después de ejecutar `npm run test:report` el reporte HTML se genera en:

```
cypress/reports/index.html
```

Ábrelo con un navegador para ver resultados y capturas.

---

## ✍️ Añadir/estructurar pruebas nuevas

- Crea un archivo `*.cy.js` en `cypress/e2e/testCases/`.
- Usa las páginas en `cypress/support/pages/` para mantener el patrón Page Object.
- Importa el reporter si quieres que la ejecución incluya screenshots incrustados y JSON/HTML:

```js
import "cypress-mochawesome-reporter/register";
```

---

## ⚙️ Integración en CI (ejemplo rápido)

En GitHub Actions puedes ejecutar algo como:

```yaml
- name: Run Cypress tests
  run: npm ci && npm run test:report
```

No olvides configurar artefactos si quieres subir `cypress/reports`.

---

## 🛠 Troubleshooting (común)

- Si falla la instalación: elimina `node_modules` y ejecuta `npm ci`.
- Si Cypress no encuentra navegador: instala Chrome/Edge o ejecuta con Electron (`--browser electron`).
- Problema con versiones de Node: instala una versión LTS (ej. 18) con nvm (o nvm-windows).

---

## 🤝 Contribuciones

1. Crea una rama nueva.
2. Añade tests/ajustes.
3. Abre un pull request describiendo cambios.

---

