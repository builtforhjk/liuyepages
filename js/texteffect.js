var text = [
	"怎么样呀？在浙大过的还好吗？",
	"我是四年前那个傻傻呼呼的你啊",
	"现在的你可了不敌了，你已经是一个浙江大学大学二年级的女孩子了",
	"你已经有了自己独立思考的能力,也长大了，连易拉罐就可以自己打开了",
	"不得不说，学会这个技能的，你还是不错的",
	"在大学要努力，勤俭节约，因为将来的你肯定是一个富婆",
	"现在的你应该有自己的男票了吧？",
	"如果你连一个男票都没有的话，那我就还瞧不起你了",
	"以你的聪慧才智，我相信你是可以的",
	"虽然学医的话会有累的时候，会顾不上",
	"有时候但是你要记得你自己选择的路",
	"你走吧，不要抱怨自己，因为你需要相信信念",
	"也不能辜负别人对你的期待啊",
	"别人对你的期待那么大，到了那个时候，丫丫就过去了",
	"高中三年需要你的努力开学后就把手机戒掉吧，不要再碰",
	"如果连自己都管不好，那怎么帮助别人呢？",
	"世界上需要帮助的人很多，我希望你可以节省节约",
	"把多余的钱转给需要帮助的人，做一个善良的女孩子",
	"不要买那么多口红啊，你又用不完，三年的保质期，会过期的",
	"希望你可以赢得奖学金，并且在专业中，赫赫有名，不要辜负我对你的期待哟",
	"在对的时间做对的事，多想比自己优秀的人学习学习他们",
	"向他们看齐，结交一些优秀的人当朋友",
	"尽量做一个温柔的女孩子，如果不温柔，做一个活泼的女孩子也是可以的",
	"最后一定要出去看看，看看世界！",
	"希望你每天都会开开心心，永远不要哭鼻子,哭鼻子的女孩子是最丑的",
	"你，这个手机我不知道你还能不能保留起，希望你能都留着他，这是一个很好的记忆",
	"叶叶是个小太阳，浑身充满着能量！",
	"带给别人正能量。是对别人最大的尊重。不要把你内心的负能量带给任何人",
	"你不喜欢的人你可以装作看不见。但不可以伤害他们",
	"因为记住一直要做一个善良的人",
	"希望你也可以拥有。你最喜欢的男孩子",
	"陪你一起旅游，一起奋斗。一去付出",
	"我希望你的一生不是平凡的。而是有坎坷，有喜悦，有泪水，有快乐的。",
	"好啦好啦，爷不说了。都有点想哭……",
	"最后你就要记住。一定要相信自己！我永远爱四年后的你"
];
var idx = 0;
(function($) {
	"use strict";
		var isOn = 0, sets, fx, toAnimate = "#effect", settings = {
			animation:8,
			animationType: "in",
			backwards: false,
			easing: "easeOutQuint",
			speed: 1000,
			sequenceDelay: 100,
			startDelay: 0,
			offsetX: 100,
			offsetY: 50,
			onComplete: fireThis,
			restoreHTML: true
		};

		jQuery(document).ready(function() {
			fx = jQuery("#effect");
			jQuery.cjTextFx(settings);
			jQuery.cjTextFx.animate(toAnimate);
		});
			
		function fireThis() {
			if(isOn === 4) return;
				(isOn < 3) ? isOn++ : isOn = 2;
				
				switch(isOn) {

					case 1:
						sets = {animation: 8,animationType: "out", restoreHTML: false};
					break;
					
					case 2:
						fx.html(text[idx]);
						idx++;
						sets = {animation: 1};
					break;
					
					case 3:
						sets = {animation: 1, animationType: "out", restoreHTML: false};
					break;

						
			   	    default :
					break;


				}
			jQuery.cjTextFx.animate(toAnimate, sets);
			if(idx == text.length) return;
		}

})(jQuery);
