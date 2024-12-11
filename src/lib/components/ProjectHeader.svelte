<script>
    export let projImg;
    export let logoSrc;
    export let description;
    export let linkHref;
  </script>

<section class="mb-5">
  <div class="flex justify-center items-center px-6">
    <div class="flex w-full max-w-5xl">
      <img src={projImg} alt="" class="h-48 border-2 p-2" />
      <div class="flex-grow ml-8">
        <img src={logoSrc} alt="Logo" class="h-12" />
        <p class="text-lg text-light-grey pt-8 text-justify">{description}</p>
        <a href={linkHref} class="text-teal underline absolute pt-9">tethys.at</a>
      </div>
    </div>
  </div>
</section>