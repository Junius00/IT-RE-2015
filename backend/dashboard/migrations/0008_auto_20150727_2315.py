# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0007_auto_20150704_0714'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exams',
            name='belongs_to',
            field=models.ForeignKey(related_name='exams', to='dashboard.Subjects'),
        ),
    ]
