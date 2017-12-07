from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User

from rest_framework import viewsets, permissions
from cart.models import Products
from cart.serializers import ProductsSerializer
from cart.serializers import UserSerializer
from cart.permissions import IsOwnerOrReadOnly

import json
import logging

# Create your views here.
class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all().order_by('-name')
    serializer_class = ProductsSerializer
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    )

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


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
