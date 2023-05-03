$(document).on ("click", ".transaction_type", function () {
	$("#transaction_type").val ($(this).attr ("transaction_type"));
	paginate (1);
});

$(document).ready (function () {
	paginate (1);
})