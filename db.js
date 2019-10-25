var lorem =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare sapien a nisi egestas lacinia. Donec nibh felis, luctus eget dolor ac, aliquet vulputate tellus. Donec nec pretium tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'

module.exports = {
	beers: [
		{
			id: 1,
			title: 'Singha',
			description: lorem,
			style_id: 1,
			country_id: 1,
			image_path: 'https://via.placeholder.com/300'
		},
		{
			id: 2,
			title: 'Chang',
			description: lorem,
			style_id: 1,
			country_id: 1,
			image_path: 'https://via.placeholder.com/300'
		},
		{
			id: 3,
			title: 'Leo',
			description: lorem,
			style_id: 1,
			country_id: 1,
			image_path: 'https://via.placeholder.com/300'
		},
		{
			id: 4,
			title: 'Hoegaarden',
			description: lorem,
			style_id: 2,
			country_id: 3,
			image_path: 'https://via.placeholder.com/300'
		},
		{
			id: 5,
			title: 'Speedway Stout',
			description: lorem,
			style_id: 3,
			country_id: 2,
			image_path: 'https://via.placeholder.com/300'
		}
	],
	favorite_beers: [{ id: 1, beer_id: 1 }, { id: 2, beer_id: 2 }],
	styles: [
		{ id: 1, name: 'Pale Lager' },
		{ id: 2, name: 'Wheat beer' },
		{ id: 3, name: 'Imperial Stout' }
	],
	countries: [
		{ id: 1, name: 'Thailand' },
		{ id: 2, name: 'United States' },
		{ id: 3, name: 'Germany' }
	]
}
