<div class=main>

<p>
In the spring of 2023, we launched a seminar series titled Quantum Algorithms, where you can learn about the world of quantum computing through lectures on a variety of topics, ranging from established findings to ongoing research, delivered by both students and researchers.
</p>

<p>
Chair: <a href="https://cs.bme.hu/~friedl">Katalin Friedl</a>, <a href="http://gilyen.hu">András Gilyén</a>
</p>

<details>
  <summary>2024. 05. 16. Péter Kutas: Quantum cryptanalysis of isogeny-based cryptography</summary>
  <p>
    Isogeny-based cryptography is  one of the newest branches of post-quantum cryptography. The main appeal of isogenies is that you can design a variety of schemes from them and they all require relatively small bandwidth. The talk will focus on quantum cryptanalysis of isogeny-based schemes. This will involve applications of hidden shift, hidden subgroup algorithms and connections to pathfinding in graphs. I will demonstrate the recent break of pSIDH and improved quantum algorithms for finding fixed degree isogenies and pose an array of open problems which do not require isogeny expertise.
  </p>
</details>

<details>
  <summary>2024. 04. 11. Jakab Csatári: Near-Optimal Quantum Algorithms for Multivariate Mean Estimation</summary>
  <p><a href="https://arxiv.org/abs/2111.09787">https://arxiv.org/abs/2111.09787</a></p>
  <p>
    Based on the article of Arjan Cornelissen, Yassine Hamoudi and Sofiene Jerbi, we will look into the problem of estimating in Euclidean norm the mean of a vector-valued random variable with finite mean and covariance. Unlike classically, where any univariate estimator can be turned into a multivariate estimator with at most a logarithmic overhead in the dimension, no similar result can be proved in the quantum setting. Previously S. Heinrich ruled out the existence of a quantum advantage for the mean estimation problem when the sample complexity is smaller than the dimension.
  </p>
  
  <a href="https://doi.org/10.1006/jcom.2001.0629">https://doi.org/10.1006/jcom.2001.0629</a>
  
  <p>
    The main result of the authors is to show that, outside this low-precision regime, there is a quantum estimator that outperforms any classical estimator. Their approach is substantially more involved than in the univariate setting, where most quantum estimators rely only on phase estimation, exploiting a variety of additional algorithmic techniques such as amplitude amplification, the Bernstein-Vazirani algorithm, and quantum singular value transformation.
  </p>
</details>

<details>
  <summary>2024. 03. 21. Watch together: Tony Metger, QIP 2024, Unitary Complexity and the Uhlmann Transformation Problem</summary>
  State transformation problems such as compressing quantum information or breaking quantum commitments are fundamental quantum tasks. However, their computational difficulty cannot easily be characterized using traditional complexity theory, which focuses on tasks with classical inputs and outputs.
  
  To study the complexity of such state transformation tasks, we introduce a framework for unitary synthesis problems, including notions of reductions and unitary complexity classes. We use this framework to study the complexity of transforming one entangled state into another via local operations. We formalize this as the Uhlmann Transformation Problem, an algorithmic version of Uhlmann's theorem. Then, we prove structural results relating the complexity of the Uhlmann Transformation Problem, polynomial space quantum computation, and zero knowledge protocols.
  
  The Uhlmann Transformation Problem allows us to characterize the complexity of a variety of tasks in quantum information processing, including decoding noisy quantum channels, breaking falsifiable quantum cryptographic assumptions, implementing optimal prover strategies in quantum interactive proofs, and decoding the Hawking radiation of black holes. Our framework for unitary complexity thus provides new avenues for studying the computational complexity of many natural quantum information processing tasks.
</details>

<details>
  <summary>2023-12-04 Márton Áron — Kvantumáramkörök hatékony szimulációja Fermionikus Lineáris Optikával</summary>
  <a
  href="https://quszit.github.io/seminar/aron-marton-2023-11-14-seminar-efficient-simulation-of-quantum-circuits-with-fermionic-linear-optics.pdf"
  
    >Diasor</a>



1) Kvantumalgoritmusok hatékony szimulációja Majorana-fermionok segítségével:
- Kvantumbitek reprezentálása fermionokkal (Abrikoszov-reprezentáció)
- Kapukészlet: Fermionikus Lineáris Optika
- Hatékonyan tárolható állapotok: gaussi állapotok

2) A Fermionikus Lineáris Optikában megengedett kapuk:
- Időfejlesztés egy nemkölcsönható Hamilton-operátorral
- Majorana-párok mérése

3) A felületi kód állapotpreparációjának szimulálása Fermionikus Lineáris Optika segítségével ([Bravyi, Sergey, et al. npj Quantum Information 4.1 (2018)](https://arxiv.org/abs/1710.02270)):
- A felületi kód és annak Majorana-reprezentációja
- A stabilizátormérések statisztikájának szimulálása.

</details>

<details>
  <summary>2023-11-27 Asbóth János — Clifford-áramkörök szimulációja Heisenberg-képben, és pár szó a fermionokról</summary>
  <a
  href="https://quszit.github.io/seminar/janos-asboth-2023-11-14-seminar-clifford-szimulator.pdf"
 
    >Diasor</a>


1) Clifford-szimulátor alapgondolata (1998, Gottesman, [[arxiv:quant-ph/9807006]](https://arxiv.org/abs/quant-ph/9807006))
- Heisenberg-kép vs Schrödinger-kép, Heisenberg-kép kvantumszámítógépekre
- Clifford-operátorok, pl. CNOT
- Stabilizátorformalizmus, -állapotok

2) Mérések a Clifford-szimulátorban

3) A szimuláció gyorsítása
- 2004, Aaronson & Gottesman, [[Phys. Rev. A 70, 052328 (2004)]](https://arxiv.org/abs/quant-ph/0406196)
- 2021, Gidney, [[Quantum 5, 497 (2021)]](https://arxiv.org/abs/2103.02202)

4) Fermionok: mik azok? 
- Ábrázolásuk kvantumbitekkel: Jordan-Wigner stringek

</details>

<details>
  <summary>Pituk Sára 2023-11-20 — Elfs, trees and quantum walks</summary>
Az előadásban [Simon Apers és Stephen Piddock ''Elfs, teres and quantum walks''](https://arxiv.org/abs/2211.16379) című cikkéről lesz szó. Ennek a témája egy kvantumbolyongásos algoritmus, ami egy gráfon vett véletlen bolyongás érkezési eloszlása szerint vesz mintát a gráf megjelölt csúcsai közül. Az eredmény a bolyongások és elektromos hálózatok közötti kapcsolaton alapszik.

</details>

<details>
  <summary>Gilyén András 2023-11-06 — Iterative refinement for quantum tomography and quantum linear equation solving</summary>
  We show how to use iterative refinement techniques, which is a technique from the 60's suited
for computers with low-precision arithmetic, for more efficient pure quantum state tomography,
and for more efficient quantum linear equation solving via a divide and conquer strategy,
which quadratically improves the condition number dependence of earlier methods and
matches that of the conjugate gradient method for generic non-Hermitian matrices.

</details>

<details>
  <summary>2023-09-25 Kiss Tamás — Kvantumbitek gazdag dinamikája</summary>
  <a
  href="https://quszit.github.io/seminar/tamas-kiss-2023-09-18-seminar-rich-dynamics-of-qubits.pdf"
 
    >Diasor</a>
Egy kétállapotú, nemrelativisztikus kvantumrendszer (vagyis egy
kvantumbit) az egyik legegyszerűbb nemtriviális fizikai objektum.
Időfejlődését zárt rendszer esetén unitér operátor, nyílt
kvantumcsatornákban pedig egy CPTP (teljesen pozitív, nyomőrző)
leképezés írja le. Ezek a leképezések lineárisak a rendszer állapotára
nézve. Ilyen esetben a kezdő kvantumállapotot kissé megváltoztatva a
végállapot sem változik nagyon. A kvantuminformatikai protokollok
között azonban ennél általánosabb viselkedés is megjelenhet. Tekintsük
azonosan preparált rendszerek sokaságát, amely sokaságot egy
kvantumállapottal írhatunk le. Ekkor megtehetjük azt, hogy páronként
vesszük a rendszereket, végzünk rajtuk valamilyen műveletet, majd a
pár egyik tagját megmérjük. Végül a mérés eredményétől függően
megtartjuk vagy eldobjuk a pár másik részét (posztszelekció). Ez a
gondolat húzódik a kvantummechanikai összefonódás (entanglement)
növelését célzó eljárás, a kvantumállapot-disztilláció mögött is,
ilyenkor a sokaságot két- vagy többrészű rendszerek alkotják.

A fenti eljárás iterációja már a legegyszerűbb esetben is nemlineáris,
determinisztikus kvantumdinamikához vezethet. A kialakuló komplex
káosz eltér mind a klasszikus mechanikában ismert kaotikus
dinamikától, mind a szokásos kvantumkáosztól, ahol általában unitér
időfejlődést tételeznek fel. A kialakuló dinamika ideális esetben
(ahol nincs hiba vagy zaj sem a preparált kezdőállapotokban sem az
eljárás többi lépésében) egy n-edfokú komplex racionális törtfüggvény
iterációjával írható le. Ezeket a dinamikai rendszereket mintegy 100
éve tanulmányozzák matematikusok, sok eredmény ezek közül jól
használható az említett fizikai rendszerek viselkedésének megértésére.
Például megvalósítható az ún. Lattès map vagy kirajzolódhat egy szép,
fraktáldimenziós Julia-halmaz (vagy akár egy Mandelbrot halmaz is) a
kvantumbitet reprezentáló Bloch-gömb felszínén.

A fizikai megvalósítás során nem tekinthetünk el a zajtól, hibáktól. A
legegyszerűbben figyelembe vehető zaj az, ami a kezdőállapotban van
jelen. Ekkor szemléletesen a Bloch-gömb belseje reprezentálja a kevert
állapotokat, a gömb középpontja felé haladva nő a zaj. Bemutatok egy
konkrét esetet, ahol elsősorban numerikus vizsgálatokon alapuló
eredményeink azt mutatják, hogy a felszíni fraktál nem tűnik el a zaj
hatására. A felszínhez közeli gömbhéjakon a fraktál numerikusan
becsült dimenziója állandó marad, majd egy jól meghatározható pont
után (ami a gömb belsejében lévő fixpont) hirtelen eltűnik. Hasonló
folyamat játszódik le ha ezt a folyamatot n-ed rendűre általánosítjuk.
Más zajtípusokról is említést teszek majd. Nyitott kérdés, hogy mi az
a mélyebb matematikai struktúra ami összeköti a gömb felszínén és a
gömb belsejében lejátszódó folyamatot? Egy másik érdekes
általánosítás, ha kvantumbitek helyett magasabb dimenziós rendszereket
veszünk, ezek lehetnek qubit-párok, qubit n-esek, vagy más rendszerek
is, ahol persze szintén megjelenhet a zaj.

</details>

<details>
  <summary>Kutas Péter 2023-05-26 — Kvantumalgoritmusok az izogénia-alapú kriptográfiában</summary>
  A poszt-kvantum kriptográfia feladata olyan protokollok kidolgozása, amelyek olyan nehéz problémán alapulnak, amelyekre nem ismert hatékony kvantumalgoritmus. Ennek számos irányzata közül az egyik legújabb az izogénia-alapú kriptográfia, ahol a nehéz probléma két (szuperszinguláris) elliptikus görbe közötti izogénia keresése. Izogéniákkal valósíthatóak meg a kriptográfia csoporthatások is, amelyek a diszkrét logaritmus legközellebbi poszt-kvantum rokonai. Az előadásban különböző izogénia problémákra és kriptográfiai csoporthatások invertálására vonatkozó kvantumalgoritmusokat tekintjük át. Ezek tipikusan különböző rejtett eltolás és rejtett részcsoport problémák lesznek.
</details>

<details>
  <summary>Csatári Jakab 2023-05-19 — Kvantumos bonyolultsági osztályok</summary>
  <a
  href="https://quszit.github.io/seminar/jakab-csatari-2023-05-19-seminar-kvantum-bonyolultsagelmeleti-szeparacio-relacios-osztalyokra.pdf"

    >Diasor</a>Egy idei cikk egyik eredményét dolgoznám fel, ami arról szól hogy relációs bonyolultsági osztályokat hogyan érint kvantum vs klasszikus advice string.  
A cikk: A Qubit, a Coin, and an Advice String Walk Into a Relational Problem - Scott Aaronson, Harry Buhrman, William Kretschmer ([https://arxiv.org/abs/2302.10332](https://arxiv.org/abs/2302.10332))  
És az első eredményükről szeretnék beszélni, az FBQP/poly és FBQP/qpoly közötti szeparációról.

</details>


<details>
  <summary>Galambos Máté 2023-04-28 — Összefonódás és ami mögötte van</summary>
  
- Bell-teszt
  - CHSH egyenlőtlenség maximuma klasszikus esetben
  - CHSH maximum kvantumos esetben, Tsirelson korlát
  - Elméleti CHSH maximum, szuprakvantum fizika
- Ekert protokoll
  - E91 protokoll, mint a Bell teszt alkalmazása
  - Kulcsszétosztás
- Pauli teleportáció
  - Pauli teleportáció posztszelekcióval
  - Algoritmikus következmények, Pauli teleportáció, mint kezdetleges előszámítás
- A teleportáció új fajtája, a kapu-alapú teleportáció
  - A kapu-alapú teleportáció, mint kvantumos előszámítás
  - Korlátok, fidelitás, aszimptotikus természet
  - Instant kvantumszámítás
- Kvantumkriptográfia a kulcsszétosztáson túl\*
  - Helyhitelesítés (távoli kommunikációs partner helyének tesztelése)
  - Teleportációs támadás a helyhitelesítés ellen
- Szuprakvantum fizika és következményei\*\*
  - Popescu-Rohrlich dobozok (PR box)
  - Véletlen hozzáférésű kódolás (RAC box)
  - Kommunikációs komplexitás összeomlása klasszikusan és kvantumosan
  - Lehetséges ellenérvek

\*Ha marad még rá idő.  
\*\*Érdekes lenne beszélni róla, de még nekem is jobban utána kellene néznem. Esetleg említés szintjén beleférhet.

</details>

<details>
  <summary>Gilyén András 023-04-21 — Kvantumos jelfeldolgozás és szingulárisérték transzformáció</summary>

A múlt héten tárgyalt lineáris algebrai algoritmusos keretrendszer fő állításainak egy egyszerű elemi bizonyítását fogom elmondani.

</details>

<details>
  <summary>Gilyén András 2023-04-14 — A kvantumos algoritmusok egyesített elmélete: kvantumos szingulárisérték-transzformáció</summary>
  <a
  href="https://quszit.github.io/seminar/andras-gilyen-2023-04-14-seminar-quantum-singular-value-transformation.pdf"
  
    >Diasor</a>A kvantumos algoritmusok lineáris algebrai megközelítése az elmúlt években elvezetett egy egységes algoritmikus keretrendszer kifejlesztéséhez. A kvantumos szingulárisérték-transzformáció a kvantumos algoritmusok egy olyan absztrakciója ami egyben közös általánosítása a Grover keresésnek, az amplitúdó amplifikációnak, a Szegedy-féle kvantumos bolyongásoknak, a Hamilton-szimulációnak és a kvantumos lineáris egyenlet megoldó (HHL) algoritmusoknak.

</details>

<details>
  <summary>Pituk Sára 2023-03-31 — Mintavételezés kvantumos bolyongásokkal</summary>
  A kvantumos bolyongások a klasszikus véletlen bolyongások kvantumos megfelelői. Többek között a mintavételezésben is használnak véletlen bolyongáson alapuló algoritmusokat. Az előadásban bemutatok egy eredményt, ami szerint kvantumos bolyongással kvadratikusan gyorsabban lehetséges a mintavételezés egy Markov-lánc állapotai közül tetszőleges céleloszlás esetén, mint klasszikus véletlen bolyongást használva, feltéve, hogy a kezdeti eloszlás a stacionárius eloszlás.

**Kapcsolódó irodalom**: Dante Bencivenga: Sampling Using Controlled Quantum Walks ([https://prism.ucalgary.ca/server/api/core/bitstreams/6c838e8f-958e-474c-9160-cda2d73c1623/content](https://prism.ucalgary.ca/server/api/core/bitstreams/6c838e8f-958e-474c-9160-cda2d73c1623/content))

</details>

<details>
  <summary>Gilyén András 2023-03-17 — Bevezetés a Szegedy-féle kvantumbolyongásokba</summary>
 <a
  href="https://quszit.github.io/seminar/andras-gilyen-2023-03-17-seminar-quantum-walks.pdf"
  
    >Diasor</a>

</details>

</div>

<style>
 .main {
  margin: 1rem;
 }
</style>