<script>
  import { Accordion, AccordionItem, Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { Label, Input } from "flowbite-svelte";
  import News from "$lib/components/News.svelte";
  import Info from "$lib/components/Info.svelte";
  import Faq from "$lib/components/FAQ.svelte";
  import ProjectHeader from "$lib/components/ProjectHeader.svelte";
  import Tabs from "$lib/components/Tabs.svelte";
    import { t } from "$lib/translations/i18n";
    import { HomeOutline } from "flowbite-svelte-icons";

  let activeTab = 'News';

  const newsFetchUrl = 'https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Tethys+RDR%27+AND+Kategorie+%3D+%27News%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson';
  const infoFetchUrl = 'https://example.com/api/info';  
  const faqFetchUrl = 'https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Tethys+RDR%27+AND+Kategorie+%3D+%27FAQ%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson';  

  function handleTabChange(tab) {
      activeTab = tab;
  }
</script>

<div class="container mx-auto my-24">
  <Breadcrumb classOl="mt-[-100px] ml-6" >
      <BreadcrumbItem classHome="text-xs" href="/" home>
        <svelte:fragment slot="icon"><HomeOutline class="w-4 h-4 me-2" /></svelte:fragment>
        Home</BreadcrumbItem>
      <BreadcrumbItem classLink="text-xs cursor-default hover:text-gray-700" href="/">Services</BreadcrumbItem>
      <BreadcrumbItem classSpan="text-xs cursor-default">Tethys</BreadcrumbItem>
  </Breadcrumb>

  <ProjectHeader
      projImg="/tethysHome.png"
      logoSrc="/tethysLogo.svg"
      description={$t("tethys.desc")}
      linkHref="https://www.tethys.at"
  />

  <Tabs
      tabs={['News', 'Info', 'FAQs']}
      activeTab={activeTab}
      onTabChange={handleTabChange}
  />

  {#if activeTab === "News"}
      <News {newsFetchUrl}/>
  {:else if activeTab === "Info"}
      <Info/>
  {:else if activeTab === "FAQs"}
      <Faq {faqFetchUrl}/>
  {/if}
</div>
