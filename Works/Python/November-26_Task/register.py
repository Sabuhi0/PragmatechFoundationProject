import re
regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'
class Register():

    def __init__(self,name="Sabuhi",surname="Gasimov",email="sebush@gmail.com",phone="0502015187",password="sabush",qisamelumat="sabuhi)"):
        self.name=name
        self.surname=surname
        self.email=email
        self.phone=phone
        self.password=password
        self.qisamelumat=qisamelumat

    def Username(self):
        self.name=input(str("Adi daxil edin: "))
        if self.name != "" :
            print("duzgundur")
        else:
            return self.name

    def Surname_(self):
        self.surname=input(str("Soyadini daxil edin: "))
        if self.surname != "":
            print("duzgundur")
        else:
            print('doldurmaq zeruridir')
    def Mailiyaz(self):
        self.email=input(str("E-mail daxil et: "))
        if (re.search(regex,self.email)):
            print("duz yazdin")
        else:
            print("sehv yazdin")
    
    def telnumber(self):
        self.phone=input(str("Nomreni daxil et daxil et:+994 "))
        val = True

        if len(self.phone) !=9:
            print('Uzunlugu 9 dan cox ve ya az ola bilmez')
            val
            
        if not all(char.isdigit() for char in self.phone):
            print('Reqemlerden ibaret olmalidir')
            val
        if self.phone.startswith("50",0,2):
            print("Yigdiginiz nomre duzgundur")
            val
        elif self.phone.startswith("51",0,2):
            print("Yigdiginiz nomre duzgundur")
            val
        elif self.phone.startswith("10",0,2):
            print("Yigdiginiz nomre duzgundur")
            val
        elif self.phone.startswith("99",0,2):
            print("Yigdiginiz nomre duzgundur")
            val
        elif self.phone.startswith("55",0,2):
            print("Yigdiginiz nomre duzgundur")
            val
        elif self.phone.startswith("70",0,2):
            print("Yigdiginiz nomre duzgundur")
            val
        elif self.phone.startswith("77",0,2):
            print("Yigdiginiz nomre duzgundur")
            val

        else:
            print("Sehv dushmusuz")
            val=False
        

    def paSSword(self):
        self.password=input(str("Parolu daxil et: "))
        val = True
        
        if len(self.password) < 8:
            print('Minimum 8 xarakterden ibaret olmalidir qaqash')
            val = False
            
        if len(self.password) > 20:
            print('Maksimum 20 xarakterden ibaret olmalidir')
            val = False
            
        if not any(char.isdigit() for char in self.password):
            print('Daxilinde mutleq bir reqem olmalidir')
            val = False
            
        if not any(char.isupper() for char in self.password):
            print('Minimum bir eded boyuk herf olmalidir.')
            val = False

        count=0
        for i in self.password:    
            if(i.islower()):
                count=count+1  
                if count>1:
                    val
                else:
                    val=False
            
        if val:
            return val

    def fewinfo(self):
        self.password=input(str("Haqqinda biraz info ver: "))

        
Goster=Register()
Goster.Username()
Goster.Surname_()
Goster.Mailiyaz()
Goster.paSSword()
Goster.telnumber()
Goster.fewinfo()