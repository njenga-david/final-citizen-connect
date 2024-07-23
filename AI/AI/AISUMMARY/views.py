from django.shortcuts import render
from django.http import HttpResponse

from .AIHelper.utils import summarize_function

# Create your views here.

def index(request):
    return HttpResponse("Hello, world..")


def incidents_summary(request):
    if request.method!='GET':
        return HttpResponse ('This endpoint requires a GET request', status =405)
    
    Incidents = 'incidents'
    processed_value = summarize_function(Incidents)

    return HttpResponse(processed_value)



def views_summary(request):
    if request.method!='GET':
        return HttpResponse ('This endpoint requires a GET request', status =405)
    
    Views = 'views'
    processed_value = summarize_function(Views)

    return HttpResponse(processed_value)

