<script>
    export let logoSrc;
    export let description;
    export let linkHref;
  </script>

<section class="mb-5">
  <div class="flex justify-center items-center mt-20 px-6">
    <div class="flex w-full max-w-4xl">
      <img src="/tethysHome.png" alt="" class="h-36" />
      <div class="flex-grow ml-8">
        <img src={logoSrc} alt="Logo" class="h-10" />
        <p class="text-md text-light-grey pt-6">{description}</p>
        <a href={linkHref} class="text-teal underline absolute pt-3">tethys.at</a>
      </div>
    </div>
  </div>
</section>