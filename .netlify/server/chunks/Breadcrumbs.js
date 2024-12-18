import { c as create_ssr_component, a as compute_rest_props, g as getContext, b as spread, m as escape_attribute_value, d as escape_object, e as escape, v as validate_component, k as add_attribute, q as compute_slots, o as createEventDispatcher, h as get_store_value, j as each, s as subscribe, t as null_to_empty } from "./ssr.js";
import { A as Accordion, a as AccordionItem, b as AngleUpOutline, c as AngleDownOutline } from "./AngleUpOutline.js";
import { l as locale, t } from "./i18n.js";
import clsx from "clsx";
import { W as Wrapper } from "./Wrapper.js";
import { twMerge } from "tailwind-merge";
import { p as page } from "./stores.js";
const ToolbarButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "name", "ariaLabel", "size", "href"]);
  let { color = "default" } = $$props;
  let { name = void 0 } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { size = "md" } = $$props;
  let { href = void 0 } = $$props;
  const background = getContext("background");
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400 hover:bg-gray-100"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  buttonClass = twMerge(
    "focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "dark:hover:bg-gray-600" : "dark:hover:bg-gray-700"),
    $$props.class
  );
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</a>` : `<button${spread(
    [
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      },
      {
        "aria-label": escape_attribute_value(ariaLabel ?? name)
      }
    ],
    {}
  )}>${name ? `<span class="sr-only">${escape(name)}</span>` : ``} ${slots.default ? slots.default({ svgSize: svgSizes[size] }) : ``}</button>`} `;
});
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name }, $$restProps, { class: twMerge("ms-auto", $$props.class) }), {}, {
    default: ({ svgSize }) => {
      return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
    }
  })} `;
});
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["solid", "navClass", "solidClass", "olClass", "ariaLabel"]);
  let { solid = false } = $$props;
  let { navClass = "flex" } = $$props;
  let { solidClass = "flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" } = $$props;
  let { olClass = "inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse" } = $$props;
  let { ariaLabel = "Breadcrumb" } = $$props;
  let classNav = solid ? solidClass : navClass;
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0) $$bindings.solid(solid);
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0) $$bindings.navClass(navClass);
  if ($$props.solidClass === void 0 && $$bindings.solidClass && solidClass !== void 0) $$bindings.solidClass(solidClass);
  if ($$props.olClass === void 0 && $$bindings.olClass && olClass !== void 0) $$bindings.olClass(olClass);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  return `<nav${spread(
    [
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(classNav, $$props.class))
      }
    ],
    {}
  )}><ol${add_attribute("class", twMerge(olClass, $$props.classOl), 0)}>${slots.default ? slots.default({}) : ``}</ol></nav> `;
});
const BreadcrumbItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["home", "href", "linkClass", "spanClass", "homeClass"]);
  let $$slots = compute_slots(slots);
  let { home = false } = $$props;
  let { href = void 0 } = $$props;
  let { linkClass = "ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ms-2 dark:text-gray-400 dark:hover:text-white" } = $$props;
  let { spanClass = "ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400" } = $$props;
  let { homeClass = "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" } = $$props;
  if ($$props.home === void 0 && $$bindings.home && home !== void 0) $$bindings.home(home);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.linkClass === void 0 && $$bindings.linkClass && linkClass !== void 0) $$bindings.linkClass(linkClass);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0) $$bindings.spanClass(spanClass);
  if ($$props.homeClass === void 0 && $$bindings.homeClass && homeClass !== void 0) $$bindings.homeClass(homeClass);
  return `<li${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("inline-flex items-center", $$props.class))
      }
    ],
    {}
  )}>${home ? `<a${add_attribute("class", twMerge(homeClass, $$props.classHome), 0)}${add_attribute("href", href, 0)}>${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg class="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`} ${slots.default ? slots.default({}) : ``}</a>` : `${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg class="w-6 h-6 text-gray-400 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`} ${href ? `<a${add_attribute("class", twMerge(linkClass, $$props.classLink), 0)}${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<span${add_attribute("class", twMerge(spanClass, $$props.classSpan), 0)}>${slots.default ? slots.default({}) : ``}</span>`}`}</li> `;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "clearable", "defaultClass", "color", "floatClass"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { clearable = false } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right" } = $$props;
  let { color = "base" } = $$props;
  let { floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400" } = $$props;
  createEventDispatcher();
  const borderClasses = {
    base: "border border-gray-300 dark:border-gray-600",
    tinted: "border border-gray-300 dark:border-gray-500",
    green: "border border-green-500 dark:border-green-400",
    red: "border border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "ps-9", md: "ps-10", lg: "ps-11" };
  const rightPadding = { sm: "pe-9", md: "pe-10", lg: "pe-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.clearable === void 0 && $$bindings.clearable && clearable !== void 0) $$bindings.clearable(clearable);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.floatClass === void 0 && $$bindings.floatClass && floatClass !== void 0) $$bindings.floatClass(floatClass);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = twMerge([
        defaultClass,
        inputPadding[_size],
        $$slots.left && leftPadding[_size] || (clearable || $$slots.right) && rightPadding[_size],
        ringClasses[color],
        colorClasses[_color],
        borderClasses[_color],
        textSizes[_size],
        group || "rounded-lg",
        group && "first:rounded-s-lg last:rounded-e-lg",
        group && "[&:not(:first-child)]:-ms-px",
        $$props.class
      ]);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(twMerge(floatClass, $$props.classLeft), true) + " start-0 ps-2.5 pointer-events-none"}">${slots.left ? slots.left({}) : ``}</div>` : ``} ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : ` <input${spread(
          [
            escape_object($$restProps),
            escape_object({ type }),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}> `} ${$$slots.right ? `<div class="${escape(twMerge(floatClass, $$props.classRight), true) + " end-0 pe-2.5"}">${slots.right ? slots.right({}) : ``}</div>` : ``} ${clearable && value && `${value}`.length > 0 ? `${validate_component(CloseButton, "CloseButton").$$render(
          $$result,
          {
            size,
            color: "none",
            class: " " + twMerge(floatClass, $$props.classRight) + " focus:ring-0 end-6 focus:ring-gray-400 dark:text-white"
          },
          {},
          {}
        )}` : ``}`;
      }
    }
  )} `;
});
const HomeOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "home outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"></path></svg>`} `;
});
const MinusOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "minus outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 12h14"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 12h14"></path></svg>`} `;
});
const PlusOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "withEvents", "title", "strokeWidth", "desc", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { withEvents = ctx.withEvents || false } = $$props;
  let { title = {} } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { desc = {} } = $$props;
  let ariaDescribedby = `${title.id || ""} ${desc.id || ""}`;
  let hasDescription = false;
  let { ariaLabel = "plus outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.withEvents === void 0 && $$bindings.withEvents && withEvents !== void 0) $$bindings.withEvents(withEvents);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0) $$bindings.desc(desc);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  {
    if (title.id || desc.id) {
      hasDescription = true;
    } else {
      hasDescription = false;
    }
  }
  return `${withEvents ? `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 12h14m-7 7V5"></path></svg>` : `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      { color: escape_attribute_value(color) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size ?? "md"], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      {
        "aria-describedby": escape_attribute_value(hasDescription ? ariaDescribedby : void 0)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}>${title.id && title.title ? `<title${add_attribute("id", title.id, 0)}>${escape(title.title)}</title>` : ``}${desc.id && desc.desc ? `<desc${add_attribute("id", desc.id, 0)}>${escape(desc.desc)}</desc>` : ``}<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${add_attribute("stroke-width", strokeWidth, 0)} d="M5 12h14m-7 7V5"></path></svg>`} `;
});
const css$3 = {
  code: "@media(max-width: 768px){div.svelte-10uyocp{clip-path:none !important}}",
  map: `{"version":3,"file":"News.svelte","sources":["News.svelte"],"sourcesContent":["<script>\\r\\n  import { Accordion, AccordionItem } from 'flowbite-svelte';\\r\\n  import { AngleUpOutline } from 'flowbite-svelte-icons';\\r\\n  import { AngleDownOutline } from 'flowbite-svelte-icons';\\r\\n  import { locale } from '$lib/translations/i18n';\\r\\n  import { get } from 'svelte/store'; \\r\\n\\r\\n  import clsx from 'clsx';\\r\\n  export let accentColour = '';\\r\\n  console.log(accentColour);\\r\\n\\r\\n  export let newsFetchUrl;  \\r\\n\\r\\n\\r\\n  let accordionData = [];\\r\\n  let errorMessage = '';\\r\\n\\r\\n  let currentLocale = get(locale);\\r\\n  $: locale.subscribe(value => currentLocale = value);\\r\\n\\r\\n  $: fetchAccordionData(currentLocale);\\r\\n\\r\\n  async function fetchAccordionData(language) {\\r\\n      try {\\r\\n          if (!newsFetchUrl) {\\r\\n              throw new Error('Fetch URL missing');\\r\\n          }\\r\\n          \\r\\n          const response = await fetch(newsFetchUrl);\\r\\n\\r\\n          if (!response.ok) {\\r\\n              const errorText = await response.text();\\r\\n              throw new Error(\`Network response not ok: \${errorText}\`);\\r\\n          }\\r\\n\\r\\n          const data = await response.json();\\r\\n\\r\\n          const filteredData = data.features.filter(\\r\\n              feature => feature.attributes.Sprache === language.toUpperCase()\\r\\n          );\\r\\n\\r\\n          if (filteredData.length > 0) {\\r\\n              accordionData = filteredData.map(feature => ({\\r\\n                  date: feature.attributes.Datum,\\r\\n                  title: feature.attributes.Ueberschrift,\\r\\n                  content: feature.attributes.Inhalt\\r\\n              }));\\r\\n          } else {\\r\\n              throw new Error(\`No content available for language: \${language}\`);\\r\\n          }\\r\\n      } catch (error) {\\r\\n          console.error('Error fetching data:', error);\\r\\n          errorMessage = error.message;\\r\\n      }\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"w-full max-w-5xl mx-auto mb-5 mt-0 border-grey border-4 p-8 top-3 relative\\" style=\\"clip-path: polygon(-0.44% -2.2%, 0.39% -2.77%, 0.51% 13px, 6.15% 12px, 6.24% -6.6%, 100% -1.45%, 100% 100%, 0px 100%)\\">\\r\\n  {#if errorMessage}\\r\\n      <p>Error: {errorMessage}</p>\\r\\n  {:else if accordionData.length > 0}\\r\\n      <Accordion defaultClass=\\"\\" activeClass=\\"bg-white border-b-0\\">\\r\\n          {#each accordionData as item}\\r\\n              <AccordionItem\\r\\n                  class=\\"accordion-item pr-0 py-0\\"\\r\\n                  defaultClass=\\"flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey\\"\\r\\n                  activeClass={clsx('inherit bg-white border-b-0', accentColour)}\\r\\n              >\\r\\n                  <span slot=\\"header\\" class=\\"text-xs\\">\\r\\n                      {item.date} <span class=\\"ml-20 text-base\\">{item.title}</span>\\r\\n                  </span>\\r\\n                  <div\\r\\n                      slot=\\"arrowdown\\"\\r\\n                      class=\\"flex items-center justify-center h-14 w-14 bg-dark-grey\\"\\r\\n                  >\\r\\n                      <AngleDownOutline class=\\"h-6 w-6 text-white\\" />\\r\\n                  </div>\\r\\n                  <div\\r\\n                      slot=\\"arrowup\\"\\r\\n                      class=\\"flex items-center justify-center h-14 w-14 bg-white\\"\\r\\n                  >\\r\\n                      <AngleUpOutline class=\\"h-6 w-6 text-dark-grey\\" />\\r\\n                  </div>\\r\\n                  <p class=\\"ml-36 text-sm mt-[-20px]\\">{item.content}</p>\\r\\n              </AccordionItem>\\r\\n          {/each}\\r\\n      </Accordion>\\r\\n  {:else}\\r\\n      <p>Loading features...</p>\\r\\n  {/if}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n@media (max-width: 768px) {\\r\\n  div {\\r\\n    clip-path: none !important;\\r\\n  }\\r\\n}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6FA,MAAO,YAAY,KAAK,CAAE,CACxB,kBAAI,CACF,SAAS,CAAE,IAAI,CAAC,UAClB,CACF"}`
};
const News = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { accentColour = "" } = $$props;
  console.log(accentColour);
  let { newsFetchUrl } = $$props;
  let accordionData = [];
  let errorMessage = "";
  let currentLocale = get_store_value(locale);
  async function fetchAccordionData(language) {
    try {
      if (!newsFetchUrl) {
        throw new Error("Fetch URL missing");
      }
      const response = await fetch(newsFetchUrl);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response not ok: ${errorText}`);
      }
      const data = await response.json();
      const filteredData = data.features.filter((feature) => feature.attributes.Sprache === language.toUpperCase());
      if (filteredData.length > 0) {
        accordionData = filteredData.map((feature) => ({
          date: feature.attributes.Datum,
          title: feature.attributes.Ueberschrift,
          content: feature.attributes.Inhalt
        }));
      } else {
        throw new Error(`No content available for language: ${language}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      errorMessage = error.message;
    }
  }
  if ($$props.accentColour === void 0 && $$bindings.accentColour && accentColour !== void 0) $$bindings.accentColour(accentColour);
  if ($$props.newsFetchUrl === void 0 && $$bindings.newsFetchUrl && newsFetchUrl !== void 0) $$bindings.newsFetchUrl(newsFetchUrl);
  $$result.css.add(css$3);
  {
    locale.subscribe((value) => currentLocale = value);
  }
  {
    fetchAccordionData(currentLocale);
  }
  return `<div class="w-full max-w-5xl mx-auto mb-5 mt-0 border-grey border-4 p-8 top-3 relative svelte-10uyocp" style="clip-path: polygon(-0.44% -2.2%, 0.39% -2.77%, 0.51% 13px, 6.15% 12px, 6.24% -6.6%, 100% -1.45%, 100% 100%, 0px 100%)">${errorMessage ? `<p>Error: ${escape(errorMessage)}</p>` : `${accordionData.length > 0 ? `${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      defaultClass: "",
      activeClass: "bg-white border-b-0"
    },
    {},
    {
      default: () => {
        return `${each(accordionData, (item) => {
          return `${validate_component(AccordionItem, "AccordionItem").$$render(
            $$result,
            {
              class: "accordion-item pr-0 py-0",
              defaultClass: "flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey",
              activeClass: clsx("inherit bg-white border-b-0", accentColour)
            },
            {},
            {
              arrowup: () => {
                return `<div slot="arrowup" class="flex items-center justify-center h-14 w-14 bg-white svelte-10uyocp">${validate_component(AngleUpOutline, "AngleUpOutline").$$render($$result, { class: "h-6 w-6 text-dark-grey" }, {}, {})} </div>`;
              },
              arrowdown: () => {
                return `<div slot="arrowdown" class="flex items-center justify-center h-14 w-14 bg-dark-grey svelte-10uyocp">${validate_component(AngleDownOutline, "AngleDownOutline").$$render($$result, { class: "h-6 w-6 text-white" }, {}, {})} </div>`;
              },
              header: () => {
                return `<span slot="header" class="text-xs">${escape(item.date)} <span class="ml-20 text-base">${escape(item.title)}</span> </span>`;
              },
              default: () => {
                return `<p class="ml-36 text-sm mt-[-20px]">${escape(item.content)}</p> `;
              }
            }
          )}`;
        })}`;
      }
    }
  )}` : `<p data-svelte-h="svelte-1giifj">Loading features...</p>`}`} </div>`;
});
const css$2 = {
  code: "@media(max-width: 768px){div.svelte-dy67yh{clip-path:none !important}}",
  map: `{"version":3,"file":"Info.svelte","sources":["Info.svelte"],"sourcesContent":["<script>\\r\\n    import { onMount } from \\"svelte\\";\\r\\n    import { locale } from \\"$lib/translations/i18n\\";\\r\\n    import { get } from 'svelte/store'; \\r\\n  \\r\\n    export let infoFetchUrl;\\r\\n  \\r\\n    let contentItem = null;\\r\\n    let errorMessage = '';\\r\\n  \\r\\n    let currentLocale = get(locale);\\r\\n    $: locale.subscribe(value => currentLocale = value);\\r\\n  \\r\\n    $: fetchContent(currentLocale);\\r\\n  \\r\\n    async function fetchContent(language) {\\r\\n        try {\\r\\n            if (!infoFetchUrl) {\\r\\n                throw new Error('Fetch URL missing');\\r\\n            }\\r\\n  \\r\\n            const response = await fetch(infoFetchUrl);\\r\\n  \\r\\n            if (!response.ok) {\\r\\n                const errorText = await response.text();\\r\\n                throw new Error(\`Network response not ok: \${errorText}\`);\\r\\n            }\\r\\n  \\r\\n            const data = await response.json();\\r\\n  \\r\\n            const languageContent = data.features.find(\\r\\n                feature => feature.attributes.Sprache === language.toUpperCase()\\r\\n            );\\r\\n  \\r\\n            if (languageContent) {\\r\\n                contentItem = languageContent.attributes.Inhalt;\\r\\n            } else {\\r\\n                throw new Error(\`No content available for language: \${language}\`);\\r\\n            }\\r\\n        } catch (error) {\\r\\n            console.error('Error fetching content:', error);\\r\\n            errorMessage = error.message;\\r\\n        }\\r\\n    }\\r\\n  <\/script>\\r\\n  \\r\\n  <div class=\\"w-full max-w-5xl mx-auto mb-5 mt-0 border-grey border-4 p-8 top-3 relative\\"\\r\\n    style=\\"clip-path: polygon(-0.11% -0.35%, 6.87% -1.94%, 6.79% 13px, 11.37% 14px, 11.28% -2.44%, 100% -1.45%, 100% 100%, 0px 100%)\\">\\r\\n  \\r\\n    {#if errorMessage}\\r\\n        <p>Error: {errorMessage}</p>\\r\\n    {:else if contentItem}\\r\\n        <div>\\r\\n            {@html contentItem}\\r\\n        </div>\\r\\n    {:else}\\r\\n        <p>Loading content...</p>\\r\\n    {/if}\\r\\n  \\r\\n  </div>\\r\\n  \\r\\n  \\r\\n  <style>\\r\\n  @media (max-width: 768px) {\\r\\n    div {\\r\\n      clip-path: none !important;\\r\\n    }\\r\\n  }\\r\\n  </style>\\r\\n  "],"names":[],"mappings":"AA+DE,MAAO,YAAY,KAAK,CAAE,CACxB,iBAAI,CACF,SAAS,CAAE,IAAI,CAAC,UAClB,CACF"}`
};
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { infoFetchUrl } = $$props;
  let contentItem = null;
  let errorMessage = "";
  let currentLocale = get_store_value(locale);
  async function fetchContent(language) {
    try {
      if (!infoFetchUrl) {
        throw new Error("Fetch URL missing");
      }
      const response = await fetch(infoFetchUrl);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response not ok: ${errorText}`);
      }
      const data = await response.json();
      const languageContent = data.features.find((feature) => feature.attributes.Sprache === language.toUpperCase());
      if (languageContent) {
        contentItem = languageContent.attributes.Inhalt;
      } else {
        throw new Error(`No content available for language: ${language}`);
      }
    } catch (error) {
      console.error("Error fetching content:", error);
      errorMessage = error.message;
    }
  }
  if ($$props.infoFetchUrl === void 0 && $$bindings.infoFetchUrl && infoFetchUrl !== void 0) $$bindings.infoFetchUrl(infoFetchUrl);
  $$result.css.add(css$2);
  {
    locale.subscribe((value) => currentLocale = value);
  }
  {
    fetchContent(currentLocale);
  }
  return `<div class="w-full max-w-5xl mx-auto mb-5 mt-0 border-grey border-4 p-8 top-3 relative svelte-dy67yh" style="clip-path: polygon(-0.11% -0.35%, 6.87% -1.94%, 6.79% 13px, 11.37% 14px, 11.28% -2.44%, 100% -1.45%, 100% 100%, 0px 100%)">${errorMessage ? `<p>Error: ${escape(errorMessage)}</p>` : `${contentItem ? `<div class="svelte-dy67yh"><!-- HTML_TAG_START -->${contentItem}<!-- HTML_TAG_END --></div>` : `<p data-svelte-h="svelte-18ooj5n">Loading content...</p>`}`} </div>`;
});
const css$1 = {
  code: "@media(max-width: 768px){div.svelte-tbvfm1{clip-path:none !important}}",
  map: `{"version":3,"file":"FAQ.svelte","sources":["FAQ.svelte"],"sourcesContent":["<script>\\r\\n  import { t, locale } from \\"$lib/translations/i18n\\";\\r\\n  import { Accordion, AccordionItem, Input } from \\"flowbite-svelte\\";\\r\\n  import { PlusOutline, MinusOutline } from \\"flowbite-svelte-icons\\";\\r\\n  import { onMount } from \\"svelte\\";\\r\\n  import { get } from 'svelte/store'; \\r\\n\\r\\n  import clsx from 'clsx';\\r\\n    export let accentColour = '';\\r\\n    console.log(accentColour);\\r\\n\\r\\n  export let faqFetchUrl;\\r\\n\\r\\n  let searchTerm = \\"\\";\\r\\n  let faqItems = [];\\r\\n  let errorMessage = '';\\r\\n\\r\\n\\r\\n\\r\\n  let currentLocale = get(locale);\\r\\n  $: locale.subscribe(value => currentLocale = value);\\r\\n\\r\\n  $: fetchFaqData(currentLocale);\\r\\n\\r\\n  async function fetchFaqData(language) {\\r\\n      try {\\r\\n          if (!faqFetchUrl) {\\r\\n              throw new Error('Fetch URL not provided');\\r\\n          }\\r\\n\\r\\n          const response = await fetch(faqFetchUrl);\\r\\n\\r\\n          if (!response.ok) {\\r\\n              const errorText = await response.text();\\r\\n              throw new Error(\`Network response was not ok: \${errorText}\`);\\r\\n          }\\r\\n\\r\\n          const data = await response.json();\\r\\n\\r\\n          const filteredData = data.features.filter(\\r\\n              feature => feature.attributes.Sprache === language.toUpperCase()\\r\\n          );\\r\\n\\r\\n          if (filteredData.length > 0) {\\r\\n              faqItems = filteredData.map(feature => ({\\r\\n                  title: feature.attributes.Ueberschrift,\\r\\n                  content: feature.attributes.Inhalt\\r\\n              }));\\r\\n          } else {\\r\\n              throw new Error(\`No FAQs available for language: \${language}\`);\\r\\n          }\\r\\n      } catch (error) {\\r\\n          console.error('Error fetching data:', error);\\r\\n          errorMessage = error.message;\\r\\n      }\\r\\n  }\\r\\n\\r\\n  $: filteredFaqItems = faqItems.filter(item => \\r\\n      searchTerm.length === 0 || \\r\\n      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || \\r\\n      item.content.toLowerCase().includes(searchTerm.toLowerCase())\\r\\n  );\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"w-full max-w-5xl mx-auto mb-5 border-grey border-4 p-8 top-3 relative\\" style=\\"clip-path: polygon(-0.11% -0.35%, 11.92% -2.79%, 12.02% 15px, 17.43% 14px, 17.44% -1.21%, 100% -1.45%, 100% 100%, 0px 100%)\\">\\r\\n  <Input\\r\\n      id=\\"small-input\\"\\r\\n      type=\\"text\\"\\r\\n      bind:value={searchTerm}\\r\\n      placeholder=\\"{$t('tabs.faq')}\\"\\r\\n      class=\\"border p-2 rounded w-full text-xs text-light-grey focus:ring-0 focus:border-gray-300 bg-white\\"\\r\\n  />\\r\\n\\r\\n  <hr class=\\"mt-4\\">\\r\\n\\r\\n  {#if errorMessage}\\r\\n      <p>Error: {errorMessage}</p>\\r\\n  {:else if faqItems.length > 0}\\r\\n      <Accordion flush activeClass=\\"text-lime-green\\">\\r\\n          {#each filteredFaqItems as item}\\r\\n              <AccordionItem class=\\"text-sm font-bold\\">\\r\\n                  <span slot=\\"header\\" class={clsx('pl-1', accentColour)}>{item.title}</span>  \\r\\n                  <div slot=\\"arrowup\\">\\r\\n                      <MinusOutline class=\\"\\" />\\r\\n                  </div>\\r\\n                  <span slot=\\"arrowdown\\">\\r\\n                      <PlusOutline class=\\"\\" />\\r\\n                  </span>\\r\\n                  <p class=\\"mb-2 pl-3 text-sm\\">{item.content}</p>\\r\\n              </AccordionItem>\\r\\n          {/each}\\r\\n      </Accordion>\\r\\n  {:else}\\r\\n      <p>Loading FAQs...</p>\\r\\n  {/if}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  @media (max-width: 768px) {\\r\\n      div {\\r\\n          clip-path: none !important;\\r\\n      }\\r\\n  }\\r\\n</style>\\r\\n\\r\\n\\r\\n  \\r\\n  \\r\\n  <!-- accordion in case need of sub-accordions\\r\\n      {#if errorMessage}\\r\\n      <p>Error: {errorMessage}</p>\\r\\n    {:else if faqItems.length > 0}\\r\\n      <Accordion flush activeClass=\\"text-lime-green\\">\\r\\n        {#each filteredFaqItems as item}\\r\\n          <AccordionItem class=\\"text-xs font-bold\\">\\r\\n            <span slot=\\"header\\" class=\\"pl-1\\">{item.title}</span>\\r\\n            <Accordion flush class=\\"mt-[-10px] pl-3\\">\\r\\n              <AccordionItem class=\\"py-4\\">\\r\\n                <span slot=\\"header\\" class=\\"text-xs hover:{accentColour}\\">{item.title}</span>\\r\\n                <p class=\\"mb-2 font-light pl-3 text-xs\\">{item.content}</p>\\r\\n              </AccordionItem>\\r\\n            </Accordion>\\r\\n          </AccordionItem>\\r\\n        {/each}\\r\\n      </Accordion>\\r\\n    {:else}\\r\\n      <p>Loading FAQs...</p>\\r\\n    {/if}\\r\\n  -->\\r\\n  "],"names":[],"mappings":"AAkGE,MAAO,YAAY,KAAK,CAAE,CACtB,iBAAI,CACA,SAAS,CAAE,IAAI,CAAC,UACpB,CACJ"}`
};
const FAQ = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredFaqItems;
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let { accentColour = "" } = $$props;
  console.log(accentColour);
  let { faqFetchUrl } = $$props;
  let searchTerm = "";
  let faqItems = [];
  let errorMessage = "";
  let currentLocale = get_store_value(locale);
  async function fetchFaqData(language) {
    try {
      if (!faqFetchUrl) {
        throw new Error("Fetch URL not provided");
      }
      const response = await fetch(faqFetchUrl);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }
      const data = await response.json();
      const filteredData = data.features.filter((feature) => feature.attributes.Sprache === language.toUpperCase());
      if (filteredData.length > 0) {
        faqItems = filteredData.map((feature) => ({
          title: feature.attributes.Ueberschrift,
          content: feature.attributes.Inhalt
        }));
      } else {
        throw new Error(`No FAQs available for language: ${language}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      errorMessage = error.message;
    }
  }
  if ($$props.accentColour === void 0 && $$bindings.accentColour && accentColour !== void 0) $$bindings.accentColour(accentColour);
  if ($$props.faqFetchUrl === void 0 && $$bindings.faqFetchUrl && faqFetchUrl !== void 0) $$bindings.faqFetchUrl(faqFetchUrl);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      locale.subscribe((value) => currentLocale = value);
    }
    {
      fetchFaqData(currentLocale);
    }
    filteredFaqItems = faqItems.filter((item) => searchTerm.length === 0 || item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.content.toLowerCase().includes(searchTerm.toLowerCase()));
    $$rendered = `<div class="w-full max-w-5xl mx-auto mb-5 border-grey border-4 p-8 top-3 relative svelte-tbvfm1" style="clip-path: polygon(-0.11% -0.35%, 11.92% -2.79%, 12.02% 15px, 17.43% 14px, 17.44% -1.21%, 100% -1.45%, 100% 100%, 0px 100%)">${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "small-input",
        type: "text",
        placeholder: $t("tabs.faq"),
        class: "border p-2 rounded w-full text-xs text-light-grey focus:ring-0 focus:border-gray-300 bg-white",
        value: searchTerm
      },
      {
        value: ($$value) => {
          searchTerm = $$value;
          $$settled = false;
        }
      },
      {}
    )} <hr class="mt-4"> ${errorMessage ? `<p>Error: ${escape(errorMessage)}</p>` : `${faqItems.length > 0 ? `${validate_component(Accordion, "Accordion").$$render(
      $$result,
      {
        flush: true,
        activeClass: "text-lime-green"
      },
      {},
      {
        default: () => {
          return `${each(filteredFaqItems, (item) => {
            return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { class: "text-sm font-bold" }, {}, {
              arrowdown: () => {
                return `<span slot="arrowdown">${validate_component(PlusOutline, "PlusOutline").$$render($$result, { class: "" }, {}, {})} </span>`;
              },
              arrowup: () => {
                return `<div slot="arrowup" class="svelte-tbvfm1">${validate_component(MinusOutline, "MinusOutline").$$render($$result, { class: "" }, {}, {})} </div>`;
              },
              header: () => {
                return `<span slot="header"${add_attribute("class", clsx("pl-1", accentColour), 0)}>${escape(item.title)}</span>`;
              },
              default: () => {
                return `<p class="mb-2 pl-3 text-sm">${escape(item.content)}</p> `;
              }
            })}`;
          })}`;
        }
      }
    )}` : `<p data-svelte-h="svelte-1bvnk49">Loading FAQs...</p>`}`}</div>  `;
  } while (!$$settled);
  $$unsubscribe_t();
  return $$rendered;
});
const ProjectHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { descFetchUrl } = $$props;
  let { projImgUrl } = $$props;
  let { logoSrcUrl } = $$props;
  let { linkHref = "" } = $$props;
  let description = "";
  let { accentColour = "" } = $$props;
  console.log(accentColour);
  let currentLocale = get_store_value(locale);
  async function fetchProjectInfo(language) {
    if (!descFetchUrl) {
      throw new Error("Fetch URL missing");
    }
    const response = await fetch(descFetchUrl);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`${errorText}`);
    }
    const data = await response.json();
    const languageContent = data.features.find((feature) => feature.attributes.Sprache === language.toUpperCase());
    if (languageContent) {
      description = languageContent.attributes.Inhalt;
    } else {
      throw new Error(`No description available for language: ${language}`);
    }
  }
  if ($$props.descFetchUrl === void 0 && $$bindings.descFetchUrl && descFetchUrl !== void 0) $$bindings.descFetchUrl(descFetchUrl);
  if ($$props.projImgUrl === void 0 && $$bindings.projImgUrl && projImgUrl !== void 0) $$bindings.projImgUrl(projImgUrl);
  if ($$props.logoSrcUrl === void 0 && $$bindings.logoSrcUrl && logoSrcUrl !== void 0) $$bindings.logoSrcUrl(logoSrcUrl);
  if ($$props.linkHref === void 0 && $$bindings.linkHref && linkHref !== void 0) $$bindings.linkHref(linkHref);
  if ($$props.accentColour === void 0 && $$bindings.accentColour && accentColour !== void 0) $$bindings.accentColour(accentColour);
  {
    locale.subscribe((value) => currentLocale = value);
  }
  {
    fetchProjectInfo(currentLocale);
  }
  return `<section class="mb-5"><div class="flex justify-center items-center px-6"><div class="flex w-full max-w-5xl">${`<p data-svelte-h="svelte-mlfjgz">Loading image...</p>`} <div class="flex-grow ml-8 relative">${`<p data-svelte-h="svelte-mlfjgz">Loading image...</p>`} ${description ? `<p class="text-lg text-light-grey pt-6 text-justify">${escape(description)}</p>` : `<p data-svelte-h="svelte-ht3j3k">Loading description...</p>`} </div></div></div></section>`;
});
const css = {
  code: ".activeTab.svelte-1xdklqo{border:4px solid;border-bottom:none;font-weight:bold;border-color:#e5e7eb}",
  map: `{"version":3,"file":"Tabs.svelte","sources":["Tabs.svelte"],"sourcesContent":["<script>\\r\\n    import clsx from \\"clsx\\";\\r\\n\\r\\n    export let tabs = []; \\r\\n    export let activeTab; \\r\\n    export let onTabChange; \\r\\n    export let accentColour='';\\r\\n<\/script>\\r\\n\\r\\n\\r\\n<div class=\\"flex w-full max-w-5xl mx-auto mt-20\\">\\r\\n  <ul class=\\"flex flex-wrap -mb-px\\">\\r\\n    {#each tabs as tab}\\r\\n      <li class=\\"mr-2\\">\\r\\n        <!-- svelte-ignore a11y-invalid-attribute -->\\r\\n        <a href=\\"#\\" \\r\\n        class={clsx(\\r\\n          'inline-block py-2 px-2 border-b-0 relative z-2 top-3 border-grey',  \\r\\n          { 'activeTab': activeTab === tab, [accentColour]: activeTab === tab }\\r\\n        )}        \\r\\n            on:click={() => onTabChange(tab)}> \\r\\n          {tab}\\r\\n        </a>\\r\\n      </li>\\r\\n    {/each}\\r\\n  </ul>\\r\\n</div>\\r\\n  \\r\\n\\r\\n<style>\\r\\n  .activeTab {\\r\\n    border: 4px solid;\\r\\n    border-bottom: none;\\r\\n    font-weight: bold; \\r\\n    border-color: #e5e7eb;\\r\\n  }\\r\\n</style>\\r\\n  "],"names":[],"mappings":"AA8BE,yBAAW,CACT,MAAM,CAAE,GAAG,CAAC,KAAK,CACjB,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,OAChB"}`
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tabs = [] } = $$props;
  let { activeTab } = $$props;
  let { onTabChange } = $$props;
  let { accentColour = "" } = $$props;
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0) $$bindings.tabs(tabs);
  if ($$props.activeTab === void 0 && $$bindings.activeTab && activeTab !== void 0) $$bindings.activeTab(activeTab);
  if ($$props.onTabChange === void 0 && $$bindings.onTabChange && onTabChange !== void 0) $$bindings.onTabChange(onTabChange);
  if ($$props.accentColour === void 0 && $$bindings.accentColour && accentColour !== void 0) $$bindings.accentColour(accentColour);
  $$result.css.add(css);
  return `<div class="flex w-full max-w-5xl mx-auto mt-20"><ul class="flex flex-wrap -mb-px">${each(tabs, (tab) => {
    return `<li class="mr-2"> <a href="#" class="${escape(
      null_to_empty(clsx("inline-block py-2 px-2 border-b-0 relative z-2 top-3 border-grey", {
        "activeTab": activeTab === tab,
        [accentColour]: activeTab === tab
      })),
      true
    ) + " svelte-1xdklqo"}">${escape(tab)}</a> </li>`;
  })}</ul> </div>`;
});
const Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rawServiceName;
  let serviceName;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  rawServiceName = $page.url.pathname.split("/").pop();
  serviceName = rawServiceName.charAt(0).toUpperCase() + rawServiceName.slice(1);
  $$unsubscribe_page();
  return `${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { classOl: "mt-[-100px] ml-64" }, {}, {
    default: () => {
      return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render(
        $$result,
        {
          classHome: "text-xs",
          href: "/",
          home: true
        },
        {},
        {
          icon: () => {
            return `${validate_component(HomeOutline, "HomeOutline").$$render($$result, { class: "w-4 h-4 me-2" }, {}, {})}`;
          },
          default: () => {
            return `Home`;
          }
        }
      )} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render(
        $$result,
        {
          classLink: "text-xs cursor-default hover:text-gray-700",
          href: "/"
        },
        {},
        {
          default: () => {
            return `Services`;
          }
        }
      )} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { classSpan: "text-xs cursor-default" }, {}, {
        default: () => {
          return `${escape(serviceName)}`;
        }
      })}`;
    }
  })}`;
});
export {
  Breadcrumbs as B,
  FAQ as F,
  Info as I,
  News as N,
  ProjectHeader as P,
  Tabs as T
};
