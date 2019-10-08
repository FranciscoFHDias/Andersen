from rest_framework import serializers
from jwt_auth.serializers import UserSerializer
from .models import Client, Partner, Referral

class ClientCreateSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)

    class Meta:
        model = Client
        fields = ('id', 'name', 'stage', 'value', 'priority', 'partner', 'referral', 'user',)

class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ('id', 'name',)

class ReferralSerializer(serializers.ModelSerializer):
    class Meta:
        model = Referral
        fields = ('id', 'company', 'name',)

class ClientReadSerializer(ClientCreateSerializer):

    partner = PartnerSerializer()
    referral = ReferralSerializer()

    class Meta(ClientCreateSerializer.Meta):
        fields = ('id', 'name', 'stage', 'value', 'priority', 'partner', 'referral', 'user', 'created_at', 'updated_at',)
