from django.db import models

class event(models.Model):
    event_id = models.IntegerField()
    name = models.CharField(45)
    host_id = models.CharField(45)
    start_time = models.IntegerField()
    location = models.CharField(45)
    tags = models.CharField(45)
    culture = models.CharField(45)

class users(models.Model):
    user_id = models.IntegerField()
    email = models.CharField(45)
    pswrd = models.CharField(45)
    username = models.CharField(45)

class roster(models.Model):
    event_id = models.IntegerField()
    user_id = models.IntegerField()

class forum(models.Model):
    user_id = models.IntegerField()
    message = models.CharField(max_length=225)
    event_id = models.IntegerField()
    time = models.IntegerField()