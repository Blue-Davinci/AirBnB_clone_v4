$(function(){
	let Amenity = {}
	function updateAmenities (){
		let amenity = Object.values(Amenity).join(', ');
		$('.amenities h4').text(amenity);
	}

	if ($('input[type=checkbox]').change(function(){
		/** if it is checked get the data id and data name */
		let data_id = $(this).data("id");

		if ($(this).prop('checked')){
			Amenity[data_id] = $(this).data('name');
		}
		else
		{
			delete Amenity[data_id];
		}
	updateAmenities();
	});
});
