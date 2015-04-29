$(document).ready(function() {
	//functions and variables
	var subjects = [
		{
			"subject":"Mathematics I",
			"gpa":"4.0",
			"chartdata":[
				{
					"exam":"Math Test 1",
					"percentage":73	
				},{
					"exam":"Math Test 2",
					"percentage":97
				}
			]
		},{
			"subject":"Mathematics II",
			"gpa":"4.0",
			"chartdata":[
				{
					"exam":"Math Test 1",
					"percentage":73	
				},{
					"exam":"Math Test 2",
					"percentage":97
				}
			]
		},{
			"subject":"Physics",
			"gpa":"4.0",
			"chartdata":[
				{
					"exam":"Math Test 1",
					"percentage":73	
				},{
					"exam":"Math Test 2",
					"percentage":97
				}
			]
		}
	];

	function chartDraw(framediv,title,chartData,chartdiv) {
		var chart;
		$(framediv).append("<p class='subject'>"+title+"</p>");
		$(framediv).append("<div class='graph' id='"+chartdiv+"'></div>");
		AmCharts.ready(function () {
			// SERIAL CHART
			chart = new AmCharts.AmSerialChart();
			chart.dataProvider = chartData;
			chart.categoryField = "exam";
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
			graph.valueField = "percentage";
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
	
	function subjectRead (subjects){
		for (var i = 0;i<subjects.length;i++)
		{
			$("#main").append("<p class='subject'><b>"+subjects[i]["subject"]+"</b>: "+subjects[i]["gpa"]+"</p>");
			chartDraw("#scr2",subjects[i]["subject"],subjects[i]["chartdata"],subjects[i]["subject"]);	
		}
	};
	//main start up
	/*var xmlhttp = new XMLHttpRequest();
	var url = "dashboard/overview";
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var subjects = JSON.parse(xmlhttp.responseText);
			subjectRead(subjects);
		}
	}
	xmlhttp.open("POST", url, true);
	xmlhttp.send();*/
	subjectRead(subjects);
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