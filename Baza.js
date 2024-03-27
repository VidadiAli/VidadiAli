
let listOfText = [
    {
        text_head: "Sən də proqramlaşdırmaya başla.",
        text_phraise: "İxtiyarı yaş qrupları üzrə front-end proqramlaşdırma sahəsində dərslərimiz mümkündür. Sən də bizə qoşul, sən də mütəxəssis ol",
        text_button: "Ətraflı",
        text_link: "educate.html",
        carosel_img: "image/article.jpg"
    },
    {
        text_head: "Texnologiya, Kainat, Təbiət",
        text_phraise: "Əgər bunlar sənə də maraqlıdırsa, bağlantı ilə keçid edərək, dünyada baş verən ən önəmli hadisələr haqqında oxuya bilərsən",
        text_button: "Oxumağa get",
        text_link: "news.html",
        carosel_img: "image/infor.jpg"
    },
    {
        text_head: "Yanlış metod səni yorub?",
        text_phraise: "O zaman tələs. İnformatika fənnini ən düzgün şəkildə öyrənib, qəbulda yüksək nəticə istəyirsənsə, sən də bizə qoşul",
        text_button: "Elə indi öyrən",
        text_link: "educate.html",
        carosel_img: "image/web.jpg"
    }
];





let listOfBox = [
    {
        headOfBox: "Elə indi web proqramlaşdırmaya başla",
        line1OfBox: "Həm online, həm də ənənəvi üsulla sən də bizə qoşul",
        line2OfBox: "Birgə öyrənək!",
        linkOfBox: "educate.html",
        photoOfBox: "image/webCover1.jpeg",
        iconOfBox: 'bx bxs-graduation',
        nameOfBox: 'Təhsil'
    },
    {
        headOfBox: "Elə indi proqramlaşdırmaya başla",
        line1OfBox: "Youtube videolarımı izləyərək, proqramlaşdırmaya ilk addımını at",
        line2OfBox: "Birgə öyrənək!",
        linkOfBox: "https://www.youtube.com/@writecode1208",
        photoOfBox: "image/ders1.png",
        iconOfBox: 'bx bxl-youtube',
        nameOfBox: 'Youtube'
    },
    {
        headOfBox: "Ən son proyektlərim",
        line1OfBox: "Keçid edərək, ən son proyektlərimi görə bilərsən",
        line2OfBox: "məni araşdır!",
        linkOfBox: "myWorks.html",
        photoOfBox: "image/web.jpg",
        iconOfBox: 'bx bxs-briefcase-alt-2',
        nameOfBox: 'Proyektlərim'
    },
    {
        headOfBox: "Dünyada baş verənlər sənə də maraqlıdır?",
        line1OfBox: "O zaman keçid et, ən son hadisələrlə bağlı fikirlərimizi öyrən!",
        line2OfBox: "Birgə araşdıraq!",
        linkOfBox: "news.html",
        photoOfBox: "image/ArticleCover1.jpeg",
        iconOfBox: 'bx bxs-edit-alt',
        nameOfBox: 'Yazılarım'
    },
    {
        headOfBox: "Kitab açılmayan qəlblərin aynasıdır",
        line1OfBox: "Həm Azərbaycan, həm də Dünya ədəbiyyatı ilə tanış ol, dünyagörüşünü artır",
        line2OfBox: "Birgə oxuyaq!",
        linkOfBox: "book.html",
        photoOfBox: "image/bookCover1.jpeg",
        iconOfBox: 'bx bxs-book-open',
        nameOfBox: 'Oxuyaq?'
    },
    {
        headOfBox: "İzləməyə film axtarırsan?",
        line1OfBox: "O zaman ən düzgün ünvandasan. Elə indi keçid et, ən son film və seriallarla tanış ol!",
        line2OfBox: "Birgə izləyək!",
        linkOfBox: "film.html",
        photoOfBox: "image/FilmCover1.jpeg",
        iconOfBox: 'bx bx-film',
        nameOfBox: 'İzləyək?'
    }
];





const listOfWorks = [
    {
        linkOfWorks: 'https://artcenter.az',
        nameOfWorks: 'Arcenter'
    },
    {
        linkOfWorks: 'https://fline.az',
        nameOfWorks: 'Fline'
    },
    {
        linkOfWorks: 'https://orkhan-alibayli.com',
        nameOfWorks: 'Orkhan Alibayli'
    },
    {
        linkOfWorks: 'https://vidadiali.github.io/escmusic',
        nameOfWorks: 'ESC Music'
    }
]






















let listOfBaza = [
    {
        tema: 'nature',
        NewsName: "Hindistan Ayda!",
        NewsDate: "23-08-2023",
        NewsWriter: "Vidadi Ali",
        NewsCover: "image/hindistan ayda.png",
        NewsParagraf: `<a href='https://www.isro.gov.in/Chandrayaan3.html' target='_blank'>Chandrayaan-3</a> programı - Hindistanın ən yeni və uğurlu nəticə verən Ay Kəşfi üçün vəzifələnmiş programadır. Bundan əvvəl də 
            <a href='https://www.isro.gov.in/' target='_blank'>ISRO</a> (Hindistan Kosmik Araştırma Mərkəzi) - tərəfindən 2 dəfə bu proqram gerçəkləşdirilmək üzrə planlaşdırılmışdı. Lakin bəzi əskikliklər ucbatından uğurlu nəticə əldə oluna bilinməmişdi. Amma Chandrayaan-3 programı vasitəsi ilə nəhayət ki, Hindistan bunu bacardı. Və beləcə Aya kosmik gəmi göndərən dördüncü ölkə oldu.
              İnsan övladı bundan əvvəl ki, 3 uçuş zamanı Ayın ancaq görünən hissəsində fəaliyyət göstərə bilmişdi. Amma Hindistan isə Ayın görünməyən tərəfinə ilk uçuş edən ölkə oldu. Bir sözlə Ayın qaranlıq, heç vaxt Günəş işığı almayan üzü.<br><br>
            Bir ilkə imza atan Hindistan Kosmik Agentliyinin Chandrayaan-3 ün Vikram gəmisi ilə yerinə yetirdiyi bu enişin 3 əsas vəzifəsinə aşağıda diqqət edək<br><br>
            1. Aya yumşaq eniş: Ayın cənub qütbündə yumşaq eniş <br>
            2. Rover Delivery: Ayın səthini araşdırmaq üçün bir rover, yəni araşdırma maşınının göndərilməsi. <br>
            3. Elmi Tədqiqat: Ayın geoloji quruluşunu, mineral tərkibini və atmosfer xüsusiyyətlərini tədqiq edən elmi təcrübələrin aparılması.<br>
             Bununla artıq Hindistan Kosmik alanda müəyyən mövqe tutan və bütün kosmik araşdırmalarda başlıca rol oynayan bir dövlətə çevrildi.
             Eniş zamanı təqdim olunan canlı yayımda Hindistanın baş naziri <a href='https://tr.wikipedia.org/wiki/Narendra_Modi'>Narendra Modi</a>nin çıxış etməsi baş tutan bu inkişafın Hindistan üçün bir çox tərəfdən, həmçinin, siyasi olaraq da çox mühim olmasının göstəricisi idi. `
    },
    {
        tema: 'book',
        NewsName: "Heyvan Ferması",
        NewsDate: "01-03-2024",
        NewsWriter: "George Orwell",
        NewsCover: "image/heyvan fermasi.png",
        NewsParagraf: ``
    },
    {
        tema: 'book',
        NewsName: "Şirin portağal ağacım",
        NewsDate: "01-03-2024",
        NewsWriter: "Joze Mauru di Vaskonselos",
        NewsCover: "image/shirin portagal agaci.png",
        NewsParagraf: ``
    },
    {
        tema: 'book',
        NewsName: "Balaca Şəhzadə",
        NewsDate: "01-03-2024",
        NewsWriter: "Antuan de Sent-Ekzüperi",
        NewsCover: "image/balaca shehzade.png",
        NewsParagraf: ``
    },
    {
        tema: 'book',
        NewsName: "Mən Meymunam?",
        NewsDate: "01-03-2024",
        NewsWriter: "Fransisko Ayala",
        NewsCover: "image/men meymunam.png",
        NewsParagraf: ``
    },
    {
        tema: 'film',
        NewsName: "Dune 2",
        NewsDate: "11-03-2024",
        NewsWriter: "Denis Villeneuve",
        NewsCover: "image/dune.png",
        NewsParagraf: `Film haqqında təəssüratlarımı bölüşərkən iki fərqli yanaşmanı izləyəcəm. Bunlardan ilki 
        filmin gedişatı, ikincisi isə ötürdüyü mesajlar olacaq.

        İlk öncə xatırlayaq ki, <a href="https://tr.wikipedia.org/wiki/Frank_Herbert" target="_blank"  style = "color: aqua">Frank Herbert</a>
        in eyni adlı romanından uyarlanmış bu film özünün iki il əvvəl 
        yayımlanmış ilk bölümünün ardını ehtiva edir. Mövzu 10 min il sonra daha qaranlıq və mürəkkəb formaya 
        təkamülləşmiş dünyaları əhatə edən fantastikadır. Təkcə Dune planetini deyil, həmçinin həyatın aşkarlandığı 
        digər planetlər, onların idarəsindən məsul olan sülalələr və bu taxt savaşlarında hər zaman olduğu kimi heçə
         sayılan canlar və o canlar üçün edilən fədakarlıqları göz önündə tutulub. <br><br>
        
        Film haqqında olan fikirlərimə gəlincə isə birinci bölüm olduğu kimi, bu bölüm də gözalıcı effektlər, səs, 
        musiqi, aktyorların möhtəşəm oyun sərgiləməsi, möhtəşəm rejissor işi ilə bizi yenə özünə heyran buraxdı. 
        İstər <a href="https://tr.wikipedia.org/wiki/Timoth%C3%A9e_Chalamet" target="_blank" style = "color: aqua">Timothée Chalamet</a>, istərsə də
        <a href="https://tr.wikipedia.org/wiki/Zendaya" target="_blank"  style = "color: aqua">Zendaya</a>nın sərgilədikləri 
        aktyorluq izlədiyimiz filmin daha da çəkici olmasında mühim rol oynadı. 
        Daha irəli tarixi mövzu alıb və o tarixdə görsəlləşdirdikləri texnologiya, insanlıq təfəkkürü, idarəçilik 
        siyasəti həmçinin insanın bu zamana kimi xəyal edə bilmədiyi təchizatı bizə göstərməklə, vizuallığı bir az 
        da artırıb, izləyicini ekrana kilitləməyi bacardı. <br><br>
        
        Birinci bölüm də olduğu kimi bu bölümdə də, olduqca önəmli mesajların ötürüldüyü qənaətindəyəm ki, bu məni 
        olduqca məmnun edir.
        Din, siyasət, güvənc, güc kimi önəmli mövzuları çox gözəl çatdırmağı yenə bacardılar. Əlbət filmdə izləyib, 
        toxunulması gərəkən çox mövzu var. Mən də mənim üçün maraq kəsb edə bəzi mövzulara toxunub, qeydlərimi götürmüşəm. 
        İlk bölümdən də gördüyünüz kimi Paul heç vaxt seçilmiş şəxs olduğuna inanmamış, bunu təksib etmişdi. Bu 
        bölümdə isə Paulun ona inanan bu toplumu idarə etmək üçün, seçilmiş şəxs olduğunu açıq aşkar dilləndirdiyini
         gördük. Digər tərəfdən isə ilk bölümdə Paulun seçilmiş şəxs olduğuna inanan Leydi Jessicanı ikinci bölümdə 
         din adı altında xalqı oğluna inandırmağa çalışan bir ana xarakteri olaraq seyr etdik.
        Və Leydi Jessica bu iş üçün ən zəiflərdən başlamağın lazım olduğunu xüsusi vurğuladı və bu da günümüzü çox 
        tanış verən bir səhnə olaraq yaddaşımda qaldı. <br><br>
        
        Digər yandan isə bu yersiz inanclar, o inancların gətirdiyi acı və hər şeyi məhv edəcək gücə qarşı dirənən 
        Chanini izlədik. Chani bir səhnədə bağırıraraq “İnancımız bizi kölələşdirir” söylədi. Bəlkə də burada 
        siyasətən inancımızdan istifadə edib, bizi kölələşdirən bir dünyada yaşadığımızı bu film bizə xatırlatmaq 
        istədi. BU cümləni qururam, çünki, oxşar səhnəni kral və qızının söhbətində müşahidə edə bildik. Princess 
        Irulan atasına bənzər ifadələri söylədi: “İnanan bir toplumun əlindən peyğəmbəri alınarsa, bu o toplumu daha 
        da iradəli, inadkar edər. Yox əgər bir dini sıxıb, yox etməyə çalışarsansa, o daha da tez yayılar. Bir az 
        boş burax, istədiklərini ver. İnanclarından istifadə et və onunla bu toplumu idarə et”. <br><br>
        
        Ən böyük dəyişimi isə Paulda gördük. İkinci bölümdə qarşımızda fəqli bir Paul var idi, və bu Paul peyğəmbər 
        olmadığını bilərək, Cənnətin var olmadığından əmin ikən, tərəfdaşlarına Cənnət vədi verirdi. Çünki Fərqinə 
        varmışdı ki, bir toplumu məcburi yox, könüllü olaraq bir işə cəlb etsən daha çox uğur qazanarsan. Toplumun 
        könüllü olaraq ölümə belə gedəcəyi tək mövzu isə hər zaman inanc olmuşdur.  <br><br>
        
        Ən son parçada isə Paulun qazandığı güc və gücün ona etdirdiyi əməlləri gördük. Etmərəm dediyi hər bir şeyi 
        edən Paul ilk öncə özünə, sonra isə Chaniyə xəyanət etdi. 
        Və düşünürəm ki, yuxarıda söylədiyim və digər söylədiklərim qədər önəmli mövzularda özümüzü ömrümüz boyu 
        sorğulamağımız ən düzgün qərarımız olacaqdır… <br><br>
        
        Film haqqında məni rahatsız edən fikirlə gəlincə isə aşağıdakıları söyləyə bilərəm, hansı ki, o səbəblər 
        ümumi gedişatı birinci bölümə nəzərən daha durğun hiss etdirdi.
        Bu səbəblərdən əsası isə birinci bölümdən fərqli olaraq həyəcan verici səhnələrin ancaq son 1 saata 
        yerləşdirilməsi ola bilər. Bu da 3 saatlıq bir filmin ilk iki saatının daha durğun keçməsi ilə nəticələnir.
        Məna verə bildiyim ikinci mövzu isə soxulcanlar oldu. <br><br>
        İlk bölümdə bizim üçün bir vəhşi canavar olaraq təsvir etdikləri soxulcanları çöl adamlarının əhilləşdirilmiş
         heyvanı kimi ikinci bölümdə qarşımıza çıxartdılar və bu böyük, vəhşi canavarın yəhəri isə sadəcə 2 balaca 
         qırmaq oldu və bu qırmaqlar elə təsvir olundu ki, bir soxulcana nəin ki, minməyi həmçinin o soxulcan ilə 
         10-larla çöl adamının bir dəvə kimi istifadə edib, qumluqda uzun yol almalarını təşkil etmək mümkün oldu.
        Bu ayrıntı mənə olduqca çox abartılı və ssenari çarəsizliyi kimi gəldi və bəlkə də ilk saatlarda filmin mənim
         üçün daha durğun keçməsinə zəmin yaratdı.
         <br><br>
        Bənzərliklər: 
        Filmdə hiss etdiyim ən böyük bənzərlik Avatar 1 filmi ilə oldu. Paulun yerli əhali tərəfindən yetişdirilməsi, 
        xalqın bir parçası olmaq üçün özünü onlara sübut etməyə çalışması, həmçinin yerli xalqın çəkindiyi, amma ölmü 
        gözə alıb, əhilləşdirməyə çalışdıqları bir heyvanı Paulun minərək, özünün seçilmiş şəxs olduğu haqqında yerli 
        əhalidə fikir yaratması kimi səhnələri Avatara 1 ə bənzətməməyim mümkün olmazdı. Hansı ki, orada da ən yadda 
        qalan parça Jake'in Turok Maktonu idarə etməsi idi.
        <br><br>
        Mənə görə belə bənzərliklər, birinci bölümə nisbətən daha həyəcansız irəliləmə və s. kimi səbəblər olsa da, 
        sinemada izlənməsi gərəkən ən möhtəşəm filmlər siyahısının top 5-ində qəraralaşar deyə biləcəyimiz bir parça 
        izlədik. Film hər yönü ilə bizi özünə bağlamağı bacardı. Bütün komanda böyük bir təşəkkürə layiqdir və bu gün 
        bizlər bu fikirləri bir birimizi ötürürüksə, demək ki,  layiq olduqlarını biz də onlara hiss etdiririk.
        `
    },
    {
        tema: 'film',
        NewsName: "Hidden Figures",
        NewsDate: "13-03-2024",
        NewsWriter: "Theodore Melfi",
        NewsCover: "image/Hidden figures.png",
        NewsParagraf: `“Hidden Figures”, yəni, “Gizli Kodlar” - çoxdandır izləyəcəklərim siyahısında olan bu film
        2016-ci ildə vizyona girməsinə baxmayaraq nəhayət ki, dünən izləyə bildim. Və dərhal gəlib, fikirlərimi 
        bölüşmək istədim. 
        <br>
        Hardan başlayım bilmirəm. Film o qədər möhtəşəm idi ki, hələ də təsirindən çıxa bilməmişəm.
        Bəlkə də yazdığım bu təəssüratlarım sizə abartılı gələcək. Bu səfərlik həyəcanıma verin. Filmdə 
        məni özünə heyran buraxan çoxlu detallar var idi. İlk öncə filmin mövzusundan kiçik bir giriş etmək istəyirəm.
        Rejissorluğu <a href='https://en.wikipedia.org/wiki/Theodore_Melfi' target="_blank" style = "color: aqua">Theodore Melfi</a> 
        tərəfindən üstənmiş olan bu film 
        <a href='https://en.wikipedia.org/wiki/Margot_Lee_Shetterly'  target="_blank" style = "color: aqua">Margot Lee Shetterly</a>-nin
        eyni adlı kitabına əsasən çəkilmişdir. Filmin ana mövzusu America və SSRİ-nin bir-biri ilə
        yarışaraq  təşkil etdikləri kosmik əməliyyatlarda bizim görmədiyimiz, tanımadığımız arxa plandakı 
        qəhramanların həyatlarını bizlərə çatdırmaq idi və ən təsirli yanı isə gerçək həyat hekayələrinə dayanaraq
        3 ana xarakteri bizə çox möhtəşəm şəkildə çatdırması oldu. Baş rollarını 
        <a href='https://en.wikipedia.org/wiki/Octavia_Spencer'  target="_blank" style = "color: aqua">Octavia Spencer</a>,
        <a href='https://en.wikipedia.org/wiki/Taraji_P._Henson'  target="_blank" style = "color: aqua"> Taraji P. Henson</a>
        və <a href='https://en.wikipedia.org/wiki/Janelle_Mon%C3%A1e'  target="_blank" style = "color: aqua">Janelle Monáe</a> 
        oynadığı Hidden Figures filmi NASA-nın iş prosesini bizə göstərir.  İrqçiliyin daha kəskin 
        olduğu dönəmdə Amerikada NASA kimi bir şirkətdə çalışan 3 Afrika əsilli qadının verdiyi həyat mücadiləsi və 
        zorluqlara rəğmən yüksəlişi filmin əsas mövzusudur. Məni ən çox filmə bağlayan əsas faktor irqçilik idi. 
        Hər zaman irq ayrımının olduğu mövzular gündəmdə olmuş, bu mövzu ilə bağlı xəbərlər oxuyub, izləmişik. 
        Əsasən də Amerikada baş verənlərlər ilə bağlı. Amma bu film o xəbərlərdən də bir addım irəli keçdi. 
        O duyğuları, zorluqları bir-bir hiss etməyimizi təmin etdi. İnsanların qaradərili olması səbəbindən məruz
        qaldıqları min-bir zorbalığı,  təqqirləri əks etdirən film ətrafımızda baş verənləri daha yaxşı alqılamağımıza
        səbəb oldu. Taraji P. Henson - nın həyat verdiyi 
        <a href='https://en.wikipedia.org/wiki/Katherine_Johnson'  target="_blank" style = "color: aqua">Creola Katherine Johnson</a>
        xarakteri bu filmin əsas qəhrəmanı 
        idi desək yanılmarıq. Qaradərili olduğu üçün istər cəmiyyətdə, istərsə də iş mühitində çoxlu zorbalığa 
        məruz qalan Katherine çox güclü riyaziyyat və məntiqə sahib olan biri idi. O qədər güclü bir riyaziyyatçı 
        idi ki, üzərində çalışılan əməliyyatda astronom vəsifəsini üstlənmiş olan 
        <a href='https://en.wikipedia.org/wiki/John_Glenn'  target="_blank" style = "color: aqua">John Glenn</a> xarakteri 1960-larda 
        yeni istifadə olunan komputer nəslinə, IBM, güvənməyərək, “ancaq Katherine riyazi hesablamalardan əmin olarsa, bu 
        uçuşu qəbul edərəm” demişdi. Və həqiqətən də o dövr üçün yeni nəsil olan kompüterin hesablamalarını Katherine 
        təsdiq etdikdən sonra, John Glenn uçuşa razılıq verir və biz bu tarixi hadisəni filmdə olduğu kimi izləyirik. 
        Filmdə Katherine xarakterini öz işi ilə bağlı hər hansı əziyyət çəkməsi deyil, hər zaman rəngindən dolayı 
        yorulduğu açıq şəkildə bizə çatdırılır. Filmdə  Katherine ilə bağlı mənə ən çox təsir edən səhnə isə tualet 
        səhnəsi idi. Ötdüyümüz əsrdə Amerikada irq ayrımı o qədər insanlıq xarici bir durumda yayılırdı ki, 
        qaradərili şəxslərin kənarlaşdırlması üçün avtobusdakı oturacaqlardan tutmuş, kitabxanlara kimi hər bir 
        bölüm “colored” - “rəngli” olaraq ayrılmışdı, həmçinin ortaq tualetlər belə. Tualetə getmək üçün hər gün 
        2 km məsafə qətt etməyə məcbur olan Katherine durumdan bezərək, gerçəkləri hayqırması NASA-da bu ayrımın 
        qaldırılmasının başlanğıcı oldu. <br> 
        Güclü riyaziyyatçı olan  Katherine verdiyi mücadilə ilə yanaşı yoldaşı, Janelle Monáe-nın
        həyat verdiyi  <a href='https://en.wikipedia.org/wiki/Mary_Jackson_(engineer)'  target="_blank" style = "color: aqua">Mary Jackson</a>
        xarakteri olmuşdur ki, bu xarakter riyaziyyatçı olmaqla yanaşı 
        NASA-da işləyən ilk qaradərili qadın mühəndis olmağı da bacarmışdı. Ancaq ağ dərili kişilərin yazıla biliyi kursu 
        əldə edən Mary Jackson karyerində elə bir yüksəlişə çatdı ki, NASA-da 34 il çalışandan sonra belə Amerikanın ən 
        bacarıqlı mühəndislərindən  biri olaraq yadda qaldı. <br>
        Digər yandan isə Octavia Spencer həyat verdiyi riyaziyyatçı  
        <a href='https://en.wikipedia.org/wiki/Dorothy_Vaughan' target="_blank" style = "color: aqua">Dorothy Vaughan</a>
        xarakterini izləmiş olduq. Olduqca əzmkar, bacarıqlı olan Dorothy IBM kompüterlərinin 
        çalışdırlması, həmçini çalışdırılmasında məsul olan komandanın idarəsində əsas vəzifəni üstənmişdi. 
        <br><br>
        Hidden Figures filmi qaradərili və qadın olan bu 3 xarakterin NASA kimi bir şirkətdə etdikləri yüksəlişi 
        bizə göstərməklə yanaşı, amerikalıların qaradərili insanlara bir insan kimi baxmadıqları bir dünyanı da bizə 
        hər bir kiçik detayı ilə, acı dolu hislərlə çatdırmağı bacardı. Filmin insan olmağın, irq, cinsiyyət ayrımı 
        etmədən yüksəliş üçün bir olmağın necə mühim amillər olması ilə bağlı göndərdiyi mesajlar mənim üçün olduqca 
        önəmli idi. Film haqqımda bu yazdıqlarım isə sadəcə aysberqin görünən tərəfidir. Odur ki, bütün aysberqi görməyiniz 
        üçün  bu filmi izləməyi şiddətlə tövsiyyə edirəm. 
        `
    }

];
listOfBaza.reverse()
let listOfBook = [], listOfFilm = [], listOfBaza1 = [];
listOfBaza.forEach((e) => {
    listOfBaza1.unshift(e);
    if (e.tema === 'book') {
        listOfBook.push(e);
    }
    else if (e.tema === 'film') {
        listOfFilm.push(e);
    }
});