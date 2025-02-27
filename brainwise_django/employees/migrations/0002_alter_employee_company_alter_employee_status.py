# Generated by Django 5.1.6 on 2025-02-27 10:53

import django.db.models.deletion
import django_fsm
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='employees', to='employees.company'),
        ),
        migrations.AlterField(
            model_name='employee',
            name='status',
            field=django_fsm.FSMField(choices=[('hired', 'Hired'), ('not_hired', 'Not Hired'), ('application_received', 'Application Received'), ('interview_scheduled', 'Interview Scheduled')], default='application_received', max_length=50),
        ),
    ]
