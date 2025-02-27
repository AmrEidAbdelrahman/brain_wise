
from django.db.models import F
from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver
from employees.models.department import Department

@receiver(post_save, sender=Department)
def new_department_added(sender, instance, created, **kwargs):
    if created:
        print(f"New department added: {instance.name}")
        company = instance.company
        company.number_of_departments = F('number_of_departments') + 1
        company.save(update_fields=['number_of_departments'])
        
@receiver(pre_delete, sender=Department)
def department_deleted(sender, instance, **kwargs):
    company = instance.company
    company.number_of_departments = F('number_of_departments') - 1
    company.save(update_fields=['number_of_departments'])
