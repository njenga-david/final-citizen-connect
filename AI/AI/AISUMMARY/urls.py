from django.urls import path

from . import views

urlpatterns=[
    
    path('',views.index,name='index'),
    path('incidents/',views.incidents_summary,name='incident_summary'),
    path('views/',views.views_summary,name='view_summary'),
]