<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Sledilnik</router-link>
    <button class="navbar-toggler" @click="visible=!visible">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse" v-if="visible">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'Rooms' }">Sobe</router-link> 
        </li>
        <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'About' }">About</router-link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default {
    name: "NavbarView",
    data() {
        return {
            visible: true
        }
    }
}
</script>

<style>

</style>