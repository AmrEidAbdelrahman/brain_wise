# employees/serializers/employee_serializers.py

from datetime import datetime
from rest_framework import serializers
from brainwise_django.serializers import DynamicFieldsModelSerializer
from employees.models.employee import Employee

class EmployeeSerializer(DynamicFieldsModelSerializer):
    days_employeed = serializers.SerializerMethodField()

    def get_days_employeed(self, obj):
        if not obj.status == 'Hired':
            return 0
        return (datetime.now().day - obj.hired_on).days
    
    class Meta:
        model = Employee
        fields = '__all__'

    def to_representation(self, instance):
        res = super().to_representation(instance)
        if 'department' in res:
            from employees.serializers.department_serializers import DepartmentSerializer
            res['department'] = DepartmentSerializer(instance.department, fields=['id', 'name']).data
        if 'company' in res:
            from employees.serializers.company_serializers import CompanySerializer
            res['company'] = CompanySerializer(instance.company, fields=['id', 'name']).data
        return res
