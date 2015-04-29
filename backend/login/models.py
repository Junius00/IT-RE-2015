from django.db import models
from django.contrib.auth.models import User as DefaultUsers

# Create your models here.

class User(DefaultUsers):
	"""A semi-customized user class"""

	percentage_list = get_percentage_list(self)

	

	
def get_percentage_list(user_object):

    percentage_list = {}

	for i in user_object.subject_set:

		percentile = 0
		percentage = 0

		for j in i:
			percentile += j.percentile
			percentage += j.score/j.max_score*j.percentile

		percentage_list[i.subject_name]=percentage/percentile

	return percentage_list

	




