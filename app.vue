<template>
  <div v-text="counter" />
</template>
<script setup lang="ts">
const { counter } = useTestComposable('test');
</script>

