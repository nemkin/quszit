<script>
  import Math from "$lib/Math.svelte"
  import Table from "$lib/Table.svelte"

  const m1 = "n";
  const m2 = "\\Theta(\\sqrt{n})";
</script>

<Table>
  <div class="main">

  <h2>Publications</h2>

  <table class="responsive-table">
    <thead>
      <tr>
        <th>Authors</th>
        <th>Title</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-row">
        <td data-label="Authors">Daróczy, Friedl, Kabódi, Pereszlényi, Szabó</td>
        <td data-label="Title"><a href="https://quszit.github.io/publications/dfkpsz-2021-quantum-adaptive-boosting.pdf" target="_blank">Quantum inspired adaptive boosting</a></td>
        <td data-label="Year">2021</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Kabódi</td>
        <td data-label="Title">A weighted QuIDD data structure</td>
        <td data-label="Year">2019</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Kabódi</td>
        <td data-label="Title"><a href="https://quszit.github.io/publications/friedl-kabodi-2017-store-qft-quidd.pdf" target="_blank">Storing the quantum Fourier operator in the QuIDD data structure</a></td>
        <td data-label="Year">2017</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Kabódi</td>
        <td data-label="Title"><a href="https://quszit.github.io/publications/friedl-kabodi-2017-embedding-chimera.pdf" target="_blank">Embedding logical functions into the Chimera graph</a></td>
        <td data-label="Year">2017</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Kabódi</td>
        <td data-label="Title"><a href="https://quszit.github.io/publications/friedl-kabodi-2015-improve-quidd.pdf" target="_blank"> An idea to improve QuIDD based quantum simulations</a></td>
        <td data-label="Year">2015</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Ivanyos, Magniez, Santha, Sen</td>
        <td data-label="Title"><a href="https://quszit.github.io/publications/fimss-2014-hidden-translation-translating-coset.pdf" target="_blank">Hidden Translation and Translating Coset in quantum computing</a></td>
        <td data-label="Year">2014</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Magniez, Santha, Sen</td>
        <td data-label="Title"><a href="https://quszit.github.io/publications/fmss-2009-quantum-group-testers.pdf" target="_blank">Quantum testers for hidden group properties</a></td>
        <td data-label="Year">2009</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Ivanyos, Magniez, Santha, Sen</td>
        <td data-label="Title"><a href="https://quszit.github.io/publications/fimss-2003-hidden-translation-orbit-coset.pdf" target="_blank">Hidden Translation and Orbit Coset in quantum computing</a></td>
        <td data-label="Year">2003</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl</td>
        <td data-label="Title">Periodic functions and quantum computing</td>
        <td data-label="Year">2003</td>
      </tr>
      
    </tbody>
  </table>
  </div>
</Table>

<style lang="scss">
.main {
  margin: 1rem;
}
</style>