<script>
  import MenuButton from '$lib/MenuButton.svelte';
  import Bars from '$lib/icons/Bars.svelte';
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
    <div class="title">
      <h1>QuSZIT</h1>
      <p>Quantum algorithms at BME VIK SZIT</p>
    </div>
  </div>

  <nav class="menu" aria-label="Main navigation">
    <MenuButton controls="main-menu" \>
    <ul id="main-menu">
      <li><a href="/news">News</a></li>
      <li><a href="/students">Students</a></li>
      <li><a href="/research">Research</a></li>
      <li><a href="/seminar">Seminar</a></li>
    </ul>
  </nav>
</header>

<style>
  .brand {
    display: flex;
    align-items: center;
    margin: 1rem;
    gap: 1rem;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .menu {
    display: flex;
    padding: 0.5rem;
    gap: 1rem;
    background: #8c6bc7;
  }

  .menu ul {
    display: flex;
    list-style: none;
    gap: 1rem;
  }

  .menu ul a {
    display: block;
    text-decoration: none;
    color: #f7f7f8;
    font-weight: 500;
  }

  @media (max-width: 30rem) {
    .brand { flex-direction: column; }
    .menu { flex-direction: column; }
    .menu ul { flex-direction: column; }
  }
</style>
