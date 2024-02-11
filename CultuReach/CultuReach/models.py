from django.db import models

class Event(models.Model):
    event_id = models.IntegerField()
    name = models.CharField(max_length=45)
    