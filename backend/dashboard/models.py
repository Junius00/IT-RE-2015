from django.db import models

# Create your models here.


class Subjects(models.Model):
    name = models.CharField(max_length=255)
    goal_gpa = models.FloatField(default=4.0)

    def __unicode__(self):
        return self.name


class Exams(models.Model):
    name = models.CharField(max_length=255)
    percentage_weight = models.FloatField(default=0)
    percentage_gotten = models.FloatField(default=0)
    belongs_to = models.ForeignKey(Subjects, related_name = 'exams')
    done = models.BooleanField(default=False)

    def __unicode__(self):
        return self.name
