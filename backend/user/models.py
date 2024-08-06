from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # Agrega otros campos adicionales que quieras en tu perfil

    def __str__(self):
        return self.user.username