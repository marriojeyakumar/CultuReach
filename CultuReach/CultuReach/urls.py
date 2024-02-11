"""
URL configuration for CultuReach project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
'''from django.urls import path
#this directory, method named views
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('home/', views.home),
]'''








from django.contrib import admin

# add include to the path
from django.urls import path, include

# import views from todo
from CultuReach import views

# import routers from the REST framework
# it is necessary for routing
from rest_framework import routers

# create a router object
router = routers.DefaultRouter()

# register the router
router.register(r'tasks',views.EventView, 'task')
router.register(r'tasks',views.UsersView, 'task')
router.register(r'tasks',views.RosterView, 'task')
router.register(r'tasks',views.ForumView, 'task')

urlpatterns = [
	path('admin/', admin.site.urls),

	# add another path to the url patterns
	# when you visit the localhost:8000/api
	# you should be routed to the django Rest framework
	path('api/', include(router.urls))


]

