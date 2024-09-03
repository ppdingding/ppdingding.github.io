var posts=["2024/05/05/hello-world/","2024/05/05/主题测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };