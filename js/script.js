
window.onload=function(){

	let selectHeader=document.getElementsByClassName("select__header")[0];
	let customSelect=document.getElementsByClassName("select")[0];
	let originalSelect=document.getElementsByClassName("original-select")[0];
	let customSelectItems=document.getElementsByClassName("select__item");
	selectHeader.onclick=function(){
		customSelect.classList.toggle('select_active');
	};
	for(let index=0;index<customSelectItems.length;index++){
		customSelectItems[index].onclick=function(){
			let value=this.innerText;
			document.getElementsByClassName('select__current')[0].innerText=value;
			originalSelect.selectedIndex=index;
			customSelect.classList.remove("select_active");
		};
	}

};
