<script>
    import { onMount } from 'svelte';
  
    let features = []; 
    let errorMessage = '';

    onMount(async () => {
      try {
        const response = await fetch('https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=1%3D1&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson');
      // for Tethys only: https://gis.geosphere.at/maps/rest/services/Test/geoinformation_services_website/MapServer/2/query?where=Service+%3D+%27Tethys+RDR%27&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson
      // using Service = 'Tethys RDR'
      if (!response.ok) {
          const errorText = await response.text(); 
          throw new Error(`Network response was not ok: ${errorText}`);
        }
  
        const data = await response.json();
        features = data.features; 
      } catch (error) {
        console.error('Error fetching data:', error); 
        errorMessage = error.message; 
      }
    });
</script>

<main>
  <div class="container mx-auto my-24">
    <h1 class="mb-4 text-3xl">Service Information</h1>
    {#if errorMessage}
      <p class="text-red-500">Error: {errorMessage}</p>
    {:else if features.length > 0}
      <ul>
        {#each features as feature}
          <li class="mb-4">
            <h2 class="font-bold">{feature.attributes.Ueberschrift}</h2>
            <ul>
              <li><strong>Service:</strong> {feature.attributes.Service}</li>
              <li><strong>Kategorie:</strong> {feature.attributes.Kategorie}</li>
              <li><strong>Inhalt:</strong> {feature.attributes.Inhalt}</li>
              <li><strong>Datum:</strong> {feature.attributes.Datum}</li>
              <li><strong>eUser:</strong> {feature.attributes.eUSer}</li>
            </ul>
          </li>
        {/each}
      </ul>
    {:else}
      <p>No features found.</p>
    {/if}
  </div>
</main>
