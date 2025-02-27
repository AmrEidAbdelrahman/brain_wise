# employees/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from employees.views.company_views import CompanyViewSet
from employees.views.dashboard_views import DashboardView
from employees.views.department_views import DepartmentViewSet
from employees.views.employee_views import EmployeeViewSet

router = DefaultRouter()
router.register(r'companies', CompanyViewSet, basename='companies')
router.register(r'departments', DepartmentViewSet, basename='departments')
router.register(r'employees', EmployeeViewSet, basename='employees')

urlpatterns = [
    path('', include(router.urls)),
    path('dashboard/', DashboardView.as_view(), name='dashboard'), 

]
