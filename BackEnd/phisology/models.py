from django.db import models
from django.db.models import CharField
from phonenumber_field.modelfields import PhoneNumberField


class MainWorld(models.Model): # 
    profession = models.CharField(max_length=35)
    main_text = models.CharField(max_length=500)
    publication = models.PositiveSmallIntegerField(help_text='количества публикации')
    follower = models.CharField(max_length=25,help_text='количества подписчиков')
    subscription = models.PositiveSmallIntegerField(help_text='количества людей на которые вы подписаны ')
    main_photo = models.ImageField(upload_to='main_photo/',blank=True,null=True)


    def __str__(self):
        return f'{self.main_text}'

########################################################################################
class AboutMe(models.Model):
    bio = models.TextField()
    profession = models.CharField(max_length=35)
    about_me = models.CharField(max_length=25)
    photo = models.ImageField(upload_to='about_me/')
    back_round_img = models.ImageField(upload_to='about_me/')


    def __str__(self):
        return f'{self.profession}'


####################################################################################

class Consultation(models.Model):
    title = models.CharField(max_length=512)
    description = models.TextField(null=True, blank=True)
    duration = models.CharField(max_length=512)
    format = models.CharField(max_length=512)
    feedback = models.CharField(max_length=512, help_text='Обратная свзять')
    price = models.PositiveSmallIntegerField(default=100)

    def __str__(self):
        return f'{self.title} - {self.price}'

class Consultation_Keys(models.Model):
    consultation = models.ForeignKey(Consultation, related_name='con_keys', on_delete=models.CASCADE)
    keys = models.CharField(max_length=512)


    def __str__(self):
        return f'{self.consultation}'

###########################################################################################


class Registration(models.Model):
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    email = models.EmailField(unique=True)
    number = PhoneNumberField(null=True, blank=True)
    telegram = models.CharField(max_length=25,null=True,blank=True)
    country = models.CharField(max_length=32)

    def __str__(self):
        return f'{self.first_name} - {self.email}'



###########################################################################################

class My_Services(models.Model):
    title = models.CharField(max_length=32)

    def __str__(self):
        return f'{self.title}'

class Pattern(models.Model):
    PATTERN = (
        ('pattern 1' , 'pattern 1'),
        ('pattern 2 ','pattern 2 '),
    )
    patterns = models.CharField(max_length=25,choices=PATTERN)

    def __str__(self):
        return f'{self.patterns}'


class Services(models.Model):
    my_services = models.ForeignKey(My_Services, related_name='services', on_delete=models.CASCADE,null=True,blank=True)
    name_services = models.CharField(max_length=255)
    text1 = models.TextField(null=True,blank=True)
    price = models.PositiveSmallIntegerField(default=200)
    text2 = models.TextField(null=True,blank=True)
    text3 = models.TextField(null=True,blank=True)
    text4 = models.TextField(null=True,blank=True)
    pattern = models.ForeignKey(Pattern,on_delete=models.CASCADE)
    main_img = models.ImageField(upload_to='img/',null=True,blank=True)

    def __str__(self):
        return f'{self.name_services} - {self.price}'






class Services_Keys(models.Model):
    services_title = models.ForeignKey(Services, related_name='services_keys', on_delete=models.CASCADE)
    keys = models.CharField(max_length=512,null=True,blank=True)

    def __str__(self):
        return f'{self.services_title}'


class ImgServices(models.Model):
    img = models.ImageField(upload_to='services_photo/')
    services_connect = models.ForeignKey(Services,related_name='photo',on_delete=models.CASCADE)
    services_text = models.TextField(null=True,blank=True)
    
    def __str__(self):
        return f'{self.services_connect} - {self.services_text}'



###############################################################################################################


class Review(models.Model):
    feedback = models.CharField(max_length=35,help_text='отзывы моих клиентов')


class Img(models.Model):
    img = models.ImageField(upload_to='review_img/')
    review_connect = models.ForeignKey(Review,related_name='feedback_img',on_delete=models.CASCADE)


################################################################################################################


class Questions(models.Model):
    questions = models.CharField(max_length=100,null=True,blank=True)
    answer = models.TextField(null=True,blank=True)

    def __str__(self):
        return f'{self.questions}'


#################################################################################################################


class Public_offer(models.Model):
    main = models.CharField(max_length = 35,null=True,blank=True)

    def __str__(self):
        return f'{self.main}'


class Public_offerText(models.Model):
    title = models.CharField(max_length = 500,null=True,blank=True)
    text = models.TextField(null=True,blank=True)
    connect = models.ForeignKey(Public_offer,on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title}'


class SafetyMain(models.Model):
    safety_name = models.CharField(max_length=55)

    def __str__(self):
        return f'{self.safety_name}'


class Safety(models.Model):
    title = models.CharField(max_length = 250,null=True,blank=True)
    text = models.TextField(null=True,blank=True)
    def __str__(self):
        return f'{self.title}'



class My_contact(models.Model):
    email = CharField(max_length=35,null=True,blank=True)
    my_phone = PhoneNumberField(null=True,blank=True)
    name = models.CharField(max_length=100,null=True,blank=True)
    title = models.CharField(max_length=250)





