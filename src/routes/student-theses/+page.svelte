<script>
  import Math from "$lib/Math.svelte"
  import Table from "$lib/Table.svelte"

  const m1 = "n";
  const m2 = "\\Theta(\\sqrt{n})";
</script>

<Table>
  <div class="main">

  <h2>Student theses</h2>

  This is a collection of theses written by students at our group on quantum computing.

  <table class="responsive-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Student</th>
        <th>Type</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-row">
        <td data-label="Date">2022. 12. 18.</td>
        <td data-label="Student">Viktória Nemkin</td>
        <td data-label="Type"><span class="type msc">MSc</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/students/nemkin-2022-quantum-bioinformatics-msc.pdf" target="_blank">Application of quantum computing in Bioinformatics</a></td>
      </tr>
      <tr class="table-row">
        <td data-label="Date">2022. 11. 17.</td>
        <td data-label="Student">Viktória Nemkin</td>
        <td data-label="Type"><span class="type tdk">TDK</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/students/nemkin-2022-memory-quantum-simulation-tdk.pdf" target="_blank">Optimizing memory usage in quantum algorithm simulation</a></td>
      </tr>
      <tr class="table-row">
        <td data-label="Date">2021. 12. 18.</td>
        <td data-label="Student">Márton Zalavári</td>
        <td data-label="Type"><span class="type msc">MSc</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/students/zalavari-2021-kozelito-vagasok-msc.pdf" target="_blank">Módszerek közel optimális vágások keresésére</a></td>
      </tr>
      <tr class="table-row">
        <td data-label="Date">2021. 11. 16.</td>
        <td data-label="Student">Márton Zalavári</td>
        <td data-label="Type"><span class="type tdk">TDK</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/students/zalavari-2021-qubo-tdk.pdf" target="_blank">Kvadratikus optimalizálás kvantum alapú számítógéppel</a></td>
      </tr>
      <tr class="table-row">
        <td data-label="Date">2021. 11. 16.</td>
        <td data-label="Student">Viktória Nemkin</td>
        <td data-label="Type"><span class="type tdk">TDK</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/students/nemkin-2021-simulate-qwalk-tdk.pdf" target="_blank">Simulation of quantum walks on a classical computer</a></td>
      </tr>
      <tr class="table-row">
        <td data-label="Date">2021. 05. 21.</td>
        <td data-label="Student">Dániel Szabó</td>
        <td data-label="Type"><span class="type msc">MSc</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/students/szabo-2021-tulajdonsag-teszteles-msc.pdf" target="_blank">Függvény és gráftulajdonságok lokális tesztelése</a></td>
      </tr>
      <tr class="table-row">
        <td data-label="Date">2018. 12. 06.</td>
        <td data-label="Student">Dániel Szabó</td>
        <td data-label="Type"><span class="type bsc">BSc</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/students/szabo-2018-kvantum-gepi-tanulas-bsc.pdf" target="_blank">Kvantuminformatika és gépi tanulás</a></td>
      </tr>
      <tr class="table-row">
        <td data-label="Date">2018. 11. 14.</td>
        <td data-label="Student">Dániel Szabó</td>
        <td data-label="Type"><span class="type tdk">TDK</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/students/szabo-2018-gepi-tanulas-kvantum-tdk.pdf" target="_blank">Gépi tanulás és kvantuminformatika</a></td>
      </tr>
      <tr class="table-row">
        <td data-label="Date">2017. 11. 16.</td>
        <td data-label="Student">Dániel Szabó</td>
        <td data-label="Type"><span class="type tdk">TDK</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/students/szabo-2017-grafelm-dwave-tdk.pdf" target="_blank">Gráfelméleti algoritmusok beágyazása D-Wave kvantumszámítógépbe</a></td>
      </tr>
      <tr class="table-row">
        <td data-label="Date">2014. 12. 29.</td>
        <td data-label="Student">László Kabódi</td>
        <td data-label="Type"><span class="type msc">MSc</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/students/kabodi-2014-kvantum-bolyongas-msc.pdf" target="_blank">Kvantumalgoritmusok véletlen bolyongással</a></td>
      </tr>
      <tr class="table-row">
        <td data-label="Date">2014. 11. 11.</td>
        <td data-label="Student">László Kabódi</td>
        <td data-label="Type"><span class="type tdk">TDK</span></td>
        <td data-label="Title"><a href="https://quszit.github.io/students/kabodi-2014-kvantumszimulacio-gyorsitas-tdk.pdf" target="_blank">Kvantumáramkör-szimulációs rendszer gyorsításának vizsgálata</a></td>
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
  white-space: nowrap;
  
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
