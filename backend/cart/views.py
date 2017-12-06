from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from cart.models import Products, User
from cart.serializers import ProductsSerializer
from rest_framework import viewsets

import json
import logging

# Create your views here.
class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all().order_by('-name')
    serializer_class = ProductsSerializer


@csrf_exempt
def signup(request):
    user_info = json.loads(request.body.decode('utf-8'))
    user = User.objects.create_user(
        username=user_info['username'],
        email=user_info['email'],
        password=user_info['password']
    )

    user.save()

    return JsonResponse(None, safe=False)
