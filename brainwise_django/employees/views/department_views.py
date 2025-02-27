# employees/views/department_views.py

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from employees.models.department import Department
from employees.serializers.department_serializers import DepartmentSerializer


class DepartmentViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing department instances.
    """
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()
    http_method_names = ['get']
