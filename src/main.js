const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
 width = canvas.width = window.innerWidth;
 height = canvas.height = window.innerHeight;

// 生成随机数的函数

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}
function randomColor(){
  return 'rgb('+random(0,255)+', '+
            random(0,255)+', '+
            random(0,255)+')';
}
function Ball(x, y, velX, velY, color, size,velr) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
  this.velr = velr;
}
Ball.prototype.draw = function(){
  ctx.beginPath();
  let q = Math.random(1);
  ctx.fillStyle = this.color;
  //console.log('changecolor');
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
  if(this.size>5)this.size = this.size-this.velr;
}
let balls = [];


  function loop() {
    //ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    for (let i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
    }
    //console.log(balls)
    requestAnimationFrame(loop);
  }
  loop();
  document.addEventListener('keydown',function(e){
    //获取元素并设置为invisible 
    var titles = document.getElementById('titlea');
    titles.style.display = 'none';
    var canvash = document.getElementById('myCanvas');
    canvash.style.display = 'block';
    var keyData = {
      q: {
      sound: new Howl({
        src: ['assets/bubbles.mp3']
      }),
      color: '#1abc9c'
      },
      w: {
      sound: new Howl({
        src: ['assets/clay.mp3']
      }),
      color: '#2ecc71'
      },
      e: {
      sound: new Howl({
        src: ['assets/confetti.mp3']
      }),
      color: '#3498db'
      },
      r: {
      sound: new Howl({
        src: ['assets/corona.mp3']
      }),
      color: '#9b59b6'
      },
      t: {
      sound: new Howl({
        src: ['assets/dotted-spiral.mp3']
      }),
      color: '#34495e'
      },
      y: {
      sound: new Howl({
        src: ['assets/flash-1.mp3']
      }),
      color: '#16a085'
      },
      u: {
      sound: new Howl({
        src: ['assets/flash-2.mp3']
      }),
      color: '#27ae60'
      },
      i: {
      sound: new Howl({
        src: ['assets/flash-3.mp3']
      }),
      color: '#2980b9'
      },
      o: {
      sound: new Howl({
      src: ['assets/glimmer.mp3']
      }),
      color: '#8e44ad'
      },
      p: {
      sound: new Howl({
        src: ['assets/moon.mp3']
      }),
      color: '#2c3e50'
      },
      a: {
      sound: new Howl({
        src: ['assets/pinwheel.mp3']
      }),
      color: '#f1c40f'
      },
      s: {
      sound: new Howl({
        src: ['assets/piston-1.mp3']
      }),
      color: '#e67e22'
      },
      d: {
      sound: new Howl({
        src: ['assets/piston-2.mp3']
      }),
      color: '#e74c3c'
      },
      f: {
      sound: new Howl({
        src: ['assets/prism-1.mp3']
      }),
      color: '#95a5a6'
      },
      g: {
      sound: new Howl({
        src: ['assets/prism-2.mp3']
      }),
      color: '#f39c12'
      },
      h: {
      sound: new Howl({
        src: ['assets/prism-3.mp3']
      }),
      color: '#d35400'
      },
      j: {
      sound: new Howl({
        src: ['assets/splits.mp3']
      }),
      color: '#1abc9c'
      },
      k: {
      sound: new Howl({
        src: ['assets/squiggle.mp3']
      }),
      color: '#2ecc71'
      },
      l: {
      sound: new Howl({
        src: ['assets/strike.mp3']
      }),
      color: '#3498db'
      },
      z: {
      sound: new Howl({
        src: ['assets/suspension.mp3']
      }),
      color: '#9b59b6'
      },
      x: {
      sound: new Howl({
        src: ['assets/timer.mp3']
      }),
      color: '#34495e'
      },
      c: {
      sound: new Howl({
        src: ['assets/ufo.mp3']
      }),
      color: '#16a085'
      },
      v: {
      sound: new Howl({
        src: ['assets/veil.mp3']
      }),
      color: '#27ae60'
      },
      b: {
      sound: new Howl({
        src: ['assets/wipe.mp3']
      }),
      color: '#2980b9'
      },
      n: {
      sound: new Howl({
      src: ['assets/zig-zag.mp3']
      }),
      color: '#8e44ad'
      },
      m: {
      sound: new Howl({
        src: ['assets/moon.mp3']
      }),
      color: '#2c3e50'
      }
  }
 keyData[e.key].sound.play();
      let size = random(35, 50);
      let q = Math.random();
      let newcolor = ''
      let ball = new Ball(
        // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-6, 6),
        random(-6, 6),
        randomColor(),
        size,
        0.01
      );
      balls.push(ball);
      if(balls.length >24){
        balls.shift();
      }
  })  
//监听屏幕大小改变
$(window).resize(resizeCanvas);  
   
 function resizeCanvas() {  
        canvas.setAttribute("width", $(window).get(0).innerWidth);  
        canvas.setAttribute("height", $(window).get(0).innerHeight);  
        ctx.fillRect(0, 0, canvas.width, canvas.height);  
        width = window.innerWidth;
        canvas.width = width;
        height = window.innerHeight;
        canvas.height = height;
        ctx.fillRect(0, 0, width, height);
        //loop();
        //console.log('123');
 };  
   
 resizeCanvas();  

//Q
//无法在html中使用js函数，前端模块化