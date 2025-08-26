<script>
  export let controls;
  export let expanded = true;

  function toggle() {
    const el = document.getElementById(controls);
    if (!el) return;

    if (el.style.display === "none") {
      el.style.display = ""; // let CSS decide normal layout
      expanded = true;
    } else {
      el.style.display = "none";
      expanded = false;
    }
  }
</script>

<button
  type="button"
  class="nav-toggle"
  aria-controls={controls}
  aria-expanded={expanded}
  on:click={toggle}
>
  <slot />
</button>