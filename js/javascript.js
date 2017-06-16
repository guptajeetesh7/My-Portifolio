
window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
 // console.log(elements);
  for (var i=0; i<elements.length; i++) {
    var Rotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (Rotate) {
      new TxtRotate(elements[i], JSON.parse(Rotate), period);
    }
  }
  
  var css = document.createElement("style");
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.1em solid #4FC3F7 }";
  document.body.append(css);
};



	var TxtRotate = function(ele, Rotate, period) {
  this.Rotate = Rotate;
  
  this.period = parseInt(period, 10);
  this.ele = ele;
  this.loopNum = 0;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.Rotate.length;
  var fullTxt = this.Rotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.ele.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var del = 300 - Math.random() * 100;

  if (this.isDeleting) { del /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    del = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    del = 500;
  }

  setTimeout(function() {
    that.tick();
  }, del);
};
