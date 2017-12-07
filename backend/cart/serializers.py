from django.contrib.auth.models import User

from rest_framework import serializers
from cart.models import Products

class ProductsSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Products
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    products = serializers.PrimaryKeyRelatedField(many=True, queryset=Products.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'products')
