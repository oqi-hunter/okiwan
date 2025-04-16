<script setup lang="ts">
import SectionWrapper from '../layouts/SectionWrapper.vue';
import AppTitle from '../parts/AppTitle.vue';
</script>

<template>
  <SectionWrapper class="flex flex-col gap-12 bg-white" id="access">
    <AppTitle>
      <template #title>ACCESS</template>
      <template #description>アクセス</template>
    </AppTitle>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.39769486359!2d127.69674497595511!3d26.24875318830742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56bbc5026fb31%3A0xbc135c191115b185!2z44CSOTAxLTIxMjUg5rKW57iE55yM5rWm5re75biC5Luy6KW_77yR5LiB55uu77yS4oiS77yRIOWFseWSjOODk-ODqw!5e0!3m2!1sja!2sjp!4v1744202191644!5m2!1sja!2sjp"
      width="100%"
      height="450"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </SectionWrapper>
</template>
