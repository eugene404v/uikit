
export function expand(triggerId, triggerActiveClass) {
  const trigger = document.getElementById(triggerId);
  trigger.addEventListener('click', () => {
    trigger.classList.toggle(triggerActiveClass);
  })
}
