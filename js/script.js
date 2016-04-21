// JavaScript Document


//表单输入内容清空
window.onload = function(){
	
	//表单内容清空
	var oText = document.getElementById('text');
	
	oText.onfocus = function(){
		if(oText.value == '支持模糊搜索，例如十月围城，可搜索十月'){
			oText.value = '';
		}
	}
	oText.onblur = function(){
		if(this.value == ''){
			this.value = '支持模糊搜索，例如十月围城，可搜索十月';
		}
	}
}