

from brainwise_django.serializers import DynamicFieldsModelSerializer
from employees.models.department import Department
from rest_framework import serializers

class DepartmentSerializer(DynamicFieldsModelSerializer):

    
    class Meta:
        model = Department
        fields = '__all__'
        depth = 1

    def validate(self, data):
        department = data.get('department')
        company = data.get('company')
        if department.company != company:
            raise serializers.ValidationError('Department and Company do not match')
        
        return data
