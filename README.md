# IT-RE-2015
Name of website: riTracker

JSON Object format:

subjects = {
	<subject/str>:{
		'goal':<goal GPA/str>,
		'gpa':<GPA/str>,
		'chartdata':[
			{
				'exam':<examination name/str>,
				'percentage':<percentage of examination scored/float or int>,
				'weight':<weightage of final grade/float or int>,
				'done':<whether examination has been completed/bool>
			}
		]
	}
}

