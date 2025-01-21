from rest_framework.pagination import PageNumberPagination


class ImgPagination(PageNumberPagination):
    page_size = 2  # Количество изображений на одной странице
    page_size_query_param = 'page_size'  # Позволяет клиенту изменять размер страницы
