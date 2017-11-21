from django.shortcuts import render
from cart.models import Products
from cart.serializers import ProductsSerializer
from rest_framework import viewsets

# Create your views here.
class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all().order_by('-name')
    serializer_class = ProductsSerializer
