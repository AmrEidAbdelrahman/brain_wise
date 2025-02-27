

from brainwise_django.serializers import DynamicFieldsModelSerializer
from employees.models.company import Company
from rest_framework import serializers

from employees.serializers.department_serializers import DepartmentSerializer
from employees.serializers.employee_serializers import EmployeeSerializer


class CompanySerializer(DynamicFieldsModelSerializer):
    employees = EmployeeSerializer(many=True, read_only=True)
    departments = DepartmentSerializer(many=True, read_only=True)
    
    class Meta:
        model = Company
        fields = '__all__'
