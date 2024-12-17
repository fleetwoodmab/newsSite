<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte';
  import { AngleDownOutline, AngleUpOutline } from 'flowbite-svelte-icons';
  import { locale } from "$lib/translations/i18n";
  import { get } from 'svelte/store'; 

  let homeNewsFetchUrl = 'https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Kategorie+%3D+%27News%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=Datum+DESC&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson';
 // to show scroll bar: 
 //let homeNewsFetchUrl = 'https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=1%3D1&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson';

  let news = [];
  let errorMessage = '';

  let currentLocale = get(locale);
  $: locale.subscribe(value => currentLocale = value);

  $: fetchNewsData(currentLocale);

  async function fetchNewsData(language) {
      try {
          if (!homeNewsFetchUrl) {
              throw new Error('Fetch URL not provided');
          }

          const response = await fetch(homeNewsFetchUrl);

          if (!response.ok) {
              const errorText = await response.text();
              throw new Error(`Network response was not ok: ${errorText}`);
          }

          const data = await response.json();

          const filteredData = data.features.filter(
              feature => feature.attributes.Sprache === language.toUpperCase()
          );

          if (filteredData.length > 0) {
              news = filteredData.map(feature => ({
                  date: feature.attributes.Datum,
                  title: feature.attributes.Ueberschrift,
                  content: feature.attributes.Inhalt
              }));
          } else {
              throw new Error(`No news available for language: ${language}`);
          }
      } catch (error) {
          console.error('Error fetching news:', error);
          errorMessage = error.message;
      }
  }
</script>

<h2 class="text-2xl font-bold mb-8 text-dark-blue-green">News</h2>

<div class="flex">

  <div class="flex-1 flex flex-col">

    {#if errorMessage}
      <p>Error: {errorMessage}</p>
    {:else if news.length > 0}

      <div class="flex-1 my-4 max-h-[400px] overflow-y-auto">
        <Accordion class="border-accent-grey border-t-2">
          {#each news as newsItem} 
            <AccordionItem
              class="accordion-item pr-0 py-0"
              defaultClass="flex items-center justify-between w-full font-medium text-left group-first:rounded-none bg-blue-grey"
              activeClass="inherit bg-white border-b-0"
            >
              <span slot="header" class="text-light-grey text-xs">
                {newsItem.date}
                <span class="ml-20 text-dark-blue-green text-base">
                  {newsItem.title}
                </span>
              </span>
              <div
                slot="arrowdown"
                class="flex items-center justify-center h-14 w-14 bg-accent-grey"
              >
                <AngleDownOutline class="h-6 w-6 text-white" />
              </div>
              <div
                slot="arrowup"
                class="flex items-center justify-center h-14 w-14 bg-white"
              >
                <AngleUpOutline class="h-6 w-6 text-dark-grey" />
              </div>
              <p class="text-light-grey ml-36 text-sm mt-[-20px] pb-10">
                {newsItem.content}
              </p>
            </AccordionItem>
          {/each}
        </Accordion>
      </div>
    {:else}
      <p>Loading news...</p>
    {/if}
  </div>
</div>

<style>
/* scrollbar styling possible */
</style>
