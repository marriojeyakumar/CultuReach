from django.http import HttpResponse
from django.shortcuts import render
from .models import *

def home(request):
    return render(request, 'index.js', {})

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

def createUser(request):
    Iuser_id = user.objects.all().count() + 1
    Iemail = request.POST.get('email')
    Ipswrd = hash(request.POST.get('pswrd'))
    Iusername = request.POST.get('username')

    newuser = user(user_id = Iuser_id, email = Iemail, pswrd = Ipswrd, username = Iusername)
    newuser.save()

def createRoster(request):
    Ievent_id = request.POST.get('event_id')
    Iuser = request.POST.get('user_id')
    
    newroster = roster