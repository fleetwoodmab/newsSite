import { c as create_ssr_component, a as compute_rest_props, l as setContext, o as createEventDispatcher, b as spread, m as escape_attribute_value, d as escape_object, k as add_attribute } from "./ssr.js";
import { twMerge } from "tailwind-merge";
import { d as derived, w as writable } from "./index.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const bgColors = {
  gray: "bg-gray-50 dark:bg-gray-800",
  red: "bg-red-50 dark:bg-gray-800",
  yellow: "bg-yellow-50 dark:bg-gray-800 ",
  green: "bg-green-50 dark:bg-gray-800 ",
  indigo: "bg-indigo-50 dark:bg-gray-800 ",
  purple: "bg-purple-50 dark:bg-gray-800 ",
  pink: "bg-pink-50 dark:bg-gray-800 ",
  blue: "bg-blue-50 dark:bg-gray-800 ",
  light: "bg-gray-50 dark:bg-gray-700",
  dark: "bg-gray-50 dark:bg-gray-800",
  default: "bg-white dark:bg-gray-800",
  dropdown: "bg-white dark:bg-gray-700",
  navbar: "bg-white dark:bg-gray-900",
  navbarUl: "bg-gray-50 dark:bg-gray-800",
  form: "bg-gray-50 dark:bg-gray-700",
  primary: "bg-primary-50 dark:bg-gray-800 ",
  orange: "bg-orange-50 dark:bg-orange-800",
  none: ""
};
const Frame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "tag",
    "color",
    "rounded",
    "border",
    "shadow",
    "node",
    "use",
    "options",
    "role",
    "transition",
    "params",
    "open"
  ]);
  const noop = () => {
  };
  setContext("background", true);
  let { tag = $$restProps.href ? "a" : "div" } = $$props;
  let { color = "default" } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { shadow = false } = $$props;
  let { node = void 0 } = $$props;
  let { use = noop } = $$props;
  let { options = {} } = $$props;
  let { role = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { params = {} } = $$props;
  let { open = true } = $$props;
  const dispatch = createEventDispatcher();
  const textColors = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  };
  const borderColors = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let divClass;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0) $$bindings.shadow(shadow);
  if ($$props.node === void 0 && $$bindings.node && node !== void 0) $$bindings.node(node);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0) $$bindings.use(use);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0) $$bindings.params(params);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  {
    dispatch(open ? "open" : "close");
  }
  {
    dispatch("show", open);
  }
  color = color ?? "default";
  {
    setContext("color", color);
  }
  divClass = twMerge(bgColors[color], textColors[color], rounded && "rounded-lg", border && "border", borderColors[color], shadow && "shadow-md", $$props.class);
  return `${transition && open ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        { role: escape_attribute_value(role) },
        escape_object($$restProps),
        { class: escape_attribute_value(divClass) }
      ],
      {}
    )}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${open ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        { role: escape_attribute_value(role) },
        escape_object($$restProps),
        { class: escape_attribute_value(divClass) }
      ],
      {}
    )}${add_attribute("this", node, 0)}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : ``}`} `;
});
const translations = {
  en: {
    "nav.contact": "Contact",
    "nav.dtcontact": "Detailed Contact Page",
    "nav.prsscontact": "Press Contact",
    "nav.data": "Data Protection",
    "nav.access": "Accessibility",
    "tabs.faq": "Search FAQs",
    "homepage.description": "GeoSphere Austria, the newly established Federal Institute for Geology, Geophysics, Climatology, and Meteorology, provides important foundations for the major challenges of our society. An important foundation is the systematic and sustainable processing and provision of data. The Department for Geoinformation contributes to fulfilling this task with these services.",
    "tethys.desc": "Through Tethys RDR, research data generated within the organisation is published as open data and in accordance with the FAIR principles."
  },
  de: {
    "nav.contact": "Kontakt",
    "nav.dtcontact": "Detaillirte Kontaktseite",
    "nav.prsscontact": "Presse Kontakte",
    "nav.data": "Datenschutz",
    "nav.access": "Barrierefreiheit",
    "tabs.faq": "FAQs durchsuchen",
    "homepage.description": "GeoSphere Austria, die neu gegründete Bundesanstalt für Geologie, Geophysik, Klimatologie und Meteorologie, liefert wichtige Grundlagen zu den großen Herausforderungen unserer Gesellschaft. Eine wichtige Grundlage ist die systematische und nachhaltige Verarbeitung und Bereitstellung der Daten. Das Department für Geoinformation trägt zur Erfüllung dieser Aufgabe mit diesen Services bei.",
    "tethys.desc": "Über Tethys RDR (tethys.at) werden innerhalb der Organisation generierte Forschungsdaten als open data und nach den FAIR Prinzipien veröffentlicht."
  }
};
const locale = writable("en");
const locales = Object.keys(translations);
function translate(locale2, key, vars) {
  if (!key) throw new Error("no key provided to $t()");
  if (!locale2) throw new Error(`no translation for key "${key}"`);
  let text = translations[locale2][key];
  if (!text) throw new Error(`no translation found for ${locale2}.${key}`);
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });
  return text;
}
const t = derived(
  locale,
  ($locale) => (key, vars = {}) => translate($locale, key, vars)
);
export {
  Frame as F,
  locales as a,
  is_void as i,
  locale as l,
  t
};
