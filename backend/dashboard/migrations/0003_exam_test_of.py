# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_exam'),
    ]

    operations = [
        migrations.AddField(
            model_name='exam',
            name='test_of',
            field=models.ForeignKey(default=None, to='dashboard.Subject'),
            preserve_default=False,
        ),
    ]
