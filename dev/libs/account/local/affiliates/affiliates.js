$(document).on ("click", ".aff_tier.have_refs", function () {
	$("#aff_tier").val ($(this).attr ("aff_tier"));
	paginate (1);
});

$(document).ready (function () {
	paginate (1);
});