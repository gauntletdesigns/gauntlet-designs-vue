import Vue from "vue";

import {
  // Layout
  BContainer,
  BRow,
  BCol,
  BCollapse,

  // Nav
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavbarToggle,
  BNavItem,
  BImg,
  BButton,

  // Form
  BForm,
  BFormGroup,
  BFormInput,
  BFormTextarea,

  // Icons
  BIconCodeSlash,
  BIconPencil,
  BIconCloud,
} from "bootstrap-vue";
import "../custom-vars.scss";

Vue.component("b-container", BContainer);
Vue.component("b-navbar", BNavbar);
Vue.component("b-navbar-brand", BNavbarBrand);
Vue.component("b-navbar-toggle", BNavbarToggle);
Vue.component("b-navbar-nav", BNavbarNav);
Vue.component("b-nav-item", BNavItem);
Vue.component("b-img", BImg);
Vue.component("b-btn", BButton);
Vue.component("b-button", BButton);
Vue.component("b-collapse", BCollapse);
Vue.component("b-row", BRow);
Vue.component("b-col", BCol);
Vue.component("b-form", BForm);
Vue.component("b-form-group", BFormGroup);
Vue.component("b-form-input", BFormInput);
Vue.component("b-form-textarea", BFormTextarea);

Vue.component("b-icon-code-slash", BIconCodeSlash);
Vue.component("b-icon-pencil", BIconPencil);
Vue.component("b-icon-cloud", BIconCloud);
