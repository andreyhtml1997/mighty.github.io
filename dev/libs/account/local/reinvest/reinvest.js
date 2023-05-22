var error = "";

function removeError () {
	$(".withdraw_check").hide ();
	$(".withdraw_check[el='submit_button']").show ();
}

function addError (errTag) {
	$(".withdraw_check").hide ();
	$(".withdraw_check[el='"+ errTag +"']").show ();
}

$(document).ready (function () {
	updateForm ();
});

$(document).on ("input", "#withdraw_amount_fiat", function () {
	removeError ();
	
	var $data = getData ();
	var coinId;
	var $coin;
	var amountFiat = Number ($("#withdraw_amount_fiat").val ());
	var amountCrypto;
	var balCrypto;
	var minCrypto;
	var index = 1;
	
	if (! isNaN (amountFiat)) {
		if (! isVoid ($data)) {
			coinId = $("#withdraw_method option:selected").attr ("value");
			$coin = $data[coinId];

			amountCrypto = Math.floor (amountFiat / $coin.rate.reverse * Math.pow (10, $coin.decimal.crypto)) / Math.pow (10, $coin.decimal.crypto);
			
			if (amountFiat == Number ($coin.balance.fiat)) {
				amountCrypto = Number ($coin.balance.crypto);
			}
			
			balCrypto = Number ($coin.balance.crypto) + Number (1 / Math.pow (10, $coin.decimal.crypto));
			minCrypto = Number ($coin.min.crypto) - Number (1 / Math.pow (10, $coin.decimal.crypto));
			
			$("#withdraw_amount_crypto").val (amountCrypto);
			
			if (amountFiat >= 1000) {
				index = 4;
			}
			else if (amountFiat >= 500) {
				index = 3;
			}
			else if (amountFiat >= 300) {
				index = 2;
			}
			else {
				index = 1;
			}
			
			$(".withdraw_timing").removeClass ("active");
			$(".withdraw_timing[timing='"+ index +"']").addClass ("active");
			
			$(".withdraw_date_time").removeClass ("active");
			$(".withdraw_date_time[place='"+ index +"']").addClass ("active");
			
			if (amountCrypto < minCrypto) {
				addError ("below_minimum");
			}
			
			if (amountCrypto > balCrypto) {
				addError ("above_balance");
			}
		}
	}
	else {
		addError ("invalid_input");
	}
});

$(document).on ("input", "#withdraw_amount_crypto", function () {
	removeError ();
	
	var $data = getData ();
	var coinId;
	var $coin;
	var amountFiat;
	var amountCrypto = Number ($("#withdraw_amount_crypto").val ());
	var balCrypto;
	var minCrypto;

	if (! isNaN (amountCrypto)) {
		if (! isVoid ($data)) {
			coinId = $("#withdraw_method option:selected").attr ("value");
			$coin = $data[coinId];
			amountFiat = Math.round (amountCrypto * $coin.rate.reverse * Math.pow (10, $coin.decimal.fiat)) / Math.pow (10, $coin.decimal.fiat);
			
			if (amountCrypto == Number ($coin.balance.crypto)) {
				amountFiat = Number ($coin.balance.fiat);
			}
			
			balCrypto = Number ($coin.balance.crypto) + Number (1 / Math.pow (10, $coin.decimal.crypto));
			minCrypto = Number ($coin.min.crypto);

			$("#withdraw_amount_fiat").val (amountFiat);
			
			if (amountFiat >= 1000) {
				index = 4;
			}
			else if (amountFiat >= 500) {
				index = 3;
			}
			else if (amountFiat >= 300) {
				index = 2;
			}
			else {
				index = 1;
			}
			
			$(".withdraw_timing").removeClass ("active");
			$(".withdraw_timing[timing='"+ index +"']").addClass ("active");
			
			$(".withdraw_date_time").removeClass ("active");
			$(".withdraw_date_time[place='"+ index +"']").addClass ("active");
			
			if (amountCrypto < minCrypto) {
				addError ("below_minimum");
			}
			
			if (amountCrypto > balCrypto) {
				addError ("above_balance");
			}
		}
	}
	else {
		addError ("invalid_input");
	}
});

$(document).on ("change", "#withdraw_method", function () {
	removeError ();
	

	updateForm ();
	
//	$("#withdraw_currency_code").html ($coin.ticker.crypto);
});

function updateForm () {
	removeError ();
	
	var $data = getData ();
	var coinId;
	var $coin;
	var amountFiat;
	var amountCrypto;
	var balFiat;
	var minFiat;
	var balCrypto;
	var minCrypto;
	
	if (! isVoid ($data)) {
		coinId = $("#withdraw_method option:selected").attr ("value");
		$coin = $data[coinId];

		amountFiat = $coin.balance.fiat;
		
		if (amountFiat <= 0) {
			amountFiat = 0;
			amountCrypto = 0;
		}
		else if (amountFiat > 100) {
			amountFiat = 0;
			amountCrypto = 0;
		}
		else {
			amountCrypto = amountFiat / $coin.rate.reverse;
		}
		
		$("#withdraw_currency_code").html ($coin.ticker.crypto);
		$("#withdraw_rate").html (Math.round ($coin.rate.reverse * Math.pow (10, $coin.decimal.fiat)) / Math.pow (10, $coin.decimal.fiat));
		$("#withdraw_amount_fiat").val (toDec (amountFiat, $coin.decimal.fiat));
		$("#withdraw_amount_crypto").val (toDec (amountCrypto, $coin.decimal.crypto));
		$("#withdraw_method_name").html ($coin.coinname.crypto);
		$("#withdraw_wallet").html ($coin.wallet);
		
		if (amountFiat >= 1000) {
			index = 4;
		}
		else if (amountFiat >= 500) {
			index = 3;
		}
		else if (amountFiat >= 300) {
			index = 2;
		}
		else {
			index = 1;
		}
		
		$(".withdraw_timing").removeClass ("active");
		$(".withdraw_timing[timing='"+ index +"']").addClass ("active");
		
		$(".withdraw_date_time").removeClass ("active");
		$(".withdraw_date_time[place='1']").addClass ("active");
		
		balCrypto = Number ($coin.balance.crypto);
		minCrypto = Number ($coin.min.crypto);
		
		if (amountCrypto < minCrypto) {
			addError ("below_minimum");
		}
		
		if (amountCrypto * 0.999 > balCrypto) {
			addError ("above_balance");
		}
	}
}

function getData () {
	return JSON.parse (atob ($("#withdraw_data"). val ()));
}

$(document).on ("click", ".show_on_error", function (e) {
	e.preventDefault ();
	return false;
});

$(document).on ("dblclick", ".show_on_ok", function () {
	return false;
});

$(document).on ("click", ".show_on_ok", function () {
	var $el = $(this);
	setTimeout (function () {
		$el.prop ("disabled", true);
	}, 50);
	
	setTimeout (function () {
		$el.prop ("disabled", false);
	}, 10000);
})