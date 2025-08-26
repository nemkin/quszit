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
  aria-controls={controls}
  aria-expanded={expanded}
  aria-label="Toggle navigation menu"
  on:click={toggle}
>
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    aria-hidden="true"
  >
    <line x1="3" y1="6" x2="21" y2="6" stroke-width="2" stroke-linecap="round"/>
    <line x1="3" y1="12" x2="21" y2="12" stroke-width="2" stroke-linecap="round"/>
    <line x1="3" y1="18" x2="21" y2="18" stroke-width="2" stroke-linecap="round"/>
  </svg>
</button>

<style>
button {
    display: none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    background: transparent;
    padding: 0.25rem;
  }

  svg {
    height: 1.2rem;
    width: 1.2rem;
    display: block;
    color: inherit;
  }

  /* Show the toggle button on small screens */
  @media (max-width: 30rem) {
    .button {
      display: block;
    }
  }
</style>