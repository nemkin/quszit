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
    <button
      class="nav-toggle"
      aria-label="Menu"
      aria-controls="main-menu"
      aria-expanded="true"
    >
      <svg width="24" height="24" fill="currentColor" aria-hidden="true">
        <use href="/img/icons.svg#bars"></use>
      </svg>
    </button>

    <ul id="main-menu">
      <li><a href="/news">News</a></li>
      <li><a href="/students">Students</a></li>
      <li><a href="/research">Research</a></li>
      <li><a href="/seminar">Seminar</a></li>
    </ul>
  </nav>
</header>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: Arial;
    background: none;
  }

  .brand {
    display: flex;
    align-items: center;
    margin: 1rem;
    gap: 1rem;
  }

  .title {
    display: flex;
    flex-direction: column;
  }

  .menu {
    display: flex;
    background: #8c6bc7;
  }

  .menu ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    gap: 1rem;
  }

  .menu a {
    text-decoration: none;
    color: #f7f7f8;
    font-weight: 500;
  }

  @media (max-width: 30rem) {
    .brand {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
