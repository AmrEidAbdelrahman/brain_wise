from rest_framework.views import APIView
from rest_framework.response import Response
from employees.models.company import Company
from employees.models.department import Department
from employees.models.employee import Employee


class DashboardView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        departments = Department.objects.all()
        employees = Employee.objects.all()
        data = {
            'companies': companies.count(),
            'departments': departments.count(),
            'employees': employees.count(),
        }
        return Response(data)
