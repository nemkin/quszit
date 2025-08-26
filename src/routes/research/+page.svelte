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
        <td data-label="Title"><a href="https://arxiv.org/abs/2102.00949" target="_blank">Quantum Inspired Adaptive Boosting</a></td>
        <td data-label="Year">2021</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Kabódi</td>
        <td data-label="Title">A weighted QuIDD data structure</td>
        <td data-label="Year">2019</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Kabódi</td>
        <td data-label="Title"><a href="https://doi.org/10.14232/actacyb.23.2.2017.5" target="_blank">Storing the Quantum Fourier Operator in the QuIDD Data Structure</a></td>
        <td data-label="Year">2017</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Kabódi</td>
        <td data-label="Title">Embedding logical functions into the Chimera graph</td>
        <td data-label="Year">2017</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Kabódi</td>
        <td data-label="Title"><a href="https://doi.org/10.3311/PPee.8214" target="_blank">An idea to improve QuIDD based quantum simulations</a></td>
        <td data-label="Year">2015</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Ivanyos, Magniez, Santha, Sen</td>
        <td data-label="Title"><a href="https://arxiv.org/abs/quant-ph/0211091" target="_blank">Hidden translation and translating coset in quantum computing</a></td>
        <td data-label="Year">2014</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Magniez, Santha, Sen</td>
        <td data-label="Title"><a href="https://arxiv.org/abs/quant-ph/0208184" target="_blank">Quantum testers for hidden group properties</a></td>
        <td data-label="Year">2009</td>
      </tr>
      
      <tr class="table-row">
        <td data-label="Authors">Friedl, Ivanyos, Magniez, Santha, Sen</td>
        <td data-label="Title"><a href="https://arxiv.org/abs/quant-ph/0211091" target="_blank">Hidden translation and orbit coset in quantum computing</a></td>
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