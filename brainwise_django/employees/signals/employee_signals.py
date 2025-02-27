from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver
from django.db.models import F
from employees.models.employee import Employee

@receiver(post_save, sender=Employee)
def new_employee_added(sender, instance, created, **kwargs):
    if created:
        print(f"New employee added: {instance.name}")
        company = instance.company
        department = instance.department
        company.number_of_employees = F('number_of_employees') + 1
        company.save(update_fields=['number_of_employees'])
        department.number_of_employees = F('number_of_employees') + 1
        department.save(update_fields=['number_of_employees'])


@receiver(pre_delete, sender=Employee)
def employee_deleted(sender, instance, **kwargs):
    company = instance.company
    department = instance.department
    company.number_of_employees = F('number_of_employees') - 1
    company.save(update_fields=['number_of_employees'])
    department.number_of_employees = F('number_of_employees') - 1
    department.save(update_fields=['number_of_employees'])
