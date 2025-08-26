<script>
  import MenuToggleButton from "$lib/MenuToggleButton.svelte";
</script>

<header>
  <a class="brand" href="/">
    <img
      src="/img/quantum-cat.png"
      loading="lazy"
      width="140"
      height="150"
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
    margin: 1rem;
    gap: 1rem;
    text-decoration: none;
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
