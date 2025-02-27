# employees/views/employee_views.py

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from employees.models.employee import Employee
from employees.serializers.employee_serializers import EmployeeSerializer
from rest_framework.decorators import action

class EmployeeViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing employee instances.
    """
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            self.permission_classes = [AllowAny]
        return super(EmployeeViewSet, self).get_permissions()

    @action(detail=True, methods=['post'], url_path='schedule-interview')
    def schedule_interview(self, request, pk=None):
        employee = self.get_object()
        employee.schedule_interview()
        employee.save()
        return Response({'status': 'Interview scheduled'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'], url_path='reject-application')
    def reject_application(self, request, pk=None):
        employee = self.get_object()
        employee.reject_application()
        employee.save()
        return Response({'status': 'Application rejected'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'], url_path='hire')
    def hire(self, request, pk=None):
        employee = self.get_object()
        employee.hire()
        employee.save()
        return Response({'status': 'Employee hired'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'], url_path='reject-after-interview')
    def reject_after_interview(self, request, pk=None):
        employee = self.get_object()
        employee.reject_after_interview()
        employee.save()
        return Response({'status': 'Rejected after interview'}, status=status.HTTP_200_OK)
