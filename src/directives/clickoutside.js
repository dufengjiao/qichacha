export default {
  bind(el, binding) {
    console.log(binding);
    document.addEventListener('mouseenter', (e) => {
      console.log(e.target, el)
      if (el.contains(e.target)) return false;
      if (binding.expression) {
        binding.value(e);
      }
    })
  }
}
