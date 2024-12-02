// 1-Projectni tekshirish yani npm run qilganda xatolik bermasin
// 2- PM => Process managament => npm i pm2 -g
// 3- pm2 status => pm2 ni tekshiramiz
// pm2 ls orqali pm 2 da qanday narslar run bolib turganini korsatadi yani bu ham tekshirishni ikkinchi yoli
// pm2 start main fileni yani Server.js ni avval asosiy faylimizni ishgsa tushirib olamiz
// pm2 start server.js --name"AdamReja" pascal caseda yozamiz doim
// pm2 logs ni vazifasi projectimizda qanday console loglar chiqsa shularni bizga korsatadi 
// pm2 log 1 yoki 0 deb son yozib biz aynan qaysi iddagi projectni loglarini kormoqchiligimizni define qilishimiz mumkin (id)
// pm2 stop qilsak bo'ladi to'xtatish uchun (id)
// pm2 restart qilsak bo'ladi qyata ishga tushirish uchun (id)
// pm2 delete (id) shu orqali projectni ochirish mumkin lekin pm2 delete qilishdan oldin qaysi projectni delete qimoqchi bolsak shuni stop qilishimiz kerak bolmasa zombi bolib qoladi
// pm2 kill degan komandani ishlatmaymiz chunki hamma projectni ochirib tashaymiz
/*  Serverga ulanish

Terminalga kiramiz
cmd shift K ni bosamiz
Secure shell da turgan holatda o'ng tomondagi serverlarni pastidagi + ni bosib shuni paste qilamiz root@85.31.232.70 -p 22 
connectni bosamiz
yes deb
yozamiz
va passwordni paste qilamiz password: Ismoiljon98!
ls qilib koramiz agar snap turgan bolsa 
cd / qilib turib eng boshiga borib olamiz 
cd home qilib doim homega kiramiz
mkdir MIT22 qilib folder yaratsak boladi lkn biz uchun uje yaratib qoyilgan
qayerdaligim esimdan chiqib qolsa qyerga kirganim pwd deb yozamiz yani pwd komandasi orqali qayerda turganimizni bilib olamiz
qaysi porjectni deploy qimoqchi bolsak shuni githubdagi 
https://github.com/Aziz-boy/Reja-Application.git httpsini olamiz
git clone https://github.com/Aziz-boy/Reja-Application.git qilsak bizga shu projectni clone qilib beradi 
cd Reja-Application qilib Reja-Application folderni ichiga kirib olamiz
pm2 start server.js --name="AdamReja" qilib run qilamiz 
npm i deb packagelarni install qilib olamiz chunki githubimizda nodemoduleslar yoq
server.js ni ichiga kirish uchun vim server.js qilish kerak    vim server.js
Firewall - serverlarimizni tashqi olamdan himoya qiladigan olvli devor 
biz projectni hammaga ham ochib bermaymiz qaysidir qizmlari yopiq bolishi kerak 
ufw status orqali firewall statsuni korishimiz mumkin
yani biz ufw tosig'imizga aytopmizki agar userlar 6002 ga request qilsa ochib ber deyapmiz
rm -rf ADAM deb yozib papkani ochirask boladi 
ufw status
sudo ufw status numbered 
sudo ufw delete (id)




*/