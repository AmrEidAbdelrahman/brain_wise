from django.db import models

from .company import Company
from .department import Department
from django_fsm import FSMField, transition


class EmployeeStatus(models.TextChoices):
    HIRED = 'hired', 'Hired'
    NOT_HIRED = 'not_hired', 'Not Hired'
    APPLICATION_RECEIVED = 'application_received', 'Application Received'
    INTERVIEW_SCHEDULED = 'interview_scheduled', 'Interview Scheduled'

class Employee(models.Model):
    company = models.ForeignKey(Company, on_delete=models.PROTECT, related_name='employees')
    department = models.ForeignKey(Department, on_delete=models.PROTECT)

    status = FSMField(max_length=50, choices=EmployeeStatus.choices, default=EmployeeStatus.APPLICATION_RECEIVED)
    
    name = models.CharField(max_length=255)
    email = models.EmailField()
    mobile_number = models.CharField(max_length=15)
    address = models.TextField()
    
    designation = models.CharField(max_length=255)
    hired_on = models.DateField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
    class Meta:
        db_table = 'employee'
        verbose_name = 'Employee'
        verbose_name_plural = 'Employees'
        ordering = ['id']


    @transition(field=status, source='application_received', target='interview_scheduled')
    def schedule_interview(self):
        pass

    @transition(field=status, source='application_received', target='not_accepted')
    def reject_application(self):
        pass

    @transition(field=status, source='interview_scheduled', target='hired')
    def hire(self):
        pass

    @transition(field=status, source='interview_scheduled', target='not_accepted')
    def reject_after_interview(self):
        pass
