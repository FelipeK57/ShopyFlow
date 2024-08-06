from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from backend.administrador.models import Admin
from backend.administrador.serializers import AdminSerializer
from rest_framework.authtoken.models import Token

@api_view(['POST'])
def login(request):
    code = request.data.get('code')
    password = request.data.get('password')

    if code is None or password is None:
        return Response({'error': 'Please provide both code and password'}, status=HTTP_400_BAD_REQUEST)
    try:
        admin = Admin.objects.get(codigo=code)
    except Admin.DoesNotExist:
        return Response({'error': 'Admin not found'}, status=HTTP_400_BAD_REQUEST)

    if not admin.user.check_password(password):
        return Response({'error': 'Incorrect password'}, status=HTTP_400_BAD_REQUEST)

    token, created = Token.objects.get_or_create(user=admin.user)

    serializer = AdminSerializer(admin)

    return Response({'sessionId': token.key, 'admin': serializer.data})
