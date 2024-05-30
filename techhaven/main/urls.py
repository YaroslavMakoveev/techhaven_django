from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('phones', views.phones),
    path('laptops', views.laptops),
    path('headpones', views.headpones),
    path('tablets', views.tablets),
    path('other', views.other),
    path('cart', views.cart),
    path('product', views.product),
]
