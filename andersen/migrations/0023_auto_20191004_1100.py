# Generated by Django 2.2.6 on 2019-10-04 10:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('andersen', '0022_auto_20191004_0253'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='referral',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='clients', to='andersen.Referral'),
        ),
    ]
