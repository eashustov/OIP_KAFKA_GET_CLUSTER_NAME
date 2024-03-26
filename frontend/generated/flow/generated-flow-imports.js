import '@vaadin/polymer-legacy-adapter/style-modules.js';
import '@vaadin/login/src/vaadin-login-form.js';
import '@vaadin/vertical-layout/src/vaadin-vertical-layout.js';
import 'Frontend/generated/jar-resources/flow-component-renderer.js';
import 'Frontend/generated/jar-resources/vaadin-grid-flow-selection-column.js';
import '@vaadin/text-field/src/vaadin-text-field.js';
import '@vaadin/checkbox/src/vaadin-checkbox.js';
import '@vaadin/icons/vaadin-iconset.js';
import '@vaadin/date-picker/src/vaadin-date-picker.js';
import 'Frontend/generated/jar-resources/datepickerConnector.js';
import '@vaadin/app-layout/src/vaadin-app-layout.js';
import '@vaadin/tooltip/src/vaadin-tooltip.js';
import '@vaadin/app-layout/src/vaadin-drawer-toggle.js';
import '@vaadin/icon/src/vaadin-icon.js';
import '@vaadin/context-menu/src/vaadin-context-menu.js';
import 'Frontend/generated/jar-resources/contextMenuConnector.js';
import 'Frontend/generated/jar-resources/contextMenuTargetConnector.js';
import '@vaadin/horizontal-layout/src/vaadin-horizontal-layout.js';
import '@vaadin/grid/src/vaadin-grid.js';
import '@vaadin/grid/src/vaadin-grid-column.js';
import '@vaadin/grid/src/vaadin-grid-sorter.js';
import 'Frontend/generated/jar-resources/gridConnector.js';
import '@vaadin/button/src/vaadin-button.js';
import 'Frontend/generated/jar-resources/buttonFunctions.js';
import 'Frontend/generated/jar-resources/menubarConnector.js';
import '@vaadin/menu-bar/src/vaadin-menu-bar.js';
import '@vaadin/grid/src/vaadin-grid-column-group.js';
import 'Frontend/generated/jar-resources/lit-renderer.ts';
import '@vaadin/common-frontend/ConnectionIndicator.js';
import '@vaadin/vaadin-lumo-styles/color-global.js';
import '@vaadin/vaadin-lumo-styles/typography-global.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';

const loadOnDemand = (key) => {
  const pending = [];
  if (key === '0c95f3cdce7241304459a57ce766be6559b6671056301450ff3a4c79e012d61d') {
    pending.push(import('./chunks/chunk-a32785e336d838916b338cfd8a4755fdc42384b1fff16f16f4cb38d7fad8959f.js'));
  }
  if (key === 'ad6be10b621c50295edae0a06e672c2e11b27baff6edaf8c67a247ebb02a6b3c') {
    pending.push(import('./chunks/chunk-a32785e336d838916b338cfd8a4755fdc42384b1fff16f16f4cb38d7fad8959f.js'));
  }
  if (key === 'ef897d19a6afa605acf7abb2f776c4a20147d1f167a6a7dad94d5c8381aa3176') {
    pending.push(import('./chunks/chunk-a32785e336d838916b338cfd8a4755fdc42384b1fff16f16f4cb38d7fad8959f.js'));
  }
  if (key === '6ce692f96c0b0ac3eb057b19e4189078eb8509a0c15d323d38f9b04c04fbf2f9') {
    pending.push(import('./chunks/chunk-c11e2fc4985719fefdf07abf846ea50d7ebe4908fb4930336043f3edae039915.js'));
  }
  return Promise.all(pending);
}

window.Vaadin = window.Vaadin || {};
window.Vaadin.Flow = window.Vaadin.Flow || {};
window.Vaadin.Flow.loadOnDemand = loadOnDemand;
window.Vaadin.Flow.resetFocus = () => {
 let ae=document.activeElement;
 while(ae&&ae.shadowRoot) ae = ae.shadowRoot.activeElement;
 return !ae || ae.blur() || ae.focus() || true;
}