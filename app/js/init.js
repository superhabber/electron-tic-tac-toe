const $ = require('jquery');

const { remote } = require('electron');

var win = remote.getCurrentWindow();

$('#minimize-screen').click(function(){
	win.minimize();
});

$('#close-screen').click(function(){
	win.close();
});

function changeSelected(elem){
	if($(elem).hasClass('sp')){
		if($(elem).attr('id') == 'c'){
			$(elem).toggleClass('bordered');
			$('div.sp#x').removeClass('bordered');
			if($(elem).hasClass('bordered') && $('div.fp#x').hasClass('bordered') && ($(elem).attr('id') != $('div.fp.bordered').attr('id') )){
				$('.start').removeClass('d-none')
			}else{
				$('.start').addClass('d-none')
			}
		}else if($(elem).attr('id') == 'x') {
			$(elem).toggleClass('bordered');
			$('div.sp#c').removeClass('bordered');
			if($(elem).hasClass('bordered') && $('div.fp#c').hasClass('bordered') && ($(elem).attr('id') != $('div.fp.bordered').attr('id') )){
				$('.start').removeClass('d-none')
			}else{
				$('.start').addClass('d-none')
			}
		}
	}else if($(elem).hasClass('fp')){
		if($(elem).attr('id') == 'c'){
			$(elem).toggleClass('bordered');
			$('div.fp#x').removeClass('bordered');
			if($(elem).hasClass('bordered') && $('div.sp#x').hasClass('bordered') && ($(elem).attr('id') != $('div.sp.bordered').attr('id') )){
				$('.start').removeClass('d-none')
			}else{
				$('.start').addClass('d-none')
			}
		}else if($(elem).attr('id') == 'x') {
			$(elem).toggleClass('bordered');
			$('div.fp#c').removeClass('bordered');
			if($(elem).hasClass('bordered') && $('div.sp#c').hasClass('bordered') && ($(elem).attr('id') != $('div.sp.bordered').attr('id') )){
				$('.start').removeClass('d-none')
			}else{
				$('.start').addClass('d-none')
			}
		}
	}
}

var r_time = 1;

var started = false;

function startgame(elem){

	$(elem).hide();

	$('.who').html(r_time);

	$('.status').removeClass('d-none');
	started = true;

}

var table = {
	f: [],
	s:[]
};

$('.w').click(function(){

	if(started === false) return false;

	function win(num){
		$('.status').html('Виграв гравець '+num);
		$('.again').removeClass('d-none');
	}

	var f_user = {
		item: $('div.fp.bordered').attr('id')
	};

	let s_user = {
		item: $('div.sp.bordered').attr('id')
	};
	

	if(r_time == 1){
		table.f.push($(this).attr('value'));
		if(f_user.item == 'x'){
			$(this).html('<i class="fas fa-times" style="font-size: 56px;"></i>');
		}else{
			$(this).html('<i class="far fa-circle" style="font-size: 56px;"></i>');
		}
		r_time = 2;

	}else{
		table.s.push($(this).attr('value'));
		if(s_user.item == 'x'){
			$(this).html('<i class="fas fa-times" style="font-size: 56px;"></i>');
		}else{
			$(this).html('<i class="far fa-circle" style="font-size: 56px;"></i>');
		}
		r_time = 1;
	}

	$('.who').html(r_time);

	if(table.f.includes("1") && table.f.includes("2") && table.f.includes("3")){
		win(1);
	}else if(table.f.includes("4") && table.f.includes("5") && table.f.includes("6")){
		win(1);
	}else if(table.f.includes("7") && table.f.includes("8") && table.f.includes("9")){
		win(1);
	}else if(table.f.includes("1") && table.f.includes("5") && table.f.includes("9")){
		win(1);
	}else if(table.f.includes("3") && table.f.includes("5") && table.f.includes("7")){
		win(1);
	}else if(table.f.includes("1") && table.f.includes("4") && table.f.includes("7")){
		win(1);
	}else if(table.f.includes("2") && table.f.includes("5") && table.f.includes("8")){
		win(1);
	}else if(table.f.includes("3") && table.f.includes("6") && table.f.includes("9")){
		win(1);
	}

	if(table.s.includes("1") && table.s.includes("2") && table.s.includes("3")){
		win(2);
	}else if(table.s.includes("4") && table.s.includes("5") && table.s.includes("6")){
		win(2);
	}else if(table.s.includes("7") && table.s.includes("8") && table.s.includes("9")){
		win(2);
	}else if(table.s.includes("1") && table.s.includes("5") && table.s.includes("9")){
		win(2);
	}else if(table.s.includes("3") && table.s.includes("5") && table.s.includes("7")){
		win(2);
	}else if(table.s.includes("1") && table.s.includes("4") && table.s.includes("7")){
		win(2);
	}else if(table.s.includes("2") && table.s.includes("5") && table.s.includes("8")){
		win(2);
	}else if(table.s.includes("3") && table.s.includes("6") && table.s.includes("9")){
		win(2);
	}
	
});

$('.again').click(function(){
	window.location.href = window.location.href;
});
