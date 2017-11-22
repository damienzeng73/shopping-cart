from django.db import models

# Create your models here.
class Products(models.Model):
    category = models.CharField(max_length=30)
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField()
    rating = models.PositiveSmallIntegerField(default=0)
    description = models.TextField(default='Product description.')
    image_url = models.TextField(default='')

    class Meta:
        db_table = 'products'
