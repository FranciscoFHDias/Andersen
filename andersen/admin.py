from django.contrib import admin
from .models import Client, Partner, Referral

# Register your models here.
admin.site.register(Client)
admin.site.register(Partner)
admin.site.register(Referral)
