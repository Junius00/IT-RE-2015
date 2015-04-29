from django.db import models
from login import models as loginModels

# Create your models here.


class Subject(models.Model):

    belongs_to = models.ForeignKey(loginModels.User)

    subject_name = models.CharField(max_length=30)
    current_percentile = models.IntegerField(default=0)

    def __str__(self):
        
        return self.subject_name


class Exam(models.Model):
    test_of = models.ForeignKey(Subject)

    exam_name = models.CharField(max_length=100)
    percentile = models.FloatField(default=0)
    score = models.FloatField(default=0)
    max_score = models.IntegerField(default=0)

    def __str__(self):
        return self.exam_name
