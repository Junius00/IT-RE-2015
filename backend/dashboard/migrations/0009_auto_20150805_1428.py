# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0008_auto_20150727_2315'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exams',
            name='percentage_weight',
            field=models.FloatField(default=0),
        ),
    ]
