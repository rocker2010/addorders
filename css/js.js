var tag = 0;

function shopdz_alert(title, second, callback) {
	$('.shopdz_alert').remove();
	$('#alertbox').remove();
	var _tag = tag++;
	var html = '<div id="alertbox"><div id="address-remind-' + _tag + '" class="address-remind shopdz_alert">' + title +
		'</div></div>';
	if (typeof second == 'number') {
		var timeout = second * 1000;
	} else {
		var timeout = 1000;
	}
	$('body').append(html);
	$('#address-remind-' + _tag).fadeIn().delay(timeout).fadeOut(1000, 'swing', function() {
		if (typeof callback == 'function') callback();
		$('#address-remind-' + _tag).remove();
		$('#alertbox').remove();
	});
}

function hidemask() {
	$(".mask").hide();
	$('html').attr("style", "")
}

function canncel() {
	$(".mask").hide();
	$('html').attr("style", "");
	shopdz_alert("订单已经取消");
}
$("#cancleOrder").click(function() {
	$("#msgSuccess").show();
	$('html').css("overflow", "hidden")
});



$(".errorInfo .close").click(function() {
	$(".errorInfo").fadeOut();
})

$("#nextBtn").click(function() {
	if ($('#mysel').val() == "1") {
		$('.formSuc.error').removeClass('error');
		$('#mysel').parent().addClass("error");
		shopdz_alert("请先选择专卖店");
	} else if ($('#mynum').val() == "") {
		$('.formSuc.error').removeClass('error');
		$('#mynum').parent().addClass("error");
		shopdz_alert("请选择购买人");
	} else if ($('#mynum').val() == "111111") {
		$('.formSuc.error').removeClass('error');
		$(".errorInfo").fadeIn();
		$('#name').hide()
	} else if ($('#mynum').val() == "222222") {
		$('.formSuc.error').removeClass('error');
		$("#weifu").fadeIn();
		$('html').css("overflow", "hidden")
	} else {
		$('.formSuc.error').removeClass('error');
		$('#name').show();
		$('.count').show();
		$('.maskIn').fadeOut();
	}
});

$("#submitOrder").click(function() {
	if ($(".payStyleList li").filter(".select").length <= 0 && $('#proNum').val() == "") {
		shopdz_alert("请先至少选择一个商品");
	} else if ($(".payStyleList li").filter(".select").length <= 0 && $('#proNum').val() != "") {
		$("#msgInfo").show();
		$('html').css("overflow", "hidden")
	} else if ($('#qidongbao').val() != "" || $('#proNum').val() != "") {
		console.log("bbbbbbb");
		$("#msgSuccess").show();
		$('html').css("overflow", "hidden")
	}
});

$(".payStyleList > li").click(function() {
	$(this).toggleClass("select");
	if ($(".payStyleList li").filter(".select").length >= 2) {
		$(".payStyleList li").filter(".select").removeClass("select");
		$(this).toggleClass("select");
	} else {
		$(this).siblings(".select").removeClass("select");
	}
})
$(document).ready(function() {
	$('#example2').DataTable({
		responsive: true,
		ordering: false,
		info: false,
		columnDefs: [{
				responsivePriority: 1,
				targets: 0
			},
			{
				responsivePriority: 2,
				targets: 4
			},
			{
				responsivePriority: 3,
				targets: 1
			}
		]
	});
	$('#example').DataTable({
		responsive: true,
		searching: false,
		paging: false,
		ordering: false,
		info: false,
		columnDefs: [{
				responsivePriority: 1,
				targets: 0
			},
			{
				responsivePriority: 2,
				targets: 4
			},
			{
				responsivePriority: 3,
				targets: 1
			}
		]
	});

});
