/**
 * Created by imaginato on 19-5-21.
 */
// require('createjs/builds/createjs-2015.11.26.min');

var canvas,stage,container,images = {},sprite;

function init() {
	canvas = document.getElementById("mainView");
	stage = new createjs.Stage(canvas);//获取舞台
	container = new createjs.Container();//新建容器
	stage.addChild(container);//将容器放在舞台上
	createjs.Touch.enable(stage);//使移动端支持createjs的鼠标事件

	var loader = new createjs.LoadQueue(false);//这里一共可以是3个参数 第一个是是否用XHR模式加载 第二个是基础路径  第三个是跨域
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("progress",progressHandler);
	loader.addEventListener("complete",completeHandler);
	loader.loadManifest([
		{src:"./img/back.jpg", id:"back"},
		{src:"./img/sprite.png", id:"sprite"}
	]);

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", stageBreakHandler);

}
function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
	//这是单个文件加载完成的事件，把它保存到一个地方之后可以直接拿来创建对象
}
function progressHandler(event)
{
	//这里可以写加载进度 event.progress
}
function completeHandler(event)
{
	//全部加载完成
	event.currentTarget.removeEventListener("fileload",handleFileLoad);
	event.currentTarget.removeEventListener("progress",progressHandler);
	event.currentTarget.removeEventListener("complete",completeHandler);

	var bitmap = new createjs.Bitmap(images.back);
	container.addChild(bitmap);
	bitmap.addEventListener("click",clickHandler)
	var spriteData = {
		images: [images.sprite],
		frames: {width:80, height:80, regX: 40, regY:40},
		animations: {
			stand:[0,3,"stand",0.2],
			walk:{
				frames: [4,5,6,7,6,5],
				next: "walk",
				speed: 0.2
			}
		}
	};
	var spriteSheet = new createjs.SpriteSheet(spriteData);
	sprite = new createjs.Sprite(spriteSheet,"stand");
	container.addChild(sprite);
	sprite.x = 100;
	sprite.y = 100;
}
function clickHandler(event)
{
	createjs.Tween.removeTweens(sprite);
	if(event.rawX > sprite.x)
	{
		sprite.scaleX = 1;
	}
	else if(event.rawX < sprite.x)
	{
		sprite.scaleX = -1;//为-1的时候可以转方向
	}
	createjs.Tween.get(sprite).to({x:event.rawX,y:event.rawY},1000).call(tweenCompleteHandler);
	sprite.gotoAndPlay("walk");
}
function tweenCompleteHandler()
{
	sprite.gotoAndPlay("stand");
}
function stageBreakHandler(event)
{
	stage.update();
}