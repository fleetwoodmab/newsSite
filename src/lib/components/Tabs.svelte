<script>
    import { fade } from "svelte/transition";

    export let tabs = []; 
    export let activeTab; 
    export let onTabChange; 
  </script>
  
  <div class="flex w-full max-w-5xl mx-auto mt-20">
    <ul class="flex flex-wrap -mb-px">
      {#each tabs as tab}
        <li class="mr-2">
          <a href="#" 
             class="inline-block py-2 px-2 border-b-0 relative z-2 top-3 border-grey {activeTab === tab ? 'activeTab' : ''}" 
             on:click={() => onTabChange(tab)}> 
            {tab}
          </a>
        </li>
      {/each}
    </ul>
  </div>
  
  <style>
    .activeTab {
      border: 4px solid;
      border-bottom: none;
      font-weight: bold; 
      border-color: #e5e7eb;
      color: #3692BC;
    }
  </style>
  