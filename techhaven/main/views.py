from django.shortcuts import render


def home(request):
    return render(request, 'main/home.html')


def phones(request):
    return render(request, 'main/phones.html')


def laptops(request):
    return render(request, 'main/laptops.html')


def headpones(request):
    return render(request, 'main/headpones.html')


def tablets(request):
    return render(request, 'main/tablets.html')


def other(request):
    return render(request, 'main/other.html')


def cart(request):
    return render(request, 'main/basket.html')

def product(request):
    return render(request, 'main/product_page.html')