<script>
	import Math from "$lib/Math.svelte"
</script>

<div class=main>

In the late 1970s, physicists proposed that since quantum mechanical phenomena could not be efficiently simulated with computers, perhaps a machine that also builds on quantum effects could solve certain problems faster. This idea gave birth to a new mathematical model of computation, the quantum Turing machine.

One of the most interesting capabilities of the quantum Turing machine is its ability to follow exponentially many computational paths simultaneously. However, the difficulty lies in extracting the result (e.g. whether there is an accepting computational path) due to the model's (and physics') rules. This new model requires ideas and techniques different from the usual algorithmic solutions. Its power is demonstrated, for example, by the fact that a quantum Turing machine can find the prime factors of a number in polynomial time (no such algorithm is known for classical Turing machines), and that searching among
unordered elements can be done in

time. The main question in the field is which types of tasks admit to a significantly more efficient quantum algorithmic solution and which are the ones the technique does not help.

The goal of the research is to examine existing algorithmic methods, develop them further, and investigate their applicability. For example to give quantum algorithmic equivalents to classical algorithms for bipartite matching, spanning trees, or network flows, and determining the extent to which they can be accelerated.

<Math tex="ax^2+bx+c=0" block/>

</div>

<style>
 .main {
  margin: 1rem;
 }
</style>