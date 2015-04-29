# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Exam',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('exam_name', models.CharField(max_length=100)),
                ('percentile', models.IntegerField(default=0)),
                ('score', models.IntegerField(default=0)),
                ('percentage', models.IntegerField(default=0)),
            ],
        ),
    ]
