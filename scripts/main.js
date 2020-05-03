var leaves = [

{	
	"name": "Spike",
	"color": "green",
	"family": "🌿",
	"pic": "<img src='img/flowersLeaves/Edits/IMG_1794.png'>",
	"quote":"<p>This is a leaf</p>",
},

{	
	"name": "Heart",
	"color": "green",
	"family": "🌿",
	"pic": "<img src='img/flowersLeaves/Edits/IMG_1796.png'>",
	"quote":"<p></p>",
},

{	
	"name": "Lion",
	"color": "yellow",
	"family": "🌼",
	"pic": "<img src='img/flowersLeaves/Edits/IMG_1799.png'>",
	"quote":"<p></p>",
},


{	
	"name": "Falling",
	"color": "green",
	"family": "🌱",
	"pic": "<img src='img/flowersLeaves/Edits/IMG_1800.png'>",
	"quote":"<p></p>",
},

{	
	"name": "Going",
	"color": "brown",
	"family": "🍂",
	"pic": "<img src='img/flowersLeaves/Edits/IMG_1801.png'>",
	"quote":"<p></p>",
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
	"color": "White",
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
	"color": "White",
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
}
]

// for(var i=0; i<leaves.length; i++){
// 	$('.images').append('<div id="my-square">' + leaves[i].pic + leaves[i].quote +'</div>')
// }


/*________________________________________*/

for(var i=0; i<leaves.length; i++){
	var leavesDiv = $('<div/>', {
			'id': 'my-square'
		})
		.data('tree', leaves[i])
		.html(leaves[i].pic)
		.append ( "<div class ='quote'>" + leaves[i].quote + "</div>")
		
	$('.images').append(leavesDiv)
}



$('#my-square').on('mousemove', function(e){
    $('.quote').css({'position': 'absolute','top': e.pageY});
    $('.quote').css({'position': 'absolute','left': e.pageX});

});



