window.addEventListener('resize', function() {
    const overlay = document.querySelector('.overlay-image');
    
    // 你可以根据需要调整 overlay 图片的其他属性
    // overlay.style.top = ...;
    // overlay.style.left = ...;
  });
  
  // 初始化设置
  window.dispatchEvent(new Event('resize'));
  