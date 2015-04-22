$(document).ready(function() {
	var chartData = [
		{
			"title": "1950",
			"value": -0.307
		},
		{
			"title": "1951",
			"value": -0.168
		},
		{
			"title": "1952",
			"value": -0.073
		},
		{
			"title": "1953",
			"value": -0.027
		},
		{
			"title": "1954",
			"value": -0.251
		},
		{
			"title": "1955",
			"value": -0.281
		},
		{
			"title": "1956",
			"value": -0.348
		},
		{
			"title": "1957",
			"value": -0.074
		},
		{
			"title": "1958",
			"value": -0.011
		},
		{
			"title": "1959",
			"value": -0.074
		},
		{
			"title": "1960",
			"value": -0.124
		},
		{
			"title": "1961",
			"value": -0.024
		},
		{
			"title": "1962",
			"value": -0.022
		},
		{
			"title": "1963",
			"value": 0
		},
		{
			"title": "1964",
			"value": -0.296
		},
		{
			"title": "1965",
			"value": -0.217
		},
		{
			"title": "1966",
			"value": -0.147
		},
		{
			"title": "1967",
			"value": -0.15
		},
		{
			"title": "1968",
			"value": -0.16
		},
		{
			"title": "1969",
			"value": -0.011
		},
		{
			"title": "1970",
			"value": -0.068
		},
		{
			"title": "1971",
			"value": -0.19
		},
		{
			"title": "1972",
			"value": -0.056
		},
		{
			"title": "1973",
			"value": 0.077
		},
		{
			"title": "1974",
			"value": -0.213
		},
		{
			"title": "1975",
			"value": -0.17
		},
		{
			"title": "1976",
			"value": -0.254
		},
		{
			"title": "1977",
			"value": 0.019
		},
		{
			"title": "1978",
			"value": -0.063
		},
		{
			"title": "1979",
			"value": 0.05
		},
		{
			"title": "1980",
			"value": 0.077
		},
		{
			"title": "1981",
			"value": 0.12
		},
		{
			"title": "1982",
			"value": 0.011
		},
		{
			"title": "1983",
			"value": 0.177
		},
		{
			"title": "1984",
			"value": -0.021
		},
		{
			"title": "1985",
			"value": -0.037
		},
		{
			"title": "1986",
			"value": 0.03
		},
		{
			"title": "1987",
			"value": 0.179
		},
		{
			"title": "1988",
			"value": 0.18
		},
		{
			"title": "1989",
			"value": 0.104
		},
		{
			"title": "1990",
			"value": 0.255
		},
		{
			"title": "1991",
			"value": 0.21
		},
		{
			"title": "1992",
			"value": 0.065
		},
		{
			"title": "1993",
			"value": 0.11
		},
		{
			"title": "1994",
			"value": 0.172
		},
		{
			"title": "1995",
			"value": 0.269
		},
		{
			"title": "1996",
			"value": 0.141
		},
		{
			"title": "1997",
			"value": 0.353
		},
		{
			"title": "1998",
			"value": 0.548
		},
		{
			"title": "1999",
			"value": 0.298
		},
		{
			"title": "2000",
			"value": 0.267
		},
		{
			"title": "2001",
			"value": 0.411
		},
		{
			"title": "2002",
			"value": 0.462
		},
		{
			"title": "2003",
			"value": 0.47
		},
		{
			"title": "2004",
			"value": 0.445
		},
		{
			"title": "2005",
			"value": 0.47
		}
	];

	function chartDraw(framediv,title,chartData,chartdiv) {
		$(framediv).append("<p>"+title+"</p>");
		$(framediv).append('<div id='+chartdiv+'" class="graph"></div>');
		var chart;
		var graph;
	
		AmCharts.ready(function () {
			chart = new AmCharts.AmSerialChart();
			chart.categoryField = "title";
			chart.dataProvider = chartData;
			
			graph = new AmCharts.AmGraph();
			graph.valueField = "value";
			graph.type = "smoothedLine";
			graph.fillAlphas = 1;
			chart.addGraph(graph);
			
			chart.write(chartdiv);
		});
	}
	chartDraw("#main","fap",chartData,"fap");
	$("#main").css("z-index","1");
	$("#main").css("opacity","1");
	alert("jQuery successfully loaded!");
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