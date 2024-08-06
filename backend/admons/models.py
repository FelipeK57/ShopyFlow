from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class admon(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    code = models.CharField(max_length=10)
    # Agrega otros campos adicionales que quieras en tu perfil

    def __str__(self):
        return self.user.username