from django.contrib.auth.models import AbstractUser
from django.db import models

class RoleChoices(models.TextChoices):
    ADMIN = 'Admin'
    MANAGER = 'Manager'
    EMPLOYEE = 'Employee'

class User(AbstractUser):
    role = models.CharField(max_length=50, choices=RoleChoices.choices, default=RoleChoices.EMPLOYEE)

    is_superuser = models.BooleanField(default=False)   
    is_staff = models.BooleanField(default=False)


    def __str__(self):
        return self.username
    
