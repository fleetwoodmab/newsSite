<script lang="ts">
    import { t } from "$lib/translations/i18n";
    import HomeNews from '$lib/components/HomeNews.svelte';
    import { onMount } from 'svelte';

  const geoURL = "https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Geoinformation%27+AND+Kategorie+%3D+%27TeaserBild%27+AND+Sprache+%3D+%27EN%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson"; 
  const tethysURL = "https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Tethys+RDR%27+AND+Kategorie+%3D+%27TeaserBild%27+AND+Sprache+%3D+%27DE%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson";
  const geomapsURL = "https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27GeoSphere+Maps%27+AND+Kategorie+%3D+%27TeaserBild%27+AND+Sprache+%3D+%27DE%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson";
  const thesauURL = "https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Thesaurus%27+AND+Kategorie+%3D+%27TeaserBild%27+AND+Sprache+%3D+%27DE%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson";

  let mainImageImg = '';
  let tethysImg = '';
  let geomapsImg = '';
  let thesauImg = '';

  onMount(async () => {
    const response1 = await fetch(geoURL);
    const data1 = await response1.json();
    mainImageImg = data1.features[0].attributes.Inhalt; 

    const response2 = await fetch(tethysURL);
    const data2 = await response2.json();
    tethysImg = data2.features[0].attributes.Inhalt; 

    const response3 = await fetch(geomapsURL);
    const data3 = await response3.json();
    geomapsImg = data3.features[0].attributes.Inhalt; 

    const response4 = await fetch(thesauURL);
    const data4 = await response4.json();
    thesauImg = data4.features[0].attributes.Inhalt; 
  });
</script>

<!-- Hero Section -->
<section class="mt-20 max-w-screen-lg mx-auto mb-20">
    <div class="flex flex-row w-full max-w-5xl mx-auto ml-0 space-y-0 space-x-8">
        <div class="flex-grow flex items-start">
            <img src={mainImageImg} alt="" class="max-w-max w-80 object-contain border-2 p-2">
        </div>
        <div class="flex-grow mt-0 text-justify">
            <h1 class="text-3xl mb-5 font-semibold text-dark-blue-green">Geoinformation</h1>
            <p class="text-lg text-light-grey">{$t("homepage.description")}</p>
        </div>
    </div>    
</section>




<!-- News Accordion Section -->
<section class="max-w-screen-lg mx-auto mb-20">
   
    <HomeNews/>
</section>

<!-- Services Section -->
<section class="bg-blue-grey pt-10 pb-20">
    <div class="grid grid-cols-1 sm:grid-cols-3 mx-auto max-w-screen-lg">
        <h2 class="text-2xl col-span-3 mb-10 text-left font-bold text-dark-blue-green">Services</h2> 

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 col-span-3 pb-10 text-center"> 
            <a href="/tethys" class="hover:scale-95 duration-150 ease-out hover:ease-in"><img src="{tethysImg}" alt="" class="border-2 p-2 border-dark-grey"><span class="pt-2">Tethys RDR</span></a>
            <a href="/tethys" class="hover:scale-95 duration-150 ease-out hover:ease-in"><img src="{geomapsImg}" alt="" class="border-2 p-2 border-dark-grey"><span>GeoSphere Maps</span></a>
            <a href="/thesaurus" class="hover:scale-95 duration-150 ease-out hover:ease-in"><img src="{thesauImg}" alt="" class="border-2 p-2 border-dark-grey"><span>Thesaurus</span></a>
        </div>
    </div>
</section>


<style>
    * {
        height: 100%;
    }
</style>
