from django.db import models
from django.conf import settings

# Create your models here.
class Products(models.Model):
    category = models.CharField(max_length=30)
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    rating = models.PositiveSmallIntegerField(default=0)
    description = models.TextField(default='Product description.')
    image_url = models.TextField(default='')
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='products', on_delete=models.CASCADE)

    class Meta:
        db_table = 'products'
