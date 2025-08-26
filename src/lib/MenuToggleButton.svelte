<script>
  export let controls;
  export let expanded = true;

  function toggle() {
    const el = document.getElementById(controls);
    if (!el) return;

    if (el.style.display === "none") {
      el.style.display = "";
      expanded = true;
    } else {
      el.style.display = "none";
      expanded = false;
    }
  }
</script>

<button
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

<style lang="scss">
  $icon-size: 1.2rem;
  $button-padding: 0.25rem;
  $stroke-width: 2;

  button {
    display: none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    background: transparent;
    padding: $button-padding;
    color: inherit;

    svg {
      width: $icon-size;
      height: $icon-size;
      display: block;
      color: inherit;
      
      line {
        stroke-width: $stroke-width;
      }
    }
  }
</style>