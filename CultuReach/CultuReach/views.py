from django.http import HttpResponse
from django.shortcuts import render
from .models import *


#________________________________________
# import view sets from the REST framework
from rest_framework import viewsets

# import the TodoSerializer from the serializer file
from .serializers import CultuReachSerializer

# import the Todo model from the models file
from .models import CultuReach

# create a class for the Todo model viewsets
class CultuReachView(viewsets.ModelViewSet):

	# create a serializer class and 
	# assign it to the TodoSerializer class
	serializer_class = CultuReachSerializer

	# define a variable and populate it 
	# with the Todo list objects
	queryset = CultuReach.objects.all()
#________________________________________



def home(request):
    return render(request, 'public/home.html', {})

def search(request):
    context = {}

    if request.method == 'GET':
        culture = request.GET.get('event_culture')
        tags = request.GET.get('event_tags')
        tags = tags.split()

        events = event.objects.filter(event_culture=culture)

        matches = []
        for event1 in events:
            match_tag = 0
            for tag in tags:
                if tag in event1.tags:
                    match_tag += 1
            if match_tag > 0:
                matches.append(event1)
                
        context['events'] = matches
        
    return render(request, 'index.html', context)

def getEventForum(request):
    context = {}

    if request.method == 'GET':
        curEvent_id = request.GET.get('event_id')
        eventForum = forum.objects.filter(event_id=curEvent_id)
                
        context['eventForum'] = eventForum
        
    return render(request, 'index.html', context)

def getRoster(request):
    context = {}

    if request.method == 'GET':
        curEvent_id = request.GET.get('event_id')
        curRoster = roster.objects.filter(event_id=curEvent_id)
                
        context['eventForum'] = curRoster
        
    return render(request, 'index.html', context)

#returns boolean
def checkLogin(request):
    if request.method == 'GET':
        curEmail = request.GET.get('email')
        curPswrd = hash(request.GET.get('pswrd'))

        curUser = user.object.filter(email=curEmail, pswrd=curPswrd)

        if curUser.objects.all().count() == 0:
            return False
        return True


def createEvent(request):
    Ihost_id = request.POST.get('host_id')
    Istart_time = request.POST.get('start_time')
    Iname = request.POST.get('name')
    Ilocation = request.POST.get('location')
    Idescription = request.POST.get('description')
    Itags = request.POST.get('tags')
    Iculture = request.POST.get('culture')

    eventCount = event.objects.all().count()
    newevent = event(host_id = Ihost_id, start_time = Istart_time, event_id = eventCount + 1, name = Iname, location = Ilocation, desription = Idescription, tags = Itags, culture = Iculture)
    newevent.save()

#returns string if 
def createUser(request):
    Iuser_id = user.objects.all().count() + 1
    Iemail = request.POST.get('email')
    Ipswrd = hash(request.POST.get('pswrd'))
    Iusername = request.POST.get('username')

    checkUser = user.object.filter(username = Iusername, email = Iemail)
    if checkUser != 0:
        return 'Username or email is already taken'

    newuser = user(user_id = Iuser_id, email = Iemail, pswrd = Ipswrd, username = Iusername)
    newuser.save()

def createRoster(request):
    Ievent_id = request.POST.get('event_id')
    Iuser_id = request.POST.get('user_id')
    
    newroster = roster(event_id = Ievent_id, user_id = Iuser_id)
    newroster.save()

def createForum(request):
    Iuser_id = request.POST.get('user_id')
    Imessage = request.POST.get('message')
    Ievent_id = request.POST.get('event_id')
    Itime = request.POST.get('time')

    newforum = forum(user_id = Iuser_id, message = Imessage, event_id = Ievent_id, time = Itime)
    newforum.save()
