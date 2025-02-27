from rest_framework import viewsets

from employees.models.company import Company
from employees.serializers.company_serializers import CompanySerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny


class CompanyViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing company instances.
    """
    serializer_class = CompanySerializer
    queryset = Company.objects.all()
    http_method_names = ['get']
