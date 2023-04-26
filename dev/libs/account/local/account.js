$(document).ready (function () {
	updateDeposits ();
	// tilt ();
});

function updateDeposits () {
	var deps = {};
	
	$(".active_deposit").each (function () {
		var $this = $(this);
		var checkId = $this.attr ("check_id");
		var check = $this.attr ("check");
		
		if (checkId !== undefined) {
			deps[checkId] = check;
		}
	});
	
//	cl (deps);
	/* 
	$("#deposits_list").load ("/pattern/account_deposits", function () {
		if (! isVoid (deps)) {
			$(".active_deposit").each (function () {
				var $this = $(this);
				var newCheckId = $this.attr ("check_id");
				var newCheck = $this.attr ("check");
				
				if (! isVoid (deps[newCheckId])) {
					if (! isVoid (newCheck)) {
						if (deps[newCheckId] != newCheck) {
							if (newCheck == 1) {
								playSound ("/assets/sounds/deposit/payment_found.mp3", 1);
							}
							else if (newCheck == 2) {
								playSound ("/assets/sounds/deposit/payment_accepted.mp3", 1);
							}
							else {
//								cl ("Sound unknown");
							}
						}
					}
				}
			});
		}
		
		cbinit ();
		clock ();
		// tilt ();
		
		setTimeout (function () {
			updateDeposits ();
		}, 10000);
	});
	 */
}
