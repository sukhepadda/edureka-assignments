function toggleFilters(){
    const filters = document.getElementById
    ("filters");
    const arrow = document.getElementById
    ("filtersButtonArrow");
    
    if (filters.classList.contains("noDisplay")){
      filters.classList.remove("noDisplay");
      arrow.classList.add('arrowUp');
      arrow.classList.remove('arrowDown');
    }
    else{
      filters.classList.add("noDisplay");
      arrow.classList.remove('arrowUp');
      arrow.classList.add('arrowDown');
    }
  }