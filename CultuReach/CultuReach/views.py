from django.http import HttpResponse

def index(request):
    return HttpResponse("Goodbye, world.")

def record_detail(request, record_id):
    return HttpResponse("Hello, world. You're record is: "+str(record_id))