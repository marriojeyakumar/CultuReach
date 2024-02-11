from django.http import HttpResponse
from django.shortcuts import render
from .models import *

def search(request):
    context = {}

    if request.method == 'GET':
        culture = request.GET.get('event_culture')
        tags = request.GET.get('event_tags')
        tags = tags.split()

        events = event.objects.filter(event_culture=culture)

        for event1 in events:
            if event1.tags


        
    return render(request, 'index.html', context)

def createEvent(request, host_id, start_time, name, location, description, tags, culture):
    event = Event(host_id, start_time, )