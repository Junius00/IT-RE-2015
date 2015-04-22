$(document).ready(function() {
		var chartData = [
		{
			"country": "USA",
			"visits": 4025
		},
		{
			"country": "China",
			"visits": 1882
		},
		{
			"country": "Japan",
			"visits": 1809
		},
		{
			"country": "Germany",
			"visits": 1322
		},
		{
			"country": "UK",
			"visits": 1122
		},
		{
			"country": "France",
			"visits": 1114
		},
		{
			"country": "India",
			"visits": 984
		},
		{
			"country": "Spain",
			"visits": 711
		},
		{
			"country": "Netherlands",
			"visits": 665
		},
		{
			"country": "Russia",
			"visits": 580
		},
		{
			"country": "South Korea",
			"visits": 443
		},
		{
			"country": "Canada",
			"visits": 441
		},
		{
			"country": "Brazil",
			"visits": 395
		},
		{
			"country": "Italy",
			"visits": 386
		},
		{
			"country": "Australia",
			"visits": 384
		},
		{
			"country": "Taiwan",
			"visits": 338
		},
		{
			"country": "Poland",
			"visits": 328
		}
	];

	function chartDraw(framediv,title,chartData,chartdiv) {
		var chart;
		$("#main").append("<p>"+title+"</p>");
		$("#main").append("<div class='graph' id='"+chartdiv+"'></div>");
		AmCharts.ready(function () {
			// SERIAL CHART
			chart = new AmCharts.AmSerialChart();
			chart.dataProvider = chartData;
			chart.categoryField = "country";
			chart.startDuration = 1;
	
			// AXES
			// category
			var categoryAxis = chart.categoryAxis;
			categoryAxis.labelRotation = 90;
			categoryAxis.gridPosition = "start";
	
			// value
			// in case you don't want to change default settings of value axis,
			// you don't need to create it, as one value axis is created automatically.
	
			// GRAPH
			var graph = new AmCharts.AmGraph();
			graph.valueField = "visits";
			graph.balloonText = "[[category]]: <b>[[value]]</b>";
			graph.type = "column";
			graph.lineAlpha = 0;
			graph.fillAlphas = 0.8;
			chart.addGraph(graph);
	
			// CURSOR
			var chartCursor = new AmCharts.ChartCursor();
			chartCursor.cursorAlpha = 0;
			chartCursor.zoomable = false;
			chartCursor.categoryBalloonEnabled = false;
			chart.addChartCursor(chartCursor);
	
			chart.creditsPosition = "top-right";
	
			chart.write(chartdiv);
		});
	}
	
	chartDraw("#main","test1",chartData,"test1");
	$("#main").css("z-index","1");
	$("#main").css("opacity","1");
	iA = ["#scr1","#scr2","#scr3","#scr4","#main"];
	
	$("#ml").click(function () {
		$("#main").css("z-index","1");
		$("#main").css("opacity","1");
		for (var i = 3;i>=0;i--) {
			$(iA[i]).css("z-index","0");
			$(iA[i]).css("opacity","0");
		}
	});
	
	$("#hl1").click(function () {
		$("#scr1").css("z-index","1");
		$("#scr1").css("opacity","1");
		for (var i = 1;i<5;i++) {
			$(iA[i]).css("z-index","0");
			$(iA[i]).css("opacity","0");
		}
	});
	
	$("#hl2").click(function () {
		$("#scr2").css("z-index","1");
		$("#scr2").css("opacity","1");
		for (var i = 2;i<5;i++) {
			$(iA[i]).css("z-index","0");
			$(iA[i]).css("opacity","0");
		}
		$("#scr1").css("z-index","0");
		$("#scr1").css("opacity","0");
	});
	
	$("#hl3").click(function () {
		$("#scr3").css("z-index","1");
		$("#scr3").css("opacity","1");
		for (var i = 1;i>0;i--) {
			$(iA[i]).css("z-index","0");
			$(iA[i]).css("opacity","0");
		}
		$("#scr4").css("z-index","0");
		$("#scr4").css("opacity","0");
		$("#main").css("z-index","0");
		$("#main").css("opacity","0");
	});
	
	$("#hl4").click(function () {
		$("#scr4").css("z-index","1");
		$("#scr4").css("opacity","1");
		for (var i = 2;i>0;i--) {
			$(iA[i]).css("z-index","0");
			$(iA[i]).css("opacity","0");
		}
		$("#main").css("z-index","0");
		$("#main").css("opacity","0");
	});
	
});