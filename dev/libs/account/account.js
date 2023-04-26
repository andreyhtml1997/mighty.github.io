$('.navbar-toggler').click(function(){
  $('#ac_navbar').toggleClass('show');
  $('body').toggleClass('modal-open');
});

$(document).on ("click mouseenter mouseleave", ".account_btn", function (e) {
/*
	if (e.type == "click") {
		if ($(this).hasClass ("active")) {
			$(this).removeClass ("active");
		}
	}
	else */if (e.type == "mouseenter") {
		$(this).addClass ("active");
	}
	
	else if (e.type == "mouseleave") {
		$(this).removeClass ("active");
	}
});

$(document).on ("click", ".cb_toggle.master", function (e) {
	e.preventDefault ();
	
	var $cb = $(this);
	var attr = $cb.attr ("cb");
	var $slave;
	var className = "active";
	
	if (! isVoid (attr)) {
		$slave = $(".cb_toggle.slave[cb='"+ $cb.attr ("cb") +"']");
		
		if (! isVoid ($slave)) {
			if ($cb.hasClass (className)) {
				$cb.removeClass (className);
				$slave.removeAttr ("checked");
			}
			else {
				$cb.addClass (className);
				$slave.attr ("checked", "checked");
			}
		}
	}
});

function privSecSaved (args) {
	closeModal ("privacy");
	openModal ("message", [args.text]);
}

var $writeReview = $("#write_review");

if (! isVoid ($writeReview)) {
	openModal ("review", $writeReview.attr ("review"))
}

var $userBanned = $("#user_banned");

if (! isVoid ($userBanned)) {
	openModal ("user_banned");
}

$(document).on ("input", "#review_text", function () {
	var $this = $(this);
	var maxLen = Number ($this.attr ("max"));
	var currLen = $this.val ().length;
	var charsLeft;
	var text = $this.val ();
	var $counter = $("#review_chars_left");
	
	$counter.removeClass ("overed");
	
	if (isNaN (maxLen) || isVoid (maxLen)) {
		maxLen = 240;
	}

	charsLeft = maxLen - currLen;
	
	if (charsLeft < 0) {
		charsLeft = 0;
		$this.val (text.substring (0, maxLen));
		$counter.addClass ("overed");
	}
	
	if (charsLeft > maxLen) {
		charsLeft = maxLen;
		$this.val ("");
	}
	
	$("#review_chars_left").html (charsLeft);
});

function reviewSaved (args) {
	closeModal ("review");
	openModal ("message", [args.text]);
}

function resetRequestAccepted (args) {
	closeModal ("reset_pin");
	openModal ("message", [args.text]);
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('ac_main', 'libs/particles.json', function() {
  console.log('callback - particles.js config loaded');
});