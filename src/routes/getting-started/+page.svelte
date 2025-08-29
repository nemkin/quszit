<script>
  import Math from "$lib/Math.svelte";
  import Table from "$lib/Table.svelte";

  const m1 = "n";
  const m2 = "\\Theta(\\sqrt{n})";
</script>

<Table>
  <div class="main">
    <h2>Getting started</h2>

    <p>
      On this page, we have collected resources that can help you get started in
      understanding the basics of quantum computing and quantum algorithms.
    </p>

    <h3>Courses</h3>
    <ul>
      <li>
        <a href="http://gilyen.hu/teaching/QC_2023.html">András Gilyén: Quantum Computing</a>
      </li>
      <li>
        <a href="https://portal.vik.bme.hu/kepzes/targyak/VIHIMA14/">Sándor Imre, László Bacsárdi: Kvantum-informatika és kommunikáció</a>
      </li>
      <li>
        <a href="https://www.ttk.bme.hu/BMETE92MM30">Milán Mosonyi: Mátrixanalízis és kvantum-információelmélet</a>
      </li>
    </ul>

    <h3>Books</h3>
    <ul>
      <li>
        <a href="https://link.springer.com/book/10.1007/978-3-662-09636-9">Mika Hirvensalo: Quantum Computing</a>
      </li>
      <li>
        <a href="https://doi.org/10.1002/9780470869048">Sándor Imre, Ferenc Balázs: Quantum Computing and Communications: An Engineering Approach</a>
      </li>
      <li>
        <a href="https://doi.org/10.1017/CBO9780511976667">Michael A. Nielsen, Isaac L. Chuang: Quantum Computation and Quantum Information</a>
      </li>
      <li>
        <a href="https://www.amazon.com/Computers-intractability-NP-completeness-mathematical-sciences-dp-0716710447/dp/0716710447/">Michael R. Garey, David S. Johnson: Computers and Intractability: A Guide to the Theory of NP-Completeness</a>
      </li>
    </ul>

    <h3>Lecture notes</h3>
    <ul>
      <!-- Add items here when you have them -->
    </ul>

    <h3>Misc</h3>
    <ul>
      <li>
        <a href="https://qi.nemzetilabor.hu/hu">Quantum Information National Laboratory</a>
      </li>
      <li>
        <a href="https://learning.quantum.ibm.com/">IBM Quantum Learning</a>
      </li>
      <li>
        <a href="https://www.qaif.org/events/warsaw-quantum-computing-group">Warsaw Quantum Computing Group</a>
      </li>
    </ul>
  </div>
</Table>

<style lang="scss">
  .main {
    margin: 1rem;
  }
</style>
