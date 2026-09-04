(function () {
  var banner = document.getElementById('banner');
  if (banner && Date.now() > new Date(banner.dataset.hideAfter).getTime()) {
    banner.style.display = 'none';
  }
})();
