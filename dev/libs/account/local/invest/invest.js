$(document).on ("input", "#invest_amount_fiat", function () {
	var data = getInvestData ();
	var currencyId = getInvestCurrencyId ();
	var currency = data.currency[currencyId];
	var planId = getPlanId ();
	var plan = data.plan[planId];
	var amountFiat = Number ($("#invest_amount_fiat").val ());
	var amountCrypto = 0;
	var amountDaily = 0;
	var amountTotal = 0;
	
	if (! isNaN (amountFiat)) {
		if (amountFiat > plan.max.fiat) {
			amountFiat = plan.max.fiat;
			$("#invest_amount_fiat").val (amountFiat);
		}
		
		amountCrypto = Math.round (amountFiat * currency.rate.straight * Math.pow (10, currency.decimal.crypto)) / Math.pow (10, currency.decimal.crypto);
		amountDaily = Math.round (amountFiat * 12 / 100 * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);
		amountTotal = Math.round (amountFiat * 12 * 12 / 100 * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);
		$("#invest_amount_crypto").val (amountCrypto);
		$("#invest_amount_daily").val (amountDaily);
		$("#invest_amount_total").val (amountTotal);
	}
});

$(document).on ("input", "#invest_amount_crypto", function () {
	var data = getInvestData ();
	var currencyId = getInvestCurrencyId ();
	var currency = data.currency[currencyId];
	var planId = getPlanId ();
	var plan = data.plan[planId];
	var amountCrypto = Number ($("#invest_amount_crypto").val ());
	var amountFiat = 0;
	var amountDaily = 0;
	var amountTotal = 0;

	if (! isNaN (amountCrypto)) {
		amountFiat = Math.round (amountCrypto / currency.rate.straight * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);
		
		if (amountFiat > plan.max.fiat) {
			amountFiat = plan.max.fiat;
			amountCrypto = Math.round (amountFiat * currency.rate.straight * Math.pow (10, currency.decimal.crypto)) / Math.pow (10, currency.decimal.crypto);
			$("#invest_amount_crypto").val (amountCrypto);
		}
		
		amountDaily = Math.round (amountFiat * 12 / 100 * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);
		amountTotal = Math.round (amountFiat * 12 * 12 / 100 * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);
		$("#invest_amount_fiat").val (amountFiat);
		$("#invest_amount_daily").val (amountDaily);
		$("#invest_amount_total").val (amountTotal);
	}
});

$(document).on ("input", "#invest_amount_daily", function () {
	var data = getInvestData ();
	var currencyId = getInvestCurrencyId ();
	var currency = data.currency[currencyId];
	var planId = getPlanId ();
	var plan = data.plan[planId];
	var amountDaily = Number ($("#invest_amount_daily").val ());
	var amountFiat = 0;
	var amountCrypto = 0;
	var amountTotal = 0;

	if (! isNaN (amountDaily)) {
		amountFiat = Math.round (amountDaily / 12 * 100 * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);
		
		if (amountFiat > plan.max.fiat) {
			amountFiat = plan.max.fiat;
			amountDaily = Math.round (amountFiat * 12 / 100 * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);
			$("#invest_amount_daily").val (amountDaily);
		}
		
		amountCrypto = Math.round (amountFiat * currency.rate.straight * Math.pow (10, currency.decimal.crypto)) / Math.pow (10, currency.decimal.crypto);
		amountTotal = Math.round (amountFiat * 12 * 12 / 100 * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);
		$("#invest_amount_fiat").val (amountFiat);
		$("#invest_amount_crypto").val (amountCrypto);
		$("#invest_amount_total").val (amountTotal);
	}
});

$(document).on ("input", "#invest_amount_total", function () {
	var data = getInvestData ();
	var currencyId = getInvestCurrencyId ();
	var currency = data.currency[currencyId];
	var planId = getPlanId ();
	var plan = data.plan[planId];
	var amountTotal = Number ($("#invest_amount_total").val ());
	var amountFiat = 0;
	var amountCrypto = 0;
	var amountDaily = 0;

	if (! isNaN (amountTotal)) {
		amountDaily = Math.round (amountTotal / 12 * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);
		amountFiat = Math.round (amountDaily / 12 * 100 * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);
		
		if (amountFiat > plan.max.fiat) {
			amountFiat = plan.max.fiat;
			amountDaily = Math.round (amountFiat * 12 / 100 * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);
			amountTotal = Math.round (amountFiat * 12 * 12 / 100 * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);
			
			$("#invest_amount_daily").val (amountDaily);
			$("#invest_amount_total").val (amountTotal);
		}
		
		amountCrypto = Math.round (amountFiat * currency.rate.straight * Math.pow (10, currency.decimal.crypto)) / Math.pow (10, currency.decimal.crypto);
		
		$("#invest_amount_fiat").val (amountFiat);
		$("#invest_amount_crypto").val (amountCrypto);
		$("#invest_amount_daily").val (amountDaily);
	}
});

$(document).on ("change", "#invest_payment_system", function () {
	var data = getInvestData ();
	var planId = getPlanId ();
	var plan = data.plan[planId];
	var currencyId = getInvestCurrencyId ();
	var currency = data.currency[currencyId];
	var amountFiat = plan.min.fiat;
	var amountCrypto = 0;
	var planMax = "1M";
	var amountTotal = 0;
	var amountDaily = 0;

	if (! isNaN (amountFiat)) {
		if (amountFiat > plan.max.fiat) {
			amountFiat = plan.max.fiat;
		}
		
		amountCrypto = Math.round (amountFiat * currency.rate.straight * Math.pow (10, currency.decimal.crypto)) / Math.pow (10, currency.decimal.crypto);
		amountDaily = Math.round (amountFiat * 12 / 100 * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);
		amountTotal = Math.round (amountFiat * 12 * 12 / 100 * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat);

		$("#invest_amount_fiat").val (amountFiat);
		$("#invest_amount_crypto").val (amountCrypto);
		$("#invest_crypto_code").html (currency.code.crypto);
		$("#invest_rate").html (Math.round (currency.rate.reverse, currency.decimal.fiat));
		$(".invest_fiat_sign").html (currency.symbol.fiat);
		$("#invest_min_fiat").html (plan.min.fiat);
		$("#invest_amount_daily").val (amountDaily);
		$("#invest_amount_total").val (amountTotal);
		$("#invest_rate").html ("$" + Math.round (currency.rate.reverse * Math.pow (10, currency.decimal.fiat)) / Math.pow (10, currency.decimal.fiat));
		
		if (plan.max.fiat > 0) {
			planMax = (plan.max.fiat / 1000) + "K";
		}
		
		$("#invest_max_fiat").html (planMax);
	}
});

$(document).on ("change", "#invest_plan", function () {
	var data = getInvestData ();
	var planId = getPlanId ();
	var plan = data.plan[planId];
	var currencyId = getInvestCurrencyId ();
	var currency = data.currency[currencyId];
	var amountFiat = plan.min.fiat;
	var amountCrypto = 0;
	var planMax = "1M";

	if (! isNaN (amountFiat)) {
		amountCrypto = Math.round (amountFiat * currency.rate.straight * Math.pow (10, currency.decimal.crypto)) / Math.pow (10, currency.decimal.crypto);

		$("#invest_amount_fiat").val (amountFiat);
		$("#invest_amount_crypto").val (amountCrypto);
		$("#invest_crypto_code").html (currency.code.crypto);
		$("#invest_rate").html (Math.round (currency.rate.reverse, currency.decimal.fiat));
		$(".invest_fiat_sign").html (currency.symbol.fiat);
		$("#invest_min_fiat").html (plan.min.fiat);
		
		if (plan.max.fiat > 0) {
			planMax = (plan.max.fiat / 1000) + "K";
		}
		
		$("#invest_max_fiat").html (planMax);
	}
});

function getInvestData () {
	return JSON.parse (atob ($("#invest_data").val ()));
}

function getInvestCurrencyId () {
	return $("#invest_payment_system").find ("option:selected").attr ("value");
}

function getPlanId () {
	$planObj = $("#invest_plan");
	if ($planObj.prop ("tagName") == "INPUT") {
		return $planObj.val ();
	}
	else if ($planObj.prop ("tagName") == "SELECT") {
		return $planObj.find ("option:selected").attr ("value");
	}
}

$(document).ready (function () {
	updateTransaction ();
});

function updateTransaction () {
	var update = ! isVoid ($("#invest_auto_update"));
	var $transaction, transaction;
	var $beep = $(".beep");
	var beep = $beep.attr ("beep");
	var $newbeep, newbeep;
	
	if (beep != 2) {
		if (update === true) {
			$transaction = $("#invest_container");
			transaction = $transaction.attr ("transaction");
			
			if (! isVoid (transaction)) {
				$transaction.load ("/pattern/invest/?transaction="+ transaction +"", function () {
					cbinit ();
					clock ();
					
					$newbeep = $(".beep");
					newbeep = $newbeep.attr ("beep");
					
					if (beep != 2 && ! isVoid (newbeep)) {
						if (beep != newbeep) {
							if (newbeep == 1) {
								playSound ("/assets/sounds/deposit/payment_found.mp3", 1);
							}
							
							if (newbeep == 2) {
								playSound ("/assets/sounds/deposit/payment_accepted.mp3", 1);
							}
						}
					}
				});
			}
		}
	
		setTimeout (function () {
			updateTransaction ();
		}, 10000);
	}
}

$(document).on ("click", "#i_paid", function () {
	var $this = $(this);
	var data = "formaction=i_paid&transaction=" + $this.attr ("transaction");
	
	ajax (data, $this, "updateTransaction");
})