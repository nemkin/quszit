<script>
  import Math from "$lib/Math.svelte";
  import Table from "$lib/Table.svelte";

  const m1 = "n";
  const m2 = "\\Theta(\\sqrt{n})";
</script>

<Table>
  <div class="main">
    <h2>Getting started</h2>

    <p>On this page, we have collected some resources to get started in quantum computing and quantum algorithms.</p>

    <h3>Courses</h3>
    
    <p>BME VIK HIT offers several introductory courses on quantum computing (some also available in English), for example:</p>
    <ul>
      <li><a href="https://portal.vik.bme.hu/kepzes/targyak/VIHIMA18/">Kvantuminformatika és -kommunikáció</a>,</li>
      <li><a href="https://portal.vik.bme.hu/kepzes/targyak/VIHIAV06/">Introduction to Quantum Computing and Communication</a>,</li>
      <li>many further courses, as part of the <a href="https://www.hit.bme.hu/page/kvantuminformatika">Quantum Information Science</a> minor specialization within the Computer Science Engineering MSc program.</li>
    </ul>

    <p>Some advanced level courses given in Budapest include:</p>
    <ul>
      <li>András Gilyén's <a href="http://gilyen.hu/teaching/QC_2025.html">Quantum Computing</a> at ELTE,</li>
      <li>Mihály Weiner's <a href="https://www.ait-budapest.com/syllabuses/quantum-probability-and-quantum-logic">Quantum Probability and Quantum Logic</a> at AIT,</li>
      <li>Milán Mosonyi's <a href="https://www.ttk.bme.hu/BMETEAOBsMBKIE-00">Introduction to Quantum Information Theory</a> at BME TTK.</li>
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
