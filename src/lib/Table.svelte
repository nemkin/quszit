<slot />

<style>
  :global(.responsive-table) {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }
  
  :global(.responsive-table th) {
    background-color: #f2f2f2;
    padding: 0.8rem;
    border-bottom: 1px solid #ccc;
  }
  
  :global(.responsive-table td) {
    padding: 0.8rem;
    border-bottom: 1px solid #ccc;
  }
  
  :global(.responsive-table .table-row:hover) {
    background-color: #f8f8f8;
  }

  @media (max-width: 30rem) {
    :global(.responsive-table),
    :global(.responsive-table td),
    :global(.responsive-table tr) {
      display: block;
    }
    
    :global(.responsive-table thead) {
      display: none;
    }
    
    :global(.responsive-table tr) {
      border: 1px solid #ccc;
      margin-bottom: 10px;
      padding: 10px;
    }
    
    :global(.responsive-table td) {
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding: 8px 8px 8px 8px;
      text-align: left;
    }

    :global(.responsive-table td:last-child) {
      border-bottom: 0;
    }
    
    :global(.responsive-table td:before) {
      content: attr(data-label) ": ";
      position: static;
      display: block;
      font-weight: 600;
      color: #333;
    }
  }
</style>