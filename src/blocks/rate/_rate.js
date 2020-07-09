export default document.querySelectorAll('.rate__item').forEach(item => 
  item.addEventListener('click', () => {
    item.parentNode.dataset.totalValue = item.dataset.itemValue
  }))