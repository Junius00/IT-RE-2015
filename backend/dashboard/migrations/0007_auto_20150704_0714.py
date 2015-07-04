# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0006_auto_20150701_0718'),
    ]

    operations = [
        migrations.AddField(
            model_name='exams',
            name='done',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='subjects',
            name='goal_gpa',
            field=models.FloatField(default=4.0),
        ),
    ]
