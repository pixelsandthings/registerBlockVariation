wp.blocks.registerBlockVariation(
	'core/columns', {
		name: 'blockname',
		title: 'Block Name',
		icon: 'dashicons-icon-class',
		attributes: {
			cover: 'https://example.com/image.jpg',
			align: 'wide',
			className: 'blockname'
		},
		scope: ['inserter'],
		innerBlocks: [
			['core/column', { "width": 60, className: 'internal-block-class' },
				[
					['core/heading', { level: 3, placeholder: 'Title' }],
					['core/paragraph', {
						placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.'
					}],
				]
			],
			['core/column', { "width": 40, className: 'internal-block-class' },
				[
					['core/heading',  { level: 3, placeholder: 'Title' } ],
					['core/paragraph', {
						placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.'
					}],
				]
			],
		],
	}
);
