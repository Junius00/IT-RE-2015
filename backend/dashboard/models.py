from django.db import models

# Create your models here.


class Subject(models.Model):

    subject_name = models.CharField(max_length=30)
    current_percentile = models.IntegerField(default=0)

    def __str__(self):
        
        return self.subject_name


class Exam(models.Model):
    test_of = models.ForeignKey(Subject)

    exam_name = models.CharField(max_length=100)
    percentile = models.IntegerField(default=0)
    score = models.IntegerField(default=0)
    percentage = models.IntegerField(default=0)

    def __str__(self):
        return self.exam_name
