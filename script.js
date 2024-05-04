document.getElementById('about-button').addEventListener('click', function() {
  var content = document.getElementById('about-content');
  if (content.style.display === 'none') {
    content.style.display = 'block';
    setTimeout(function() {
      content.classList.add('show');
    }, 50);
  } else {
    content.classList.remove('show');
    setTimeout(function() {
      content.style.display = 'none';
    }, 500);
  }
});

document.getElementById('about-us-button').addEventListener('click', function() {
  var content = document.getElementById('about-us-content');
  if (content.style.display === 'none') {
    content.style.display = 'block';
    setTimeout(function() {
      content.classList.add('show');
    }, 50);
  } else {
    content.classList.remove('show');
    setTimeout(function() {
      content.style.display = 'none';
    }, 500);
  }
});
