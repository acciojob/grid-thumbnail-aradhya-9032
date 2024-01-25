//your JS code here. If required.
function expandImage(src) {
  const fullsize = document.getElementById('fullsize');
  const fullsizeImg = document.getElementById('fullsize-img');
  fullsizeImg.src = src;
  fullsize.style.display = 'flex';
}

function collapseImage() {
  const fullsize = document.getElementById('fullsize');
  fullsize.style.display = 'none';
}
