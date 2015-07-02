# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0005_remove_subjects_percentage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exams',
            name='belongs_to',
            field=models.ForeignKey(to='dashboard.Subjects'),
        ),
    ]
