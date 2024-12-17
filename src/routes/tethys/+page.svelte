<script>
  import { Accordion, AccordionItem, Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { Label, Input } from "flowbite-svelte";
  import News from "$lib/components/News.svelte";
  import Info from "$lib/components/Info.svelte";
  import Faq from "$lib/components/FAQ.svelte";
  import ProjectHeader from "$lib/components/ProjectHeader.svelte";
  import Tabs from "$lib/components/Tabs.svelte";
    import { locale, t } from "$lib/translations/i18n";
    import { HomeOutline } from "flowbite-svelte-icons";
    import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
    import { get } from "svelte/store";
    
  const accentColour = 'text-teal'
  const linkHref = 'tethys.at'

  let activeTab = 'News';

  const descFetchUrl='https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Tethys+RDR%27+AND+Kategorie+%3D+%27TeaserText%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson'
  const projImgUrl = ''    
  const logoSrcUrl = ''  

  const newsFetchUrl = 'https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Tethys+RDR%27+AND+Kategorie+%3D+%27News%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson';
  const infoFetchUrl = 'https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Tethys+RDR%27+AND+Kategorie+%3D+%27Info%27+&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson';  
  const faqFetchUrl = 'https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Kategorie+%3D+%27FAQ%27+AND+Service+%3D+%27Tethys+RDR%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson';  

  function handleTabChange(tab) {
      activeTab = tab;
  }

</script>

<div class="container mx-auto my-24">
  
  <Breadcrumbs/>

  <ProjectHeader 
  {descFetchUrl}
  {projImgUrl}
  {logoSrcUrl}
  {linkHref}
  {textColour}  />

  <Tabs
      tabs={['News', 'Info', 'FAQs']}
      activeTab={activeTab}
      onTabChange={handleTabChange}
  />

  {#if activeTab === "News"}
      <News {newsFetchUrl}/>
  {:else if activeTab === "Info"}
      <Info {infoFetchUrl}/>
  {:else if activeTab === "FAQs"}
      <Faq {faqFetchUrl}/>
  {/if}
</div>
