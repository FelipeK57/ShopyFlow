from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from admons.models import admon
from admons.serializers import AdmonSerializer
from rest_framework.authtoken.models import Token
from user.models import Profile
from user.serializers import ProfileSerializer

@api_view(['POST'])
def login(request):
    code = request.data.get('code')
    password = request.data.get('password')

    if code is None or password is None:
        return Response({'error': 'Please provide both code and password'}, status=HTTP_400_BAD_REQUEST)
    try:
        admin = admon.objects.get(code=code)
    except admon.DoesNotExist:
        return Response({'error': 'Admin not found'}, status=HTTP_400_BAD_REQUEST)

    if not admin.user.check_password(password):
        return Response({'error': 'Incorrect password'}, status=HTTP_400_BAD_REQUEST)

    token, created = Token.objects.get_or_create(user=admin.user)

    serializer = AdmonSerializer(admin)

    return Response({'sessionId': token.key, 'admin': serializer.data})

@api_view(['POST'])
def logout(request):
    token = request.data.get('token')

    try:
        token = Token.objects.get(key=token)
    except Token.DoesNotExist:
        return Response({'error': 'Invalid token'}, status=HTTP_400_BAD_REQUEST)

    token.delete()

    return Response({'message': 'Logged out'})


@api_view(['POST'])
def loginUser(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'}, status=HTTP_400_BAD_REQUEST)
    try:
        profile = Profile.objects.get(user__username=username)
    except Profile.DoesNotExist:
        return Response({'error': 'User not found'}, status=HTTP_400_BAD_REQUEST)

    if not profile.user.check_password(password):
        return Response({'error': 'Incorrect password'}, status=HTTP_400_BAD_REQUEST)

    token, created = Token.objects.get_or_create(user=profile.user)

    serializer = ProfileSerializer(profile)

    return Response({'token': token.key, 'user': serializer.data})