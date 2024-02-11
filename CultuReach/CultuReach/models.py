from django.db import models

class event(models.Model):
    event_id = models.IntegerField()
    name = models.CharField(max_length=45)
    host_id = models.CharField(max_length=45)
    start_time = models.IntegerField()
    location = models.CharField(max_length=45)
    tags = models.CharField(max_length=45)
    culture = models.CharField(max_length=45)

class users(models.Model):
    user_id = models.IntegerField()
    email = models.CharField(max_length=45)
    pswrd = models.CharField(max_length=45)
    username = models.CharField(max_length=45)

class roster(models.Model):
    event_id = models.IntegerField()
    user_id = models.IntegerField()

class forum(models.Model):
    user_id = models.IntegerField()
    message = models.CharField(max_length=225)
    event_id = models.IntegerField()
    time = models.IntegerField()