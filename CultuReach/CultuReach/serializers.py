# import serializers from the REST framework
from rest_framework import serializers

# import the todo data model
from .models import *

# create a serializer class
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = event
        fields = ('host_id', 'start_time', 'event_id', 'name', 'location', 'description', 'tags', 'culture')

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = ('user_id', 'email', 'pswrd', 'username')

class RosterSerializer(serializers.ModelSerializer):
    class Meta:
        model = roster
        fields = ('event_id', 'user_id')

class ForumSerializer(serializers.ModelSerializer):
    class Meta:
        model = forum
        fields = ('user_id', 'message', 'event_id', 'time')