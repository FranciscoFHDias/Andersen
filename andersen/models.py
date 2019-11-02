from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Partner(models.Model):
    name = models.CharField(max_length=50)
    user = models.ForeignKey(User, related_name='partners', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Referral(models.Model):
    company = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    user = models.ForeignKey(User, related_name='referrals', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name} at {self.company}'

class Client(models.Model):
    name = models.CharField(max_length=50)
    stage = models.CharField(max_length=50)
    value = models.IntegerField()
    priority = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    partner = models.ForeignKey(Partner, related_name='clients', on_delete=models.CASCADE)
    referral = models.ForeignKey(Referral, related_name='clients', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='clients', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}, stage {self.stage} worth {self.value}'
