
var leaves = [

	{	
		"name": "Spike",
		"color": "green",
		"family": "🌿",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1794.png'>",
		"quote":"<p>One day i was walking through my garden</p>",
	},

	{	
		"name": "Heartless",
		"color": "green",
		"family": "🌿",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1796.png'>",
		"quote":"<p>on the countryside in Germany.</p>",
	},

	{	
		"name": "Lion King",
		"color": "yellow",
		"family": "🌼",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1799.png'>",
		"quote":"<p>By the time I had reached the fence,</p>",
	},

	{	
		"name": "Falling Apart",
		"color": "green",
		"family": "🌱",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1800.png'>",
		"quote":"<p>I had noticed all the leaves.</p>",
	},

	{	
		"name": "Going",
		"color": "brown",
		"family": "🍂",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1801.png'>",
		"quote":"<p>All arround me there was green</p>",
	},

	{	
		"name": "Broke",
		"color": "green",
		"family": "🍃",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1802.png'>",
		"quote":"<p></p>",
	},

	{	
		"name": "Rododenron",
		"color": "green",
		"family": "🌿",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1803.png'>",
		"quote":"<p></p>",
	},

	{	
		"name": "Speed",
		"color": "brown",
		"family": "🍂",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1812.png'>",
		"quote":"<p></p>",
	},

	{	
		"name": "Cross",
		"color": "brown",
		"family": "🍂",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1813.png'>",
		"quote":"<p></p>",
	},

	{	
		"name": "Disaster",
		"color": "gray",
		"family": "🌼",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1815.png'>",
		"quote":"<p></p>",
	},

	{	
		"name": "Purple High",
		"color": "purple",
		"family": "🌸",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1819.png'>",
		"quote":"<p></p>",
	},

	{	
		"name": "Queen of England",
		"color": "yellow",
		"family": "🌼",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1820.png'>",
		"quote":"<p></p>",
	},

	{	
		"name": "French Melancoly",
		"color": "red",
		"family": "🌺",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1821.png'>",
		"quote":"<p></p>",
	},

	{	
		"name": "White Powder",
		"color": "gray",
		"family": "🌸",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1822.png'>",
		"quote":"<p></p>",
	},

	{	
		"name": "Labyrinth",
		"color": "green",
		"family": "🌿",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1824.png'>",
		"quote":"<p></p>",
	},

	{	
		"name": "Bottle Neck",
		"color": "green",
		"family": "🌿",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1825.png'>",
		"quote":"<p></p>",
	},

	{	
		"name": "Rouge",
		"color": "green",
		"family": "🌿",
		"pic": "<img src='img/flowersLeaves/Edits/IMG_1826.png'>",
		"quote":"<p></p>",
	},
	{	
		"name": "Mynards",
		"color": "green",
		"family": "🌿",
		"pic": "<coming soon>",
		"quote":"<p></p>",
	}

]



	var button = $('<div/>', {'class':'items'
			})
			.html('<br>'+ ' click me ' +'<br>'+ '<br>')
			.data('leave', leaves[i] )
			.data('clicked',false)
			.css({'border-color': '#c9cfdd'})
			.click(function() {
				if ($(.items).data('clicked')===false){
					$('body').append('<span>'+ random-leave[i].pic) + '</span>'
				}

				else {
					$('body').find('span').remove()
					$('button').data('clicked',false)
				}
			})
			

	{

	$('.content').append(button)
	}



