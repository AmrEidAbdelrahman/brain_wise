# Generated by Django 5.1.6 on 2025-02-27 10:55

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0002_alter_employee_company_alter_employee_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='department',
            name='company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='departments', to='employees.company'),
        ),
    ]
