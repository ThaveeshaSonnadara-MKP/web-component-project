<template>
  <section>
    <script
      src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
      type="module"
      defer
    ></script>
    <div>
      <div class="flex-start">
        <dotlottie-player
          src="https://lottie.host/2e3dd6ce-3a2e-41aa-b202-58c0387499f6/Qf8L1lhHjz.lottie"
          background="transparent"
          speed="1"
          style="width: 50px; height: 50px"
          loop
          autoplay
        ></dotlottie-player>
        <p>{{ msg }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["msg"],
};
</script>

<style>
.flex-start {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  width: 100%;
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
}
h1 {
  color: green;
}
p {
  color: blue;
}
section {
  background-color: oldlace;
  margin-bottom: 4rem;
}
</style>
