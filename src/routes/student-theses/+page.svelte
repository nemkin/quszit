<script>
  import Math from "$lib/Math.svelte"
  import Table from "$lib/Table.svelte"

  const m1 = "n";
  const m2 = "\\Theta(\\sqrt{n})";
</script>

<Table>
  <div class="main">

  <h2>Author theses</h2>

  <p>A collection of theses written by Authors at our group on quantum computing.</p>

  <table class="responsive-table">
    <thead>
      <tr>
        <th>Author</th>
        <th>Type</th>
        <th>Title</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-row">
        <td data-label="Author">Viktória Nemkin</td>
        <td data-label="Type"><span class="type msc">MSc</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/theses/nemkin-2022-quantum-bioinformatics-msc.pdf">Application of quantum computing in Bioinformatics</a></td>
        <td data-label="Year">2022</td>
      </tr>
      <tr class="table-row">
        <td data-label="Author">Viktória Nemkin</td>
        <td data-label="Type"><span class="type tdk">TDK</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/theses/nemkin-2022-memory-quantum-simulation-tdk.pdf">Optimizing memory usage in quantum algorithm simulation</a></td>
        <td data-label="Year">2022</td>
      </tr>
      <tr class="table-row">
        <td data-label="Author">Márton Zalavári</td>
        <td data-label="Type"><span class="type msc">MSc</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/theses/zalavari-2021-kozelito-vagasok-msc.pdf">Módszerek közel optimális vágások keresésére</a></td>
        <td data-label="Year">2021</td>
      </tr>
      <tr class="table-row">
        <td data-label="Author">Márton Zalavári</td>
        <td data-label="Type"><span class="type tdk">TDK</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/theses/zalavari-2021-qubo-tdk.pdf">Kvadratikus optimalizálás kvantum alapú számítógéppel</a></td>
        <td data-label="Year">2021</td>
      </tr>
      <tr class="table-row">
        <td data-label="Author">Viktória Nemkin</td>
        <td data-label="Type"><span class="type tdk">TDK</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/theses/nemkin-2021-simulate-qwalk-tdk.pdf">Simulation of quantum walks on a classical computer</a></td>
        <td data-label="Year">2021</td>
      </tr>
      <tr class="table-row">
        <td data-label="Author">Dániel Szabó</td>
        <td data-label="Type"><span class="type msc">MSc</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/theses/szabo-2021-tulajdonsag-teszteles-msc.pdf">Függvény és gráftulajdonságok lokális tesztelése</a></td>
        <td data-label="Year">2021</td>
      </tr>
      <tr class="table-row">
        <td data-label="Author">Dániel Szabó</td>
        <td data-label="Type"><span class="type bsc">BSc</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/theses/szabo-2018-kvantum-gepi-tanulas-bsc.pdf">Kvantuminformatika és gépi tanulás</a></td>
        <td data-label="Year">2018</td>
      </tr>
      <tr class="table-row">
        <td data-label="Author">Dániel Szabó</td>
        <td data-label="Type"><span class="type tdk">TDK</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/theses/szabo-2018-gepi-tanulas-kvantum-tdk.pdf">Gépi tanulás és kvantuminformatika</a></td>
        <td data-label="Year">2018</td>
      </tr>
      <tr class="table-row">
        <td data-label="Author">Dániel Szabó</td>
        <td data-label="Type"><span class="type tdk">TDK</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/theses/szabo-2017-grafelm-dwave-tdk.pdf">Gráfelméleti algoritmusok beágyazása D-Wave kvantumszámítógépbe</a></td>
        <td data-label="Year">2017</td>
      </tr>
      <tr class="table-row">
        <td data-label="Author">László Kabódi</td>
        <td data-label="Type"><span class="type msc">MSc</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/theses/kabodi-2014-kvantum-bolyongas-msc.pdf">Kvantumalgoritmusok véletlen bolyongással</a></td>
        <td data-label="Year">2014</td>
      </tr>
      <tr class="table-row">
        <td data-label="Author">László Kabódi</td>
        <td data-label="Type"><span class="type tdk">TDK</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/theses/kabodi-2014-kvantumszimulacio-gyorsitas-tdk.pdf">Kvantumáramkör-szimulációs rendszer gyorsításának vizsgálata</a></td>
        <td data-label="Year">2014</td>
      </tr>
    </tbody>
  </table>
  </div>
</Table>

<style lang="scss">
.main {
  margin: 1rem;
}
.type {
  
  $type-colors: (
    msc: #dc2626,
    bsc: #059669,
    tdk: #4f46e5
  );
  
  @each $type, $color in $type-colors {
    &.#{$type} {
      --type-color: #{$color};
      color: var(--type-color);
    }
  }
}
</style>
