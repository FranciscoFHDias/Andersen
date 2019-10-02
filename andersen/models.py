from django.db import models

# Create your models here.

class Partner(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Referral(models.Model):
    company = models.CharField(max_length=50)
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name} at {self.company}'

class Client(models.Model):
    name = models.CharField(max_length=50)
    stage = models.CharField(max_length=50)
    value = models.CharField(max_length=200)
    partner = models.ForeignKey(Partner, related_name='clients', on_delete=models.CASCADE)
    referral = models.ManyToManyField(Referral, related_name='clients')
