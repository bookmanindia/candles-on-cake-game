(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pg22_atlas_", frames: [[0,0,626,800],[628,68,18,33],[628,0,20,66]]}
];


// symbols:



(lib.bg22 = function() {
	this.spriteSheet = ss["pg22_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["pg22_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["pg22_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.candl1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-10,-16);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-5.7,-50,1,1.01,0,7.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleY:1.01,skewX:7.9,x:-5.7}},{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleY:1.012,skewX:-8.8,x:-13.1}},{t:this.instance}]},4).to({state:[{t:this.instance},{t:this.instance_1,p:{scaleY:1.01,skewX:7.9,x:-5.7}}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-50,22.6,100);


// stage content:
(lib.pg22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.candl1.addEventListener("click", fl_ClickToPosition.bind(this));
		
		function fl_ClickToPosition()
		{
			this.candl1.x = 344;
			this.candl1.y = 471;
		}
		
		this.candl2.addEventListener("click", f2_ClickToPosition.bind(this));
		
		function f2_ClickToPosition()
		{
			this.candl2.x = 281;
			this.candl2.y = 471;
		}
		
		this.candl3.addEventListener("click", f3_ClickToPosition.bind(this));
		
		function f3_ClickToPosition()
		{
			this.candl3.x = 284;
			this.candl3.y = 663;
		}
		
		this.candl4.addEventListener("click", f4_ClickToPosition.bind(this));
		
		function f4_ClickToPosition()
		{
			this.candl4.x = 347;
			this.candl4.y = 661;
		}
		
		this.candl5.addEventListener("click", f5_ClickToPosition.bind(this));
		
		function f5_ClickToPosition()
		{
			this.candl5.x = 407;
			this.candl5.y = 653;
		}
		
		this.candl6.addEventListener("click", f6_ClickToPosition.bind(this));
		
		function f6_ClickToPosition()
		{
			this.candl6.x = 229;
			this.candl6.y = 658;
		}
		
		this.candl7.addEventListener("click", f7_ClickToPosition.bind(this));
		
		function f7_ClickToPosition()
		{
			this.candl7.x = 454;
			this.candl7.y = 636;
		}
		
		this.candl8.addEventListener("click", f8_ClickToPosition.bind(this));
		
		function f8_ClickToPosition()
		{
			this.candl8.x = 180;
			this.candl8.y = 643;
		}
		
		this.candl9.addEventListener("click", f9_ClickToPosition.bind(this));
		
		function f9_ClickToPosition()
		{
			this.candl9.x = 487;
			this.candl9.y = 610;
		}
		
		this.candl10.addEventListener("click", fl0_ClickToPosition.bind(this));
		
		function fl0_ClickToPosition()
		{
			this.candl10.x = 138;
			this.candl10.y = 618;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ApOGFQgSgTAAghQAAgiASgSQARgTAcAAQAbAAARASQASATAAAhIgBAGIhkAAQABAWALAMQAMAMARAAQAMAAAJgHQAJgGAFgPIAYADQgGAVgPALQgPAMgXAAQgeAAgRgSgAo7EnQgLALgBARIBLAAQgBgRgHgIQgLgNgSAAQgPAAgLAKgAtmGMQgMgLAAgRQAAgKAEgIQAFgIAHgFQAHgFAJgDIAVgDQAbgDANgFIABgGQAAgOgHgFQgJgIgRAAQgQAAgIAGQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgFARAAQASAAAKAEQALAEAFAGQAFAGACAKQACAGAAAPIAAAeQAAAgABAJQABAIAFAIIgYAAQgEgHgBgKQgMALgMAEQgMAFgNAAQgWAAgMgLgAs6FZQgOACgGACQgGADgDAFQgDAFAAAGQAAAJAHAGQAHAGANAAQANAAALgGQAKgGAFgKQADgHAAgQIAAgIQgMAFgZAEgAvjGFQgRgSAAgiQAAgWAIgQQAHgRAPgIQAOgIASAAQAWAAAOALQAOALAEAVIgXADQgDgOgIgGQgIgHgLAAQgSAAgKAMQgLAMAAAbQAAAbAKANQALAMAQAAQAOAAAJgIQAJgIACgSIAXADQgEAYgPANQgPANgWAAQgcAAgRgSgAy7GFQgSgTAAghQAAgiASgSQARgTAcAAQAbAAARASQASATAAAhIgBAGIhkAAQABAWALAMQAMAMARAAQAMAAAJgHQAJgGAFgPIAYADQgGAVgPALQgPAMgXAAQgeAAgRgSgAyoEnQgLALgBARIBLAAQgBgRgHgIQgLgNgSAAQgPAAgLAKgA7+GFQgRgTAAgiQAAglAVgSQARgPAZAAQAcAAASASQARASAAAgQAAAagIAPQgHAPgPAJQgPAIgSAAQgcAAgSgSgA7sEqQgMAMAAAaQAAAaAMANQALANARAAQARAAALgNQAMgNAAgaQAAgZgMgNQgLgNgRAAQgRAAgLANgA2NGSQgHgEgDgHQgCgGAAgVIAAhNIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAXAAIAAASIgXAAIAABPQAAAJACADQABADADACQACABAFAAIAKgBIAEAUQgKADgIAAQgMAAgHgEgAnBGUIAAgaIAaAAIAAAagAqGGUIgthFIgQAPIAAA2IgXAAIAAi6IAXAAIAABqIA2g3IAeAAIg0AyIA5BVgAz/GUIAAhWQAAgRgHgIQgIgHgNAAQgKAAgJAFQgJAFgEAJQgEAJAAAQIAABKIgXAAIAAi6IAXAAIAABCQAQgSAZAAQAPAAALAGQALAGAFAKQAEALAAATIAABWgA4fGUIAAhSQAAgOgDgHQgDgHgGgEQgHgEgJAAQgPAAgLAJQgKAJAAAaIAABKIgXAAIAAiHIAUAAIAAATQAPgWAcAAQANAAAKAEQAKAFAFAHQAFAHACAKIABAWIAABTgAsKCJQgPgLABgWIAWAEQABAKAHAFQAIAGAPAAQAQAAAIgGQAJgHADgLQACgHAAgWQgPARgXAAQgbAAgQgUQgPgUAAgcQAAgTAHgPQAHgRANgJQAOgJASAAQAXAAAQAUIAAgRIAVAAIAAB0QAAAfgGAOQgHANgOAHQgOAIgUAAQgYAAgPgLgAr7gMQgKAMAAAXQAAAbAKAMQALAMAQAAQAPAAALgMQALgMAAgaQAAgYgLgMQgLgNgQAAQgPAAgLANgA3nCRIgDgVQAIACAFAAQAIAAAFgDQAEgCADgFIAHgRIACgFIgziHIAZAAIAcBOQAFAOAEARQAEgQAGgPIAdhOIAWAAIgzCJQgIAWgFAIQgGALgIAGQgHAFgLAAQgHAAgIgDgAa2BVQgOgLgEgVIAXgEQACAOAJAHQAIAIAQAAQAQAAAHgHQAIgGAAgJQAAgIgHgEQgFgDgSgFQgZgGgKgFQgKgEgFgJQgFgIAAgJQAAgJAEgHQAEgIAHgFQAGgEAJgDQAJgDALAAQAQAAAMAFQAMAFAFAHQAGAIACANIgWADQgCgKgHgGQgHgGgOAAQgPAAgHAFQgHAGAAAHQAAAEADADQADADAGADIAUAFQAYAHAKAEQAJAEAGAIQAFAIAAAMQAAALgGAKQgHAKgNAGQgMAFgQAAQgaAAgOgLgAYnBOQgSgSAAghQAAghASgTQARgTAcAAQAbAAARATQASASAAAhIgBAGIhkAAQABAWALAMQAMAMARAAQAMAAAJgHQAJgHAFgOIAYADQgGAUgPAMQgPALgXAAQgeAAgRgSgAY6gOQgLAKgBARIBLAAQgBgQgHgJQgLgNgSAAQgPAAgLALgAVnBXQgOgIgHgQQgIgQAAgVQAAgUAHgQQAHgQANgJQAOgJAQAAQAMAAAKAGQAJAFAGAIIAAhDIAXAAIAAC5IgVAAIAAgRQgNAUgZAAQgQAAgNgJgAVsgMQgKAMAAAaQAAAaALANQAKANAPAAQAPAAALgNQAKgMAAgZQAAgcgKgMQgLgNgQAAQgPAAgKANgAQ2BWQgMgLAAgRQAAgKAEgIQAFgJAHgFQAHgEAJgDIAVgDQAbgEANgEIABgGQAAgNgHgGQgJgIgRAAQgQAAgIAGQgHAGgEANIgWgCQADgOAHgJQAHgJANgFQANgFARAAQASAAAKAEQALAFAFAGQAFAGACAJQACAGAAAOIAAAfQAAAgABAIQABAJAFAHIgYAAQgEgHgBgJQgMAKgMAFQgMAEgNAAQgWAAgMgKgARiAiQgOACgGADQgGACgDAFQgDAFAAAGQAAAJAHAGQAHAGANAAQANAAALgFQAKgGAFgKQADgIAAgPIAAgIQgMAFgZADgAO5BOQgRgSAAgiQAAgVAIgQQAHgQAPgIQAOgJASAAQAWAAAOAMQAOALAEAUIgXACQgDgMgIgHQgIgHgLAAQgSAAgKANQgLAMAAAaQAAAbAKAMQALANAQAAQAOAAAJgJQAJgIACgRIAXADQgEAXgPANQgPANgWAAQgcAAgRgSgALhBOQgSgSAAghQAAghASgTQARgTAcAAQAbAAARATQASASAAAhIgBAGIhkAAQABAWALAMQAMAMARAAQAMAAAJgHQAJgHAFgOIAYADQgGAUgPAMQgPALgXAAQgeAAgRgSgAL0gOQgLAKgBARIBLAAQgBgQgHgJQgLgNgSAAQgPAAgLALgAIDBWQgMgLAAgRQAAgKAEgIQAFgJAHgFQAHgEAJgDIAVgDQAbgEANgEIABgGQAAgNgHgGQgJgIgRAAQgQAAgIAGQgHAGgEANIgWgCQADgOAHgJQAHgJANgFQANgFARAAQASAAAKAEQALAFAFAGQAFAGACAJQACAGAAAOIAAAfQAAAgABAIQABAJAFAHIgYAAQgEgHgBgJQgMAKgMAFQgMAEgNAAQgWAAgMgKgAIvAiQgOACgGADQgGACgDAFQgDAFAAAGQAAAJAHAGQAHAGANAAQANAAALgFQAKgGAFgKQADgIAAgPIAAgIQgMAFgZADgAEgBOQgRgSAAgiQAAglAVgSQARgPAZAAQAcAAASATQARASAAAfQAAAagIAPQgHAPgPAIQgPAIgSAAQgcAAgSgSgAEygMQgMAMAAAaQAAAaAMANQALANARAAQARAAALgNQAMgNAAgbQAAgZgMgMQgLgNgRAAQgRAAgLANgACfBOQgRgSAAgiQAAgVAIgQQAHgQAPgIQAOgJASAAQAWAAAOAMQAOALAEAUIgXACQgDgMgIgHQgIgHgLAAQgSAAgKANQgLAMAAAaQAAAbAKAMQALANAQAAQAOAAAJgJQAJgIACgRIAXADQgEAXgPANQgPANgWAAQgcAAgRgSgAAPBOQgRgSAAghQAAghARgTQARgTAcAAQAbAAARATQASASAAAhIgBAGIhkAAQABAWALAMQAMAMARAAQAMAAAJgHQAJgHAFgOIAYADQgGAUgPAMQgPALgXAAQgeAAgRgSgAAigOQgLAKgBARIBLAAQgBgQgHgJQgLgNgSAAQgPAAgLALgAh2BXQgOgIgHgQQgIgQAAgVQAAgUAHgQQAHgQANgJQAOgJAQAAQAMAAAKAGQAJAFAGAIIAAhDIAXAAIAAC5IgVAAIAAgRQgNAUgZAAQgQAAgNgJgAhxgMQgKAMAAAaQAAAaALANQAKANAPAAQAPAAALgNQAKgMAAgZQAAgcgKgMQgLgNgQAAQgPAAgKANgAlaBOQgSgSAAgiQAAglAVgSQASgPAZAAQAbAAASATQASASAAAfQAAAagIAPQgIAPgPAIQgPAIgRAAQgdAAgRgSgAlJgMQgLAMAAAaQAAAaALANQALANASAAQARAAALgNQALgNAAgbQAAgZgLgMQgMgNgQAAQgSAAgLANgAp6BOQgRgSAAghQAAghARgTQASgTAcAAQAbAAARATQARASAAAhIAAAGIhlAAQACAWALAMQALAMARAAQANAAAJgHQAIgHAGgOIAXADQgFAUgPAMQgQALgXAAQgeAAgRgSgApmgOQgLAKgBARIBLAAQgCgQgHgJQgLgNgRAAQgQAAgKALgAugBWQgMgLAAgRQAAgKAEgIQAFgJAHgFQAHgEAJgDIAVgDQAbgEANgEIABgGQAAgNgHgGQgJgIgRAAQgQAAgIAGQgHAGgEANIgWgCQADgOAHgJQAHgJANgFQANgFARAAQASAAAKAEQALAFAFAGQAFAGACAJQACAGAAAOIAAAfQAAAgABAIQABAJAFAHIgYAAQgEgHgBgJQgMAKgMAFQgMAEgNAAQgWAAgMgKgAt0AiQgOACgGADQgGACgDAFQgDAFAAAGQAAAJAHAGQAHAGANAAQANAAALgFQAKgGAFgKQADgIAAgPIAAgIQgMAFgZADgAy8BcQgLgFgFgHQgFgHgCgKQgBgGAAgPIAAhTIAXAAIAABKQAAASABAGQACAJAHAGQAHAFALAAQAKAAAJgGQAJgFAEgJQADgJAAgRIAAhIIAXAAIAACGIgUAAIAAgUQgQAXgbAAQgMAAgKgEgA1bBOQgSgSAAgiQAAglAVgSQASgPAZAAQAbAAASATQASASAAAfQAAAagIAPQgIAPgPAIQgPAIgRAAQgdAAgRgSgA1KgMQgLAMAAAaQAAAaALANQALANASAAQARAAALgNQALgNAAgbQAAgZgLgMQgMgNgQAAQgSAAgLANgA62BOQgRgSAAgiQAAglAVgSQARgPAZAAQAcAAASATQARASAAAfQAAAagIAPQgHAPgPAIQgPAIgSAAQgcAAgSgSgA6kgMQgMAMAAAaQAAAaAMANQALANARAAQARAAALgNQAMgNAAgbQAAgZgMgMQgLgNgRAAQgRAAgLANgAKgBbQgHgEgDgGQgDgHAAgUIAAhNIgRAAIAAgSIARAAIAAghIAXgOIAAAvIAXAAIAAASIgXAAIAABOQAAAKABADQABACADACQADACAFAAIAKgBIADAUQgKACgHAAQgNAAgGgEgAmaBbQgHgEgDgGQgDgHAAgUIAAhNIgRAAIAAgSIARAAIAAghIAXgOIAAAvIAXAAIAAASIgXAAIAABOQAAAKABADQABACADACQADACAFAAIAKgBIADAUQgKACgHAAQgNAAgGgEgA72BbQgHgEgDgGQgCgHAAgUIAAhNIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAXAAIAAASIgXAAIAABOQAAAKACADQABACADACQACACAFAAIAKgBIAEAUQgKACgIAAQgMAAgHgEgAXiBdIAAi5IAXAAIAAC5gAUZBdIAAhSQAAgNgDgHQgDgHgGgEQgHgEgJAAQgPAAgLAJQgKAKAAAZIAABJIgXAAIAAiGIAUAAIAAAUQAPgXAcAAQANAAAKAFQAKAEAFAHQAFAHACAKIABAVIAABTgAGoBdIAAiGIAUAAIAAAVQAIgOAHgFQAGgFAIAAQAMAAAMAIIgIAVQgIgFgJAAQgHAAgGAFQgGAEgDAIQgEALAAAPIAABGgAxDBdIAAiGIAUAAIAAAVQAIgOAHgFQAGgFAIAAQAMAAAMAIIgIAVQgIgFgJAAQgHAAgGAFQgGAEgDAIQgEALAAAPIAABGgAY3isQgPgLABgWIAWADQABALAHAEQAIAHAPAAQAQAAAIgHQAJgGADgMQACgHAAgWQgPASgXAAQgbAAgQgUQgPgUAAgcQAAgUAHgQQAHgQANgJQAOgJASAAQAXAAAQATIAAgQIAVAAIAAB0QAAAggGANQgHANgOAIQgOAHgUAAQgYAAgPgKgAZGlDQgKANAAAYQAAAaAKANQALAMAQAAQAPAAALgMQALgMAAgaQAAgZgLgNQgLgMgQAAQgPAAgLAMgATmjeQgOgJgHgQQgHgQAAgVQAAgUAGgQQAHgRAOgIQANgJARAAQAMAAAJAFQAKAFAGAIIAAhCIAXAAIAAC6IgWAAIAAgRQgMAUgZAAQgQAAgOgJgATrlDQgKANAAAaQAAAaALANQALANAPAAQAPAAAKgMQALgMAAgaQAAgbgLgNQgLgNgPAAQgPAAgLAMgAP0jnQgSgTAAgiQAAglAVgSQASgPAZAAQAbAAASASQASASAAAgQAAAagIAPQgIAPgPAJQgPAIgRAAQgdAAgRgSgAQFlCQgLAMAAAaQAAAaALANQALANASAAQARAAALgNQALgNAAgaQAAgZgLgNQgMgNgQAAQgSAAgLANgANzjnQgRgSAAgiQAAgWAHgQQAHgRAPgIQAPgIARAAQAWAAAOALQAOALAEAVIgWADQgDgOgIgGQgIgHgMAAQgRAAgLAMQgLAMAAAbQAAAbALANQAKAMARAAQANAAAJgIQAJgIADgSIAWADQgDAYgPANQgQANgWAAQgbAAgRgSgALxjnQgRgSAAgiQAAgWAHgQQAHgRAPgIQAPgIARAAQAWAAAOALQAOALAEAVIgWADQgDgOgIgGQgIgHgMAAQgRAAgLAMQgLAMAAAbQAAAbALANQAKAMARAAQANAAAJgIQAJgIADgSIAWADQgDAYgPANQgQANgWAAQgbAAgRgSgAJbjgQgMgLAAgRQAAgKAEgIQAFgIAHgFQAHgFAJgDIAVgDQAbgDANgFIABgGQAAgOgHgFQgJgIgRAAQgQAAgIAGQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgFARAAQASAAAKAEQALAEAFAGQAFAGACAKQACAGAAAPIAAAeQAAAgABAJQABAIAFAIIgYAAQgEgHgBgKQgMALgMAEQgMAFgNAAQgWAAgMgLgAKHkTQgOACgGACQgGADgDAFQgDAFAAAGQAAAJAHAGQAHAGANAAQANAAALgGQAKgGAFgKQADgHAAgQIAAgIQgMAFgZAEgAGVjgQgOgLgEgVIAXgEQACAOAJAHQAIAHAQAAQAQAAAHgGQAIgHAAgIQAAgIgHgFQgFgDgSgEQgZgHgKgEQgKgFgFgIQgFgIAAgKQAAgJAEgIQAEgIAHgFQAGgEAJgCQAJgDALAAQAQAAAMAEQAMAFAFAIQAGAIACANIgWADQgCgLgHgFQgHgGgOAAQgPAAgHAFQgHAFAAAHQAAAFADADQADAEAGACIAUAGQAYAGAKAFQAJAEAGAIQAFAHAAAMQAAAMgGAKQgHAKgNAFQgMAGgQAAQgaAAgOgLgAEGjnQgSgTAAghQAAgiASgSQARgTAcAAQAbAAARASQASATAAAhIgBAGIhkAAQABAWALAMQAMAMARAAQAMAAAJgHQAJgGAFgPIAYADQgGAVgPALQgPAMgXAAQgeAAgRgSgAEZlFQgLALgBARIBLAAQgBgRgHgIQgLgNgSAAQgPAAgLAKgABGjeQgOgJgHgQQgIgQAAgVQAAgUAHgQQAHgRANgIQAOgJAQAAQAMAAAKAFQAJAFAGAIIAAhCIAXAAIAAC6IgVAAIAAgRQgNAUgZAAQgQAAgNgJgABLlDQgKANAAAaQAAAaALANQAKANAPAAQAPAAALgMQAKgMAAgaQAAgbgKgNQgLgNgQAAQgPAAgKAMgAjqjgQgMgLAAgRQAAgKAEgIQAFgIAHgFQAHgFAJgDIAVgDQAbgDANgFIABgGQAAgOgHgFQgJgIgRAAQgQAAgIAGQgHAFgEAOIgWgDQADgOAHgJQAHgJANgEQANgFARAAQASAAAKAEQALAEAFAGQAFAGACAKQACAGAAAPIAAAeQAAAgABAJQABAIAFAIIgYAAQgEgHgBgKQgMALgMAEQgMAFgNAAQgWAAgMgLgAi+kTQgOACgGACQgGADgDAFQgDAFAAAGQAAAJAHAGQAHAGANAAQANAAALgGQAKgGAFgKQADgHAAgQIAAgIQgMAFgZAEgAlnjnQgRgSAAgiQAAgWAIgQQAHgRAPgIQAOgIASAAQAWAAAOALQAOALAEAVIgXADQgDgOgIgGQgIgHgLAAQgSAAgKAMQgLAMAAAbQAAAbAKANQALAMAQAAQAOAAAJgIQAJgIACgSIAXADQgEAYgPANQgPANgWAAQgcAAgRgSgAo/jnQgSgTAAghQAAgiASgSQARgTAcAAQAbAAARASQASATAAAhIgBAGIhkAAQABAWALAMQAMAMARAAQAMAAAJgHQAJgGAFgPIAYADQgGAVgPALQgPAMgXAAQgeAAgRgSgAoslFQgLALgBARIBLAAQgBgRgHgIQgLgNgSAAQgPAAgLAKgAyCjnQgRgTAAgiQAAglAVgSQARgPAZAAQAcAAASASQARASAAAgQAAAagIAPQgHAPgPAJQgPAIgSAAQgcAAgSgSgAxwlCQgMAMAAAaQAAAaAMANQALANARAAQARAAALgNQAMgNAAgaQAAgZgMgNQgLgNgRAAQgRAAgLANgA3NjnQgRgSAAgiQAAgWAIgQQAHgRAPgIQAOgIASAAQAWAAAOALQAOALAEAVIgXADQgDgOgIgGQgIgHgLAAQgSAAgKAMQgLAMAAAbQAAAbAKANQALAMAQAAQAOAAAJgIQAJgIACgSIAXADQgEAYgPANQgPANgWAAQgcAAgRgSgA7kjhQgTgNgKgXQgKgXAAgbQAAgdALgVQALgWAVgLQAUgMAZAAQAcAAATAPQATAOAIAaIgZAFQgGgUgMgJQgNgJgSAAQgWAAgOAKQgPAKgGARQgFASAAASQAAAYAHASQAGARAPAJQAPAJARAAQAUAAAPgMQAOgMAFgYIAZAHQgIAegUAQQgUAQgdAAQgeAAgTgMgAsRjaQgHgEgDgHQgCgGAAgVIAAhNIgRAAIAAgSIARAAIAAghIAWgOIAAAvIAXAAIAAASIgXAAIAABPQAAAJACADQABADADACQACABAFAAIAKgBIAEAUQgKADgIAAQgMAAgHgEgAXzjYIAAhSQAAgOgDgHQgCgHgHgEQgHgEgJAAQgPAAgKAJQgLAJAAAaIAABKIgXAAIAAiHIAVAAIAAATQAPgWAcAAQAMAAAKAEQAKAFAGAHQAFAHACAKIABAWIAABTgAVjjYIAAiHIAWAAIAACHgAR7jYIAAiHIAVAAIAAAUQAIgOAGgFQAHgEAIAAQALAAAMAHIgHAVQgJgFgIAAQgIAAgGAFQgGAFgCAIQgEAMAAAOIAABHgADBjYIAAi6IAXAAIAAC6gAgHjYIAAhSQAAgOgDgHQgDgHgGgEQgHgEgJAAQgPAAgLAJQgKAJAAAaIAABKIgXAAIAAiHIAUAAIAAATQAPgWAcAAQANAAAKAEQAJAFAFAHQAFAHACAKIABAWIAABTgAqDjYIAAhWQAAgRgHgIQgIgHgNAAQgKAAgJAFQgJAFgEAJQgEAJAAAQIAABKIgXAAIAAi6IAXAAIAABCQAQgSAZAAQAPAAALAGQALAGAFAKQAEALAAATIAABWgAujjYIAAhSQAAgOgDgHQgDgHgGgEQgHgEgJAAQgPAAgLAJQgKAJAAAaIAABKIgXAAIAAiHIAUAAIAAATQAPgWAcAAQANAAAKAEQAKAFAFAHQAFAHACAKIABAWIAABTgA0BjYIgthFIgQAPIAAA2IgWAAIAAi6IAWAAIAABqIA2g3IAeAAIg0AyIA5BVgA4QjYIAAiHIAWAAIAACHgA5LjYIAAi6IAXAAIAAC6gAVjl4IAAgaIAWAAIAAAagA4Ql4IAAgaIAWAAIAAAag");
	this.shape.setTransform(215.3,289.5);

	this.candl6 = new lib.candl1();
	this.candl6.name = "candl6";
	this.candl6.parent = this;
	this.candl6.setTransform(320.5,350.6,0.825,0.825,0,0,0,3.1,3.1);

	this.candl7 = new lib.candl1();
	this.candl7.name = "candl7";
	this.candl7.parent = this;
	this.candl7.setTransform(347.1,350.6,0.825,0.825,0,0,0,3.2,3.1);

	this.candl5 = new lib.candl1();
	this.candl5.name = "candl5";
	this.candl5.parent = this;
	this.candl5.setTransform(293.6,350.6,0.825,0.825,0,0,0,2.9,3.1);

	this.candl4 = new lib.candl1();
	this.candl4.name = "candl4";
	this.candl4.parent = this;
	this.candl4.setTransform(267.7,350.6,0.825,0.825,0,0,0,3.7,3.1);

	this.candl3 = new lib.candl1();
	this.candl3.name = "candl3";
	this.candl3.parent = this;
	this.candl3.setTransform(241.1,350.6,0.825,0.825,0,0,0,3.8,3.1);

	this.candl8 = new lib.candl1();
	this.candl8.name = "candl8";
	this.candl8.parent = this;
	this.candl8.setTransform(374.1,350.6,0.825,0.825,0,0,0,3.8,3.1);

	this.candl10 = new lib.candl1();
	this.candl10.name = "candl10";
	this.candl10.parent = this;
	this.candl10.setTransform(427.9,350.6,0.825,0.825,0,0,0,4.5,3.1);

	this.candl9 = new lib.candl1();
	this.candl9.name = "candl9";
	this.candl9.parent = this;
	this.candl9.setTransform(401,350.6,0.825,0.825,0,0,0,4.1,3.1);

	this.candl2 = new lib.candl1();
	this.candl2.name = "candl2";
	this.candl2.parent = this;
	this.candl2.setTransform(213.5,350.6,0.825,0.825,0,0,0,4,3.1);

	this.candl1 = new lib.candl1();
	this.candl1.name = "candl1";
	this.candl1.parent = this;
	this.candl1.setTransform(188,350.6,0.825,0.825,0,0,0,4.3,3.1);

	this.instance = new lib.bg22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.candl1},{t:this.candl2},{t:this.candl9},{t:this.candl10},{t:this.candl8},{t:this.candl3},{t:this.candl4},{t:this.candl5},{t:this.candl7},{t:this.candl6},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(313,400,626,800);
// library properties:
lib.properties = {
	id: 'A399AA658A9CDE49BF1044130B813FB3',
	width: 626,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pg22_atlas_.png", id:"pg22_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A399AA658A9CDE49BF1044130B813FB3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;