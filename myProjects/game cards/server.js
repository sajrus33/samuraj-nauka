const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const mysql = require('mysql');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//poprostu na sam poczatek too app = express ();
// a bylo na koncu 
//kumam
//bynajmniej tak mi sie wydaje ze tot o xdd probuj teraz czy wywali blad not allowedx
//nistety to samojutro  popiszemy mozesz to tez proboic z gita ja sie klade kurowac powodzonka noo , okejokej spoko to moze jutro ogarne to jutra cya

// najlepiej jak byś gadke skombinował, bo tak tracimy cenny czas na pisanie ;p dobra to narazie 

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cards'
});
connection.connect();


app.post('/test', (req, res) => {
    var array = req.body.p1Array;// aa z body z DOM-u ? p1Array sobie szuka w sscopie ?
    console.log(array);
});

// nieee nie z domu, tam wracalem do skryptu zeby nadac nazwe obiektowi ktory leci na server, i do tego sie odnosze do requestu
// no wiem ale body to element document obj model 
// aaaa okej okej req ma taką propertke a skad on ją pryzpisal ajaxem ?
// nie to sie odwoluje do ciała żądania nie obiektu tam html cyz cos
// teraz nie czaje pytanka xd
//aaa req ma default body znacyz 
// no wiesz to klasa itd opcja no wiesz ocobiega xd no i wsumie tyla
// tam tego ajaxa trzeba wywołać i tu patrzeć na serva konsole, jak tamto uruchomić to sie nie połape na obecna chwile w skrypcie xd 
//rozumiem teraz chcemy pobrac te arrayeaa sprawdze
//i powinno wypisaac co siedzi tam w arrayu tamtym
//skad dokąd itd no pisiaj szczegóły
/// aa spoko :P czyli jq :Pa nie da sie bez jq ? nie co 
    // zalaczyc jquery do index.html
    // ajaxa chyba nie ma w pure js
    //przeciez jquery to must have w projekcie xd
    // s 
 //$ is not defined problem 
//
//lata za toba//a
//aa dobra xDDDD
//app.post to wyslij ? 
//kk dobra lecimy bez pytan jutro bede pytac xd
//juz wyslane ? teraz chcemy pobrac
//wywalilo mnie ;p widze widze :P


app.listen(PORT, () => console.log("Server started at port: " + PORT));



// to poprostu przyjmuje żądanie POST ze skryptu 

// te app use nie przyejmuj sie narazie to tylko zeby ogaria




/* connection.query("TUTAJ QUERY DAJEMY", (error, result, fields) => {

    if (error) {
        console.log("Something went wrong")
    } else {

        na przyklad:
        result.map((zmienna_jakas) => {

            zmienna_jakas.jakaswartosc itd to juz wedlug potrzeb

        });
    }
}); */



// ej musze miec ten projekt na dycku c tma gdzie node js ? czy da sie wyjsc z c i wejsc w d ? ..cd C ?
// no to co mam robic w vs terminal ? i co ?
// piszesz poprostu "node server.js"  i powininem wystartować serwer i w konsoli pisać Server started at port: 
// lol no nie dziala nic sie nie dzieje
// w terminalu wpisalem node server.js dalem enter i nic mowisz ze prawym jeszcze mozna na fodler kliknac ?
// aaaaaaaaa wogoóle to node modules musisz miec folder
// znaczy npm install weź wtedy d
// eale gdzie ? chyba jednak nie w terminalu 
// no w terminalu w projekcie wpisz "npm insall" bo to ci dependencies pobierze widze pobiera sie widze pasek postepu 
// leci leci czekam co dalej ?nodemon ? co to robi 
// weź prawym na folder i open git bash możesz
// potem "nodemon server.js" powinno zadzialas tak nodemon to robi ze nie musisz odpalac za kazda zmiana serva na nowo tylko samo ci restartuje live ode
// refresh ? xd no cos w tym stylu ale to server a nie stronke ;p
// działa ? niee te nodemon wgl nic nie robi jakis ten terminal wgl polagowany azwa
// 'nodemon' nie jest rozpoznawana jako polecenie wewnętrzne lub zewnętrzne,
//program wykonywalny lub plik wsadowy.
// hmmm znaczy widze caly terminal co sie pokazuje, nie wykrywa ci to sprobuj samo node server.js
//okej tetaz prawie git 
//musisz stworzyc baze danych na phpmyadmin
//xampa odpalić i stworzyc baze o nazwie tam jak na gorze jest czekaj.. "cards" 
// po pierwsze na dole same errory a po drugie pobieram xampa
// albo przeciez w vs code masz terminal
// wgl jak podepniesz sluchwaki do kompa czy cos to bedziesz mogl gadac bo maja mikro w sobie NIEKTÓRE
//bedzie 100000000000x lepiej no nie mam zadnych mam jedyne bez mic moge lapka przywiezc przy okazji 
//cholerka no :;pppp to przywiex jak dasz rade okej okej smacznego papieroska xD
 // damy rade to sie instaluje ide na papierosa no zaraz bede akurat  chory jestem wiesz zaraz bede sie pakowac ale ogarniemy to ,, cos ten xamp dlugo sie instaluje
// i to globalnie zadziała
// noo jak pc jakiś leciwy czy cos to moze tak być xd :oooooooo ee to powinno 5sec i installed succesfully xdd
// 8 rdzeni :P stary ale jary noo :P internet 100 akademicka siec
// to pisz jak sie zainstaluje



// dobra mam xampa
// to teraz palisz apache i mysql masz?? to 2 klikniecia ;p


// to teraz http://localhost/phpmyadmin/ wchodzisz oo pamietam heheh :p mam 

// tworzysz nowa baze danych tam klikasz nowa i nazwe tylko "cards" latin swedish 1 ? latin1 swedish 
// i narazie nic wiecej

//niee daj utf8 polish ci bynajmniej ja tak daje jakos sie tak przyjelo cnie
//  mam co dalej

 // teraz node server.js bo jest polaczenie tertaz z baza i nie wywali errorów
// skad xamp wie ze to ten ? skoro nic nie łączylem ?

 //hehehe no i gicik

/*  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cards'
}); */

// too robi robote bo masz localhost 
//pass i root to default sa po instalacji wiec root i haslo puste i tewraz operacje na bazie danych mozna przesylanie ze skryptu do serwera za pomoca ajaxa itd  


//jak jak z skryptu , mozna by teraz to poskladac i zagrac przeciwko sobie ? ja bym umial ale jak te info przesylac ja nie paniemaju..

// xddd too cho teraz do skryptu pokaz co chcesz przesyłać ktoóre dane kk aczkolwiek nie wiem jak to kurde heh jak to dziala 


// do gory chodz



// no pokaze ci xd tlyko pokaz ktore jak






// to masz node js na kompie ??
// ze 
// npm

// too bierzesz node server.js jak jestes w folderze cards 

// i zobacz c
// zy cii 


// i piszesz node server.js w folderze

// i w konsoli powinno ci pisac "Server stated at"

// odpalic node ? wejsc cd cd do folderu cards ?
// ta

// to sie kod kompilowac nie bedzie chyba xd 