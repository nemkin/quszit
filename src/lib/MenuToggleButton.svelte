<script>
  export let controls;
  export let expanded = true;

  function toggle() {
    const el = document.getElementById(controls);
    if (!el) return;
    el.classList.toggle('visible');
    expanded = !expanded;
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
    stroke-width="2"
    stroke-linecap="round" 
    aria-hidden="true"
    width=16px
    height=16px
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
</button>

<style lang="scss">
  $mobile-breakpoint: 44rem;

  $icon-size: 1rem;
  $stroke-width: 2;

  button {
    display: none;
    border: none;
    cursor: pointer;
    color: inherit;
    padding: 1rem 1rem 0.5rem 1rem;
    
    svg {
      width: $icon-size;
      height: $icon-size;
      display: block;
      color: inherit;
    }

    @media (max-width: $mobile-breakpoint) { display: block; }
  }
</style>