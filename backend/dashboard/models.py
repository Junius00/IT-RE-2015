from django.db import models

# Create your models here.


class Subjects(models.Model):
    name = models.CharField(max_length=255)

    def __unicode__(self):
        return self.name


class Exams(models.Model):
    name = models.CharField(max_length=255)
    percentage_weight = models.FloatField()
    percentage_gotten = models.FloatField(default=0)
    belongs_to = models.ForeignKey(Subjects)

    def __unicode__(self):
        return self.name
