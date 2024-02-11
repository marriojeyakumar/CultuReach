# import serializers from the REST framework
from rest_framework import serializers

# import the todo data model
from .models import CultuReach

# create a serializer class
class CultuReachSerializer(serializers.ModelSerializer):

	# create a meta class
	class event:
		model = CultuReach
		fields = ('host_id', 'start_time','event_id','name','location','description','tags','culture')
	class user:
		model = CultuReach
		fields = ('user_id', 'email','pswrd','username')
	class roster:
		model = CultuReach
		fields = ('event_id', 'user_id')
	class forum:
		model = CultuReach
		fields = ('user_id', 'message','event_id','time')