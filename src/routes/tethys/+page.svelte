<script>
  import { Accordion, AccordionItem, Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { Label, Input } from "flowbite-svelte";
  import News from "$lib/components/News.svelte";
  import Info from "$lib/components/Info.svelte";
  import Faq from "$lib/components/FAQ.svelte";
  import ProjectHeader from "$lib/components/ProjectHeader.svelte";
  import Tabs from "$lib/components/Tabs.svelte";

  let activeTab = 'News';

  const newsFetchUrl = 'https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Tethys+RDR%27+AND+Kategorie+%3D+%27News%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson';
  const infoFetchUrl = 'https://example.com/api/info';  
  const faqFetchUrl = 'https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Tethys+RDR%27+AND+Kategorie+%3D+%27FAQ%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson';  

  function handleTabChange(tab) {
      activeTab = tab;
  }
</script>

<div class="container mx-auto my-24">
  <Breadcrumb class="mt-[-55px]">
      <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
      <BreadcrumbItem href="/">Projects</BreadcrumbItem>
      <BreadcrumbItem>Tethys</BreadcrumbItem>
  </Breadcrumb>

  <ProjectHeader
      logoSrc="/tethysLogo.svg"
      description="Über Tethys RDR (tethys.at) werden innerhalb der Organisation generierte Forschungsdaten als open data und nach den FAIR Prinzipien veröffentlicht."
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
