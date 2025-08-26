<slot />

<style>
  :global(.responsive-table) {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
  }
  
  :global(.responsive-table th) {
    background-color: #f8f9fa;
    color: #333;
    font-weight: 600;
    padding: 12px 10px;
    text-align: left;
    border-bottom: 2px solid #dee2e6;
  }
  
  :global(.responsive-table td) {
    padding: 10px;
    border-bottom: 1px solid #dee2e6;
    vertical-align: top;
  }
  
  :global(.responsive-table .table-row) {
    transition: background-color 0.2s;
  }
  
  :global(.responsive-table .table-row:hover) {
    background-color: #f8f9fa;
  }

  @media (max-width: 30rem) {
    :global(.responsive-table), :global(.responsive-table thead), :global(.responsive-table tbody), :global(.responsive-table th), :global(.responsive-table td), :global(.responsive-table tr) {
      display: block;
    }
    
    :global(.responsive-table thead tr) {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    
    :global(.responsive-table tr) {
      border: 1px solid #ccc;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 8px;
      background-color: #fff;
    }
    
    :global(.responsive-table td) {
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding: 8px 8px 8px 35%;
      text-align: left;
    }
    
    :global(.responsive-table td:before) {
      content: attr(data-label) ": ";
      position: absolute;
      left: 6px;
      width: 30%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: 600;
      color: #333;
    }
    
    :global(.responsive-table td:last-child) {
      border-bottom: 0;
    }
  }
</style>