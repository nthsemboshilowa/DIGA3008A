// This is for the blogs, essays and design section

document.querySelectorAll('.date-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const blogId = btn.getAttribute('data-blog');
    document.querySelectorAll('.blog-number').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.date-btn').forEach(b => b.classList.remove('selected'));

    const blogNumber = document.querySelector(`#blog-${blogId} .blog-number`);
    if (blogNumber) {
      blogNumber.classList.add('active');
      btn.classList.add('selected');

      // Optionally scroll into view
      document.getElementById(`blog-${blogId}`).scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// 