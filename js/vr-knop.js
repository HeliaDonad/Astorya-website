function isMobileOrTablet() {
  const ua = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
}

document.addEventListener("DOMContentLoaded", function () {
  const vrWrapper = document.querySelector('.vr-nav-button');
  if (vrWrapper && isMobileOrTablet()) {
    vrWrapper.style.display = 'none';
  }
});
