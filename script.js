// Scroll-to-top button (optional — add a button with class .scroll-top if desired)
const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');
  if (!btnScrollTop) return;
  if (document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
};
document.addEventListener('scroll', scrollUp);
