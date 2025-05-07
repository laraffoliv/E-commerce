from django.http import HttpResponse
from django.shortcuts import render
from .models import Product

# View para a página inicial com filtro de produtos
def index(request):
    search_query = request.GET.get('search', '')  # Obtém o valor da pesquisa a partir da URL
    if search_query:  # Se a pesquisa não for vazia
        # Filtra os produtos com base no nome, fazendo uma busca insensível a maiúsculas/minúsculas
        products = Product.objects.filter(name__icontains=search_query)
    else:
        # Caso contrário, exibe todos os produtos
        products = Product.objects.all()

    return render(request, 'index.html', {'products': products})

# View para a página "New Arrivals" (Produtos Novos)
def new(request):
    return HttpResponse('Welcome to PyShop New Arrivals')

