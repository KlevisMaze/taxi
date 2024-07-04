function performSearch() {
    
    const year = document.getElementById('select-year').value;
    const style = document.getElementById('select-style').value;
    const mark = document.getElementById('select-mark').value;
    const condition = document.getElementById('select-condition').value;
    const model = document.getElementById('select-model').value;
    const price = document.getElementById('select-price').value;


    const searchQuery = {
      year: year,
      style: style,
      mark: mark,
      condition: condition,
      model: model,
      price: price
    };
}