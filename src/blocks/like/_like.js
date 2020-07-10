export function likeCounter(id) {
  const item = document.getElementById(id);
  item.addEventListener('click', () => {
    if (item.classList.contains('like--active')) {
      item.classList.remove('like--active')
      item.textContent = (--item.textContent)
    } else {
      item.classList.add('like--active')
      item.textContent = (++item.textContent)
    }
  })

}


