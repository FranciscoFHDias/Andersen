# Generated by Django 2.2.6 on 2019-10-02 22:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('andersen', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='referral',
            field=models.ManyToManyField(related_name='clients', to='andersen.Referral'),
        ),
    ]
