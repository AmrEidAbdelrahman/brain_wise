from django.contrib import admin

from authentication_manager.models import User

# Register your models here.

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'role', 'is_superuser', 'is_staff']
    search_fields = ['username', 'role']
    list_filter = ['role', 'is_superuser', 'is_staff']
