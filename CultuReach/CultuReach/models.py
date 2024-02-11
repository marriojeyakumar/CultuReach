from django.db import models

class Event(models.Model):
    event_id = models.IntegerField()
    name = models.CharField(45)
    