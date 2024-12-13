<script lang="ts">
    import { AccordionItem, Accordion, ImagePlaceholder } from 'flowbite-svelte';
    import { t } from "$lib/translations/i18n";
    import { AngleDownOutline, AngleUpOutline } from 'flowbite-svelte-icons';
    import HomeNews from '$lib/components/HomeNews.svelte';
    import { onMount } from 'svelte';

    const apiUrlImg = "https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Geoinformation%27+AND+Kategorie+%3D+%27TeaserBild%27+AND+Sprache+%3D+%27EN%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&uniqueIds=&returnUniqueIdsOnly=false&featureEncoding=esriDefault&f=pjson"; 
    let imageUrl = ''

    onMount(async () => {
    const response = await fetch(apiUrlImg);
    const data = await response.json();
    
    imageUrl = data.features[0].attributes.Inhalt; 
    });
</script>

<!-- Hero Section -->
<section class="mt-20 max-w-screen-lg mx-auto mb-20">
    <div class="flex flex-row w-full max-w-5xl mx-auto ml-0 space-y-0 space-x-8">
        <div class="flex-grow flex items-start">
            <img src={imageUrl} alt="" class="h-auto w-full object-contain border-2 p-2">
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
<section class="bg-blue-grey pt-20 pb-40">
    <div class="grid grid-cols-1 sm:grid-cols-3 mx-auto max-w-screen-lg">
        <h2 class="text-2xl col-span-3 mb-14 text-left font-bold text-dark-blue-green">Services</h2> 

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 col-span-3"> 
            <img src="tethysHome.png" alt="">
            <img src="geosphereMaps.png" alt="">
            <img src="thesaurus.png" alt="">
        </div>
    </div>
</section>

<style>
    * {
        height: 100%;
    }
</style>
