<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import '$lib/styles/style.css'
    import "../app.css";
    import '../i18n';
    import { fade } from 'svelte/transition';
    export let data;
</script>

<Header>
</Header>

{#key data.currentRoute}
<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot></slot> 
</main>
{/key}

<Footer>
</Footer>