<script>
  import { base } from '$app/paths';
  import MenuToggleButton from "$lib/MenuToggleButton.svelte";
</script>

<header>
  <a class="brand" href="{base}/">
    <img
      src="{base}/img/quantum-cat.png"
      loading="lazy"
      width="110"
      height="120"
      alt="QuSZIT logo: cute Schrödinger's cat inside the box, half dead half alive"
    />
    <div class="title">
      <h1>QuSZIT</h1>
      <p>Quantum algorithms at BME VIK SZIT</p>
    </div>
  </a>

  <nav class="menu" aria-label="Main navigation">
    <MenuToggleButton controls="main-menu" />
    <ul id="main-menu" class="hidden">
      <li><a href="{base}/">Home</a></li>
      <li><a href="{base}/seminar">Seminar</a></li>
      <li><a href="{base}/publications">Publications</a></li>
      <li><a href="{base}/student-theses">Student theses</a></li>
      <li><a href="{base}/topics">Topics</a></li>
      <li><a href="{base}/getting-started">Getting started</a></li>
    </ul>
  </nav>
</header>

<style lang="scss">
  @use "../global.scss" as *;

  * {
    margin: 0;
    padding: 0;
  }

  .brand {
    margin: 1rem;
    gap: 1rem;
    color: inherit;
    &:hover {
      opacity: 0.8;
    }

    @include mobile-flex;

    .title {
      display: flex;
      flex-direction: column;
      margin-top: auto;
      gap: 0.5rem;
    }
  }

  .menu {
    padding: 1rem;
    gap: 1rem;

    background: #8c6bc7;
    color: #f7f7f8;

    @include mobile-flex;

    ul {
      gap: 2rem;

      list-style: none;
      color: inherit;

      @include mobile-flex;
      @include mobile {
        &.hidden {
          display: none;
        }
        gap: 0.5rem;
      }

      a {
        display: block;

        text-decoration: none;
        color: inherit;
        font-weight: 500;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
</style>
