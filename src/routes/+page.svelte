<div class="main">

  <p> Our group works with various aspects of quantum computing and quantum algorithms.</p>

  <p>You can subscribe to our mailing list here: <a href="https://www.cs.bme.hu/mailman3/postorius/lists/quantum.cs.bme.hu/">quantum(at)cs.bme.hu</a></p>

  <div class="people">
    <div class="person">
      <h3>Katalin Friedl</h3>
      <p>associate professor</p>
      <p>
        <a href="mailto:friedl@cs.bme.hu">friedl(at)cs.bme.hu</a><br>
        <a href="https://cs.bme.hu/~friedl/indexen.html">cs.bme.hu/~friedl</a><br>
        <a href="https://www.szit.bme.hu/english/about_us/contact.html">IB137/a</a>
      </p>
    </div>

    <div class="person">
      <h3>László Kabódi</h3>
      <p>assistant lecturer</p>
      <p>
        <a href="mailto:kabodil@gmail.com">kabodil(at)gmail.com</a><br>
        <a href="https://www.szit.bme.hu/english/about_us/contact.html">IB137/a</a>
      </p>
    </div>

    <div class="person">
      <h3>Viktória Nemkin</h3>
      <p>PhD student</p>
      <p>
        <a href="mailto:nemkin@cs.bme.hu">nemkin(at)cs.bme.hu</a><br>
        <a href="https://cs.bme.hu/~nemkin">cs.bme.hu/~nemkin</a>
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  $mobile-breakpoint: 44rem;

  .main {
    margin: 1rem;
  }

  .people {
    display: flex;
    flex-direction: row;
    margin: 2rem 0;
    gap: 1rem;
    display: flex;
    @media (max-width: $mobile-breakpoint) { flex-direction: column; }
  }

  .person {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border-left: 4px solid #ccc;
    background: #fdfdfd;
  }

  .person h3 {
    margin: 0;
  }

</style>
