# Generated by Django 2.1.3 on 2018-12-07 01:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20181207_0103'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='player',
            name='elo_points',
        ),
    ]
