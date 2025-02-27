from django.contrib import admin

from employees.models.company import Company
from employees.models.department import Department
from employees.models.employee import Employee

# Register your models here.

@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ['name', 'name', 'email', "company", "department",  "status"] 
    search_fields = ['username']


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']
    list_filter = ['name']

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ['name', 'company']
    search_fields = ['name', 'company']
    list_filter = ['name', 'company']
