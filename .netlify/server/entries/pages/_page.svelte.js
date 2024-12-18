import { c as create_ssr_component, h as get_store_value, v as validate_component, j as each, e as escape, s as subscribe, k as add_attribute } from "../../chunks/ssr.js";
import { l as locale, t } from "../../chunks/i18n.js";
import { A as Accordion, a as AccordionItem, b as AngleUpOutline, c as AngleDownOutline } from "../../chunks/AngleUpOutline.js";
let homeNewsFetchUrl = "https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Kategorie+%3D+%27News%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=Datum+DESC&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson";
const HomeNews = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let news = [];
  let errorMessage = "";
  let currentLocale = get_store_value(locale);
  async function fetchNewsData(language) {
    try {
      if (!homeNewsFetchUrl) ;
      const response = await fetch(homeNewsFetchUrl);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }
      const data = await response.json();
      const filteredData = data.features.filter((feature) => feature.attributes.Sprache === language.toUpperCase());
      if (filteredData.length > 0) {
        news = filteredData.map((feature) => ({
          date: feature.attributes.Datum,
          title: feature.attributes.Ueberschrift,
          content: feature.attributes.Inhalt
        }));
      } else {
        throw new Error(`No news available for language: ${language}`);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      errorMessage = error.message;
    }
  }
  {
    locale.subscribe((value) => currentLocale = value);
  }
  {
    fetchNewsData(currentLocale);
  }
  return `<h2 class="text-2xl font-bold mb-10 text-dark-blue-green" data-svelte-h="svelte-1n6866h">News</h2> <div class="flex"><div class="flex-1 flex flex-col">${errorMessage ? `<p>Error: ${escape(errorMessage)}</p>` : `${news.length > 0 ? `<div class="flex-1 mb-4 max-h-[400px] overflow-y-auto">${validate_component(Accordion, "Accordion").$$render($$result, { class: "border-accent-grey border-t-2" }, {}, {
    default: () => {
      return `${each(news, (newsItem) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render(
          $$result,
          {
            class: "accordion-item pr-0 py-0",
            defaultClass: "flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey",
            activeClass: "inherit bg-white border-b-0"
          },
          {},
          {
            arrowup: () => {
              return `<div slot="arrowup" class="flex items-center justify-center h-14 w-14 bg-white">${validate_component(AngleUpOutline, "AngleUpOutline").$$render($$result, { class: "h-6 w-6 text-dark-grey" }, {}, {})} </div>`;
            },
            arrowdown: () => {
              return `<div slot="arrowdown" class="flex items-center justify-center h-14 w-14 bg-accent-grey">${validate_component(AngleDownOutline, "AngleDownOutline").$$render($$result, { class: "h-6 w-6 text-white" }, {}, {})} </div>`;
            },
            header: () => {
              return `<span slot="header" class="text-light-grey text-xs">${escape(newsItem.date)} <span class="ml-20 text-dark-blue-green text-base">${escape(newsItem.title)}</span> </span>`;
            },
            default: () => {
              return `<p class="text-light-grey ml-36 text-sm mt-[-20px] pb-10">${escape(newsItem.content)}</p> `;
            }
          }
        )}`;
      })}`;
    }
  })}</div>` : `<p data-svelte-h="svelte-1spv7uz">Loading news...</p>`}`}</div> </div>`;
});
const css = {
  code: ".svelte-c4hwbj{height:100%}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { t } from \\"$lib/translations/i18n\\";\\nimport HomeNews from \\"$lib/components/HomeNews.svelte\\";\\nimport { onMount } from \\"svelte\\";\\nconst geoURL = \\"https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Geoinformation%27+AND+Kategorie+%3D+%27TeaserBild%27+AND+Sprache+%3D+%27EN%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson\\";\\nconst tethysURL = \\"https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Tethys+RDR%27+AND+Kategorie+%3D+%27TeaserBild%27+AND+Sprache+%3D+%27DE%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson\\";\\nconst geomapsURL = \\"https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27GeoSphere+Maps%27+AND+Kategorie+%3D+%27TeaserBild%27+AND+Sprache+%3D+%27DE%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson\\";\\nconst thesauURL = \\"https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Thesaurus%27+AND+Kategorie+%3D+%27TeaserBild%27+AND+Sprache+%3D+%27DE%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson\\";\\nlet mainImageImg = \\"\\";\\nlet tethysImg = \\"\\";\\nlet geomapsImg = \\"\\";\\nlet thesauImg = \\"\\";\\nonMount(async () => {\\n  const response1 = await fetch(geoURL);\\n  const data1 = await response1.json();\\n  mainImageImg = data1.features[0].attributes.Inhalt;\\n  const response2 = await fetch(tethysURL);\\n  const data2 = await response2.json();\\n  tethysImg = data2.features[0].attributes.Inhalt;\\n  const response3 = await fetch(geomapsURL);\\n  const data3 = await response3.json();\\n  geomapsImg = data3.features[0].attributes.Inhalt;\\n  const response4 = await fetch(thesauURL);\\n  const data4 = await response4.json();\\n  thesauImg = data4.features[0].attributes.Inhalt;\\n});\\n<\/script>\\r\\n\\r\\n<!-- Hero Section -->\\r\\n<section class=\\"mt-20 max-w-screen-lg mx-auto mb-20\\">\\r\\n    <div class=\\"flex flex-row w-full max-w-5xl mx-auto ml-0 space-y-0 space-x-8\\">\\r\\n        <div class=\\"flex-grow flex items-start\\">\\r\\n            <img src={mainImageImg} alt=\\"\\" class=\\"max-w-max w-80 object-contain border-2 p-2\\">\\r\\n        </div>\\r\\n        <div class=\\"flex-grow mt-0 text-justify\\">\\r\\n            <h1 class=\\"text-3xl mb-5 font-semibold text-dark-blue-green\\">Geoinformation</h1>\\r\\n            <p class=\\"text-lg text-light-grey\\">{$t(\\"homepage.description\\")}</p>\\r\\n        </div>\\r\\n    </div>    \\r\\n</section>\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n<!-- News Accordion Section -->\\r\\n<section class=\\"max-w-screen-lg mx-auto mb-20\\">\\r\\n   \\r\\n    <HomeNews/>\\r\\n</section>\\r\\n\\r\\n<!-- Services Section -->\\r\\n<section class=\\"bg-blue-grey pt-10 pb-20\\">\\r\\n    <div class=\\"grid grid-cols-1 sm:grid-cols-3 mx-auto max-w-screen-lg\\">\\r\\n        <h2 class=\\"text-2xl col-span-3 mb-10 text-left font-bold text-dark-blue-green\\">Services</h2> \\r\\n\\r\\n        <div class=\\"grid grid-cols-1 sm:grid-cols-3 gap-8 col-span-3 pb-10 text-center\\"> \\r\\n            <a href=\\"/tethys\\" class=\\"hover:scale-95 duration-150 ease-out hover:ease-in\\"><img src=\\"{tethysImg}\\" alt=\\"\\" class=\\"border-2 p-2 border-dark-grey\\"><span class=\\"pt-2\\">Tethys RDR</span></a>\\r\\n            <a href=\\"/geospheremaps\\" class=\\"hover:scale-95 duration-150 ease-out hover:ease-in\\"><img src=\\"{geomapsImg}\\" alt=\\"\\" class=\\"border-2 p-2 border-dark-grey\\"><span>GeoSphere Maps</span></a>\\r\\n            <a href=\\"/thesaurus\\" class=\\"hover:scale-95 duration-150 ease-out hover:ease-in\\"><img src=\\"{thesauImg}\\" alt=\\"\\" class=\\"border-2 p-2 border-dark-grey\\"><span>Thesaurus</span></a>\\r\\n        </div>\\r\\n    </div>\\r\\n</section>\\r\\n\\r\\n\\r\\n<style>\\r\\n    * {\\r\\n        height: 100%;\\r\\n    }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgEI,cAAE,CACE,MAAM,CAAE,IACZ"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  let mainImageImg = "";
  let tethysImg = "";
  let geomapsImg = "";
  let thesauImg = "";
  $$result.css.add(css);
  $$unsubscribe_t();
  return ` <section class="mt-20 max-w-screen-lg mx-auto mb-20 svelte-c4hwbj"><div class="flex flex-row w-full max-w-5xl mx-auto ml-0 space-y-0 space-x-8 svelte-c4hwbj"><div class="flex-grow flex items-start svelte-c4hwbj"><img${add_attribute("src", mainImageImg, 0)} alt="" class="max-w-max w-80 object-contain border-2 p-2 svelte-c4hwbj"></div> <div class="flex-grow mt-0 text-justify svelte-c4hwbj"><h1 class="text-3xl mb-5 font-semibold text-dark-blue-green svelte-c4hwbj" data-svelte-h="svelte-1u51p06">Geoinformation</h1> <p class="text-lg text-light-grey svelte-c4hwbj">${escape($t("homepage.description"))}</p></div></div></section>  <section class="max-w-screen-lg mx-auto mb-20 svelte-c4hwbj">${validate_component(HomeNews, "HomeNews").$$render($$result, {}, {}, {})}</section>  <section class="bg-blue-grey pt-10 pb-20 svelte-c4hwbj"><div class="grid grid-cols-1 sm:grid-cols-3 mx-auto max-w-screen-lg svelte-c4hwbj"><h2 class="text-2xl col-span-3 mb-10 text-left font-bold text-dark-blue-green svelte-c4hwbj" data-svelte-h="svelte-1e0myvu">Services</h2> <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 col-span-3 pb-10 text-center svelte-c4hwbj"><a href="/tethys" class="hover:scale-95 duration-150 ease-out hover:ease-in svelte-c4hwbj"><img${add_attribute("src", tethysImg, 0)} alt="" class="border-2 p-2 border-dark-grey svelte-c4hwbj"><span class="pt-2 svelte-c4hwbj" data-svelte-h="svelte-1mm3lwx">Tethys RDR</span></a> <a href="/geospheremaps" class="hover:scale-95 duration-150 ease-out hover:ease-in svelte-c4hwbj"><img${add_attribute("src", geomapsImg, 0)} alt="" class="border-2 p-2 border-dark-grey svelte-c4hwbj"><span class="svelte-c4hwbj" data-svelte-h="svelte-msded5">GeoSphere Maps</span></a> <a href="/thesaurus" class="hover:scale-95 duration-150 ease-out hover:ease-in svelte-c4hwbj"><img${add_attribute("src", thesauImg, 0)} alt="" class="border-2 p-2 border-dark-grey svelte-c4hwbj"><span class="svelte-c4hwbj" data-svelte-h="svelte-21w256">Thesaurus</span></a></div></div> </section>`;
});
export {
  Page as default
};
