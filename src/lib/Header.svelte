<script>
  import MenuToggleButton from "$lib/MenuToggleButton.svelte";
</script>

<header>
  <div class="brand">
    <img
      src="/img/quantum-cat.jpg"
      loading="lazy"
      width="100"
      height="100"
      alt="QuSZIT logo: cute Schrödinger's cat inside the box, half dead half alive"
    />
    <div>
      <h1>QuSZIT</h1>
      <p>Quantum algorithms at BME VIK SZIT</p>
    </div>
  </div>

  <nav class="menu" aria-label="Main navigation">
    <MenuToggleButton controls="main-menu" />
    <ul id="main-menu" class="hidden">
      <li><a href="/news">News</a></li>
      <li><a href="/students">Students</a></li>
      <li><a href="/research">Research</a></li>
      <li><a href="/seminar">Seminar</a></li>
    </ul>
  </nav>
</header>

<style lang="scss">
  @use "../global.scss" as *;

  .brand {
    gap: 1rem;
    margin: 1rem;

    @include mobile-flex;
  }

  .menu {
    gap: 1rem;
    padding: 1rem;
    background: #8c6bc7;
    color: #f7f7f8;

    @include mobile-flex;

    ul {
      gap: 1rem;
      list-style: none;
      color: inherit;

      @include mobile-flex;
      @include mobile {
        &.hidden {
          display: none;
        }
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
