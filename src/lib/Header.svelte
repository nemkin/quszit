<script>
  import ToggleButton from '$lib/ToggleButton.svelte';
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
    <ToggleButton controls="main-menu" class="nav-toggle">
      <Bars class="nav-toggle-bars"/>
    </ToggleButton>
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

  .nav-toggle {
    display: none;
    text-decoration: none;
    text-align: center;
    color: #f7f7f8;
    border: none;
    cursor: pointer;
  }

  .nav-toggle-bars {
    height: 1.2rem;
    width: 1.2rem;
    display: block;
  }

  @media (max-width: 30rem) {
    .brand { flex-direction: column; }
    .menu { flex-direction: column; }
    .menu ul { flex-direction: column; }
  }
</style>
