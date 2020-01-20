<template>
  <div class="w-full">
    <div class="w-full">
      <!-- <div class="flex-1">
        <Header />
        <Info />
        <Movie />
        <Timeline />
      </div>
      <Sidebar />-->
      <Sidebar />
      <Header />
      <Info />
      <Movie />
      <Timeline />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Movie from "./components/Movie";
import Timeline from "./components/Timeline";
import Sidebar from "./components/Sidebar";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Sidebar,
    Info,
    Movie,
    Timeline
  }
};
</script>

<style>
</style>
