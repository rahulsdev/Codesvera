from django.db import models

# Create your models here.
class Category(models.Model):
    category = models.CharField(max_length=25)
    class Meta:
        db_table = 'category'
    def __str__(self):
        return self.category
class Portfolio(models.Model):
    images = models.ImageField(upload_to='portfolio_images/')
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    class Meta:
        db_table = 'portfolio'
    def __str__(self):
        return self.category,self.images

class OurClients(models.Model):
    client_name = models.CharField(max_length=100)
    client_comment = models.CharField(max_length=255)
    clent_image = models.ImageField(upload_to='client_images/')
    class Meta:
        db_table = 'client_details'

    def __str__(self):
        return self.clent_image,self.client_comment,self.client_name