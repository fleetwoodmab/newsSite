<script>
    import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
    import { HomeOutline } from "flowbite-svelte-icons";

</script>
<Breadcrumb classOl="mt-[-100px] ml-6" >
    <BreadcrumbItem classHome="text-xs" href="/" home>
      <svelte:fragment slot="icon"><HomeOutline class="w-4 h-4 me-2" /></svelte:fragment>
      Home</BreadcrumbItem>
    <BreadcrumbItem classLink="text-xs cursor-default hover:text-gray-700" href="/">Services</BreadcrumbItem>
    <BreadcrumbItem classSpan="text-xs cursor-default">Tethys</BreadcrumbItem>
</Breadcrumb>