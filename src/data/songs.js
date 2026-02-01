// src/data/songs.js

export const songs = [
  {
    id: 1,
    name: "Dios Es Rey",
    author: "Christine D'Clario",
    category: "adoracion",
    scale: "Ab",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/a/7/0/0/a7003c0c31a9dc46359dcb4f6741c927-tb7.jpg",

    lyrics: `
Oigo ángeles cantando
Santo, santo, santo es el Señor
Veo santos redimidos
Trayendo ante el trono adoración

Y hoy los redimidos
Anhelan con el corazón
Estar en el lugar
Donde cielo y tierra uno son

Como el rugir de muchas aguas
Cantamos gloria, honra y poder
A una voz que hoy resuena
Toda lengua proclamará
Dios es Rey
    `,

    lyrics_chords: [
      // VERSO 1
      { chords: ["Db"], text: "Oigo ángeles cantando" },
      { chords: ["Bbm", "Fm", "Ab"], text: "Santo, santo, santo es el Señor" },
      { chords: ["Db"], text: "Veo santos redimidos" },
      {
        chords: ["Bbm", "Fm", "Ab"],
        text: "Trayendo ante el trono adoración",
      },

      // VERSO 2
      { chords: ["Db"], text: "Y hoy los redimidos" },
      {
        chords: ["Bbm", "Fm", "Ab", "Ab/C"],
        text: "Anhelan con el corazón",
      },
      { chords: ["Db"], text: "Estar en el lugar" },
      {
        chords: ["Bbm", "Fm", "Eb"],
        text: "Donde cielo y tierra uno son",
      },

      // CORO
      {
        chords: ["Ab/C", "Db", "Ab"],
        text: "Como el rugir de muchas aguas",
      },
      {
        chords: ["Db", "Fm", "Eb"],
        text: "Cantamos gloria, honra y poder",
      },
      {
        chords: ["Ab/C", "Db", "Ab"],
        text: "A una voz que hoy resuena",
      },
      {
        chords: ["Ab/C", "Db", "Fm", "Eb"],
        text: "Toda lengua proclamará",
      },

      // FINAL
      { chords: ["Db", "Fm", "Eb"], text: "Dios es Rey" },
    ],
  },
  {
    id: 2,
    name: "Ven Espíritu Santo",
    author: "Barak",
    category: "adoracion",
    scale: "Em",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/d/8/f/1/d8f15e35fa91e2e3e9ac95a9b1e23e08-tb7.jpg",

    lyrics: `
Estoy aquí, desesperado por ti
Con un corazón sediento
Que espera beber de ti

Cuando tu gloria desciende a un lugar
Toda la tierra tiene que adorar
Resucitan los muertos
Se sanan enfermos por tu poder

Queremos de ti, llénanos de ti
Espíritu Santo envuélvenos en ti
Derrama tu gloria, esperamos por ti

Ven, ven, ven Espíritu Santo
Ven, ven, ven Espíritu Santo
Ven, ven, ven llena este lugar
  `,

    lyrics_chords: [
      // INTRO
      { chords: ["Em", "D", "C", "B"], text: "Intro (8 tiempos cada nota)" },

      // VERSO 1
      { chords: ["Em", "D"], text: "Estoy aquí, desesperado por ti" },
      {
        chords: ["C", "B"],
        text: "Con un corazón sediento, que espera beber de ti",
      },

      // VERSO 2
      { chords: ["C"], text: "Cuando tu gloria desciende a un lugar" },
      { chords: ["D"], text: "Toda la tierra tiene que adorar" },
      {
        chords: ["Am7"],
        text: "Resucitan los muertos, se sanan enfermos",
      },
      { chords: ["Bsus4", "B"], text: "Por tu poder" },

      // PRE CORO
      { chords: ["C"], text: "Queremos de ti, llénanos de ti" },
      {
        chords: ["D"],
        text: "Espíritu Santo envuélvenos en ti",
      },
      {
        chords: ["Am7", "Bsus4", "B"],
        text: "Derrama tu gloria, esperamos por ti",
      },

      // CORO
      { chords: ["Em"], text: "Ven, ven, ven Espíritu Santo" },
      { chords: ["D"], text: "Ven, ven, ven Espíritu Santo" },
      {
        chords: ["C", "Bsus4", "B"],
        text: "Ven, ven, ven llena este lugar",
      },
    ],
  },

  {
    id: 3,
    name: "Exaltado Estás",
    author: "Miel San Marcos",
    category: "adoracion",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/4/7/c/0/47c0e4dfd02b9fd30fda68cd50d6fc7d-tb7.jpg",
    lyrics: `Del cielo, bajaste
Por mí, te entregaste
El precio, Tú pagaste
Tomaste mi lugar

Mi dolor, quitaste
Mi enfermedad, sanaste
Mis culpas, Tú borraste
Al morir en esa cruz

Inmolado fuiste, cordero de Dios
Te levantaste con gloria y poder
Rey vencedor, alfa y omega
El gran yo soy, pronto volverás

Exaltado estás
Coronado estás
Digno de toda la gloria
Digno de toda la honra

Exaltado estás
Coronado estás
Digno de toda la gloria
Digno de toda la honra
Cristo Jesús

Inmolado fuiste, cordero de Dios
Te levantaste con gloria y poder
Rey vencedor, alfa y omega
El gran yo soy, pronto volverás
Pronto volverás

Exaltado estás
Coronado estás
Digno de toda la gloria
Digno de toda la honra

Exaltado estás
Coronado estás
Digno de toda la gloria
Digno de toda la honra

Exaltado estás
Coronado estás
Digno de toda la gloria
Digno de toda la honra

Exaltado estás
Coronado estás
Digno de toda la gloria
Digno de toda la honra
Cristo Jesús, te exaltamos

Pronto volverás
Pronto volverás
Pronto volverás
Cristo Jesús

Pronto volverás
Pronto volverás
Pronto volverás
Cristo Jesús

Exaltado estás
Coronado estás
Digno de toda la gloria
Digno de toda la honra

Exaltado estás
Coronado estás
Digno de toda la gloria
Digno de toda la honra

Exaltado estás
Coronado estás
Digno de toda la gloria
Digno de toda la honra

Exaltado estás
Coronado estás
Digno de toda la gloria
Digno de toda la honra
Cristo Jesús`,
  },
  {
    id: 4,
    name: "Como Dijiste",
    author: "Christine D'Clario",
    category: "adoracion",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/a/7/0/0/a7003c0c31a9dc46359dcb4f6741c927-tb7.jpg",
    lyrics: `Mueve el estanque en mi ser
Úneme a tu río, dame vida
No sé que palabras decir
Que provoquen que me quieras
Más de lo que me amas

Ven señor, como dijiste
Derrama tu gloria, derrama tu gloria

Ven señor, como dijiste
Derrama tu gloria, derrama tu gloria

Vence en mis tinieblas con tu luz
Sé mi fuerza hoy, oh Jesús
Encuentra mi escondite, alcánzame si huyo
Oh señor
Inúndame con tu amor

Ven señor, como dijiste
Derrama tu gloria, derrama tu gloria

Ven señor, como dijiste
Derrama tu gloria, derrama tu gloria

Ven señor, como dijiste
Derrama tu gloria, derrama tu gloria

Ven señor, como dijiste
Derrama tu gloria, derrama tu gloria

Me amas como padre, como un hermano
Como un león feroz, como nadie
Con fuerza me buscas, para abrazarme
Me envuelves en tu amor

¡Oh!

Ven señor, ven como dijiste
Derrama tu gloria, derrama tu gloria

Ven señor, ven como dijiste
Derrama tu gloria, derrama tu gloria

Ven señor, como dijiste
Derrama tu gloria, derrama tu gloria

Ven señor, como dijiste
Derrama tu gloria, derrama tu gloria

Me amas como padre, como un hermano
Como un león feroz, como nadie
Con fuerza me buscas, para abrazarme
Me envuelves en tu amor

Envuélveme, oh ven`,
  },
  {
    id: 5,
    name: "Te Bendeciré",
    author: "Ingrid Rosario",
    category: "adoracion",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/6/c/7/0/6c7085e7a2a114e379d0f5f5247a64d3-tb7.jpg",
    lyrics: `Restaurador de mi alma
Sanas el dolor
Redentor de mi ayer
Oh te bendeciré
Creador de los cielos
La tierra y el mar
El mundo se alegra
Te glorificaré
Te glorificaré

Te bendeciré, te bendeciré
Por siempre, por siempre

Mender of the broken
He is the healer of the soul
Redeemer of all yesterdays
Oh I will bless you Lord
He is the maker of the heaven
The oceans and the skies
All the earth rejoices
It’s you we glorify
We live to glorify

I will bless the Lord
I will bless the Lord
At all time, at all time

Te bendeciré, te bendeciré
Por siempre, por siempre

Por siempre, oh, Señor, te bendeciré
Con mi corazón, yo te cantaré`,
  },
  {
    id: 6,
    name: "Al Que Esta Sentado En El Trono",
    author: "Marcos Brunet",
    category: "adoracion",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/e/d/0/2/ed02a014edf522d02838aba24d519ba7-tb7.jpg",
    lyrics: `Quiero conocerte
Cada día más a Ti
Entrar en Tu presencia y adorar

Revélanos Tu gloria
Deseamos ir mucho más en Ti
Queremos Tu presencia
Jesús

Al que está sentado en el trono (en el trono)
Al que vive para siempre y siempre
Sea la gloria
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder

Al que está sentado en el trono (en el trono)
Al que vive para siempre y siempre
Sea la gloria
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder

No acercamos confiadamente
A darte placer, Señor
Este es momento oportuno
Conocer más

Quiero conocerte
Cada día más a Ti
Estar en Tu presencia y adorar

Decimos: Revélanos Tu gloria esta noche

Revélanos Tu gloria
Deseamos ir mucho más en Ti (queremos Tu presencia, Jesús)
Queremos Tu presencia
Jesús (Jesús)

Al que está sentado en el trono
Al que vive para siempre y siempre
Sea la gloria
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder

Al que está sentado en el trono (en el trono)
Al que vive para siempre y siempre
Sea la gloria
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder

Sea la gloria (sea la gloria)
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder

Sea la gloria (gloria)
Sea la honra y el poder
Sea la gloria (gloria)
Sea la honra y el poder

Todo es para Ti
santo
Tú eres santo
Santo, santo
Tú eres santo, santo
Santo, santo
Santo eres Tú

Al que está sentado

Al que está sentado en el trono (en el trono)
Al que vive para siempre y siempre
Sea la gloria
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder

Al que está

Al que está sentado en el trono (en el trono)
Al que vive para siempre y siempre
Sea la gloria
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder

Sea la gloria
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder

Sea la gloria
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder

Sea la gloria (la gloria)
Sea la honra y el poder
Sea la gloria
Yeah, yeah, yeah

Sea la gloria
Sea la honra y el poder
Sea la gloria (gloria, gloria, gloria, gloria)
Sea la honra y el poder

Sea la gloria
Ven, ven, ven, ven
Sea toda

Sea la gloria
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder
Yeah, yeah, yeah

Jesús
Sea la gloria
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder (al que está sentado, decimos)

Al que está sentado en el trono (en el trono)
Al que vive para siempre y siempre
Sea la gloria
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder

Al que está sentado en el trono (en el trono)
Al que vive para siempre y siempre
Sea la gloria
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder

Al que está sentado

Al que está sentado en el trono (a Ti, Jesús)
Al que vive para siempre y siempre
Sea la gloria
Sea la honra y el poder
Sea la gloria
Sea la honra y el poder`,
  },
  {
    id: 7,
    name: "Eres Rey de Los Cielos",
    author: "Marco Barrientos",
    category: "adoracion",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/b/b/e/5/bbe56a66395c0204b50891292607122a-tb7.jpg",
    lyrics: `Glorioso Salvador
Divino Redentor
Me postraré ante Ti

Bendito Hijo de Dios
Hermoso Rey de Sión
Te adoraré y así declararé

Eres Rey de los cielos, eterno Dios
Exaltado por siempre, Jesús Señor
Tú gobiernas en toda la creación
Oh Cordero inmolado eres Señor

Glorioso Salvador
Divino Redentor
Me postraré ante Ti

Bendito Hijo de Dios
Hermoso Rey de Sión
Te adoraré y así declararé

Eres Rey de los cielos, eterno Dios
Exaltado por siempre, Jesús Señor
Tú gobiernas en toda la creación
Oh cordero inmolado, eres Señor

Las naciones enteras se postrarán
Y tu nombre por siempre bendecirán
Por los siglos tu gloria nos llenará
Y veremos tu fuerza y majestad

Eres Rey de los cielos, eterno Dios
Exaltado por siempre, Jesús Señor
Tú gobiernas en toda la creación
Oh Cordero inmolado eres Señor

Las naciones enteras se postrarán
Y tu nombre por siempre bendecirán
Por los siglos tu gloria nos llenará
Y veremos tu fuerza y majestad

Eres Rey de los cielos, eterno Dios
Exaltado por siempre, Jesús Señor
Tú gobiernas en toda la creación
Oh Cordero inmolado eres Señor

Las naciones enteras se postrarán
Y tu nombre por siempre bendecirán
Por los siglos tu gloria nos llenará
Y veremos tu fuerza y majestad

Sí, te exaltamos Cordero de Dios
Te exaltamos Cordero de Dios
Por siempre
Por siempre`,
  },
  {
    id: 8,
    name: "Creo En Ti",
    author: "Julio Melgar",
    category: "adoracion",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/9/8/5/5/98558f311750b69c9c9e7ec3db94c84a-tb7.jpg",
    lyrics: `Quiero levantar a ti mis manos
Maravilloso Jesús
Milagroso Señor

Llena este lugar de tu presencia
Y haz descender tu poder
A quienes estamos aquí

Creo en ti, Jesús
Y en lo que harás en mí
Creo en ti, Jesús
Y en lo que harás en mí

En mí
En mí

Recibe toda la gloria
Recibe toda la honra
Precioso, oh, hijo de Dios

Recibe toda la gloria
Recibe toda la honra
Precioso, oh, hijo de Dios`,
  },
  {
    id: 9,
    name: "El Gran Yo Soy",
    author: "Julissa",
    category: "adoracion",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/5/5/7/4/55740061c8447daf964a06c33b4f6707-tb7.jpg",
    lyrics: `Quiero vivir cerca de ti
Que sea real el cielo en mi
Quiero escuchar los ángeles
Cantar a una voz

Aleluya, Santo, Santo
Dios poderoso, el gran Yo Soy
Tú eres digno, no hay otro
Poderoso, el gran yo soy

Quiero estar cerca de tu corazón
Amar tu palabra, escuchar Tu voz
Y ver huesos secos con vida otra vez
Cantar a una voz

Aleluya, Santo, Santo
Dios poderoso, el gran Yo Soy
Tú eres digno, no hay otro
Poderoso, el gran Yo Soy

Es el gran Yo Soy
El gran Yo Soy
Es el gran Yo Soy

La tierra tiembla ante el
Los demonios huyen
Al mencionar el nombre del Rey de reyes
Ninguna potestad, nada resistirá
La presencia y el poder del gran yo soy

El gran yo soy

Aleluya, Santo, Santo
Dios poderoso, el gran Yo Soy
Tú eres digno, no hay otro
Poderoso, el gran Yo Soy

El gran yo soy`,
  },
  {
    id: 10,
    name: "Poderoso Dios",
    author: "Marcos Witt",
    category: "adoracion",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/e/f/d/1/efd166f3e0fb616fe0c26edde9b408dd-tb7.jpg",
    lyrics: `Al que está sentado
En el trono
Y al Cordero
Sea el honor

Sea la gloria
Sea la honra
Sea el dominio
Por los siglos de los siglos

Poderoso Dios
Poderoso Dios
Poderoso Dios
Mi alma clama por Ti

Al que está sentado
En el trono
Y al Cordero
Sea el honor

Sea la gloria
Sea la honra
Sea el dominio
Por los siglos de los siglos

Poderoso Dios
Poderoso Dios
Poderoso Dios
Mi alma clama por Ti

Poderoso Dios
Poderoso Dios
Poderoso Dios
Mi alma clama por Ti

Mi alma clama por Ti
Mi alma clama por Ti
Mi alma clama por Ti
Mi alma clama por Ti

Poderoso Dios
Poderoso Dios
Poderoso Dios
Mi alma clama por Ti

Poderoso Dios
Poderoso Dios
Poderoso Dios
Mi alma clama por Ti

Poderoso Dios`,
  },
  {
    id: 11,
    name: "Leon de La Tribu de Judá",
    author: "Inspiración",
    category: "alabanza",
    image:
      "https://s.mxmcdn.net/images-storage/albums/2/4/0/3/6/2/29263042_350_350.jpg",
    lyrics: `//León de la tribu de Judá
León de la tribu de Judá
a venido para vencer
a venido para ser rey //

// Porque El es Rey de reyes.
El es Señor de señores,
y Dios de los dioses.//

//En el cielo el es exaltado
y en la tierra también //

// Aleluya, aleluya
Amén aleluya.//`,
  },
  {
    id: 12,
    name: "Los Enemigos Del Señor Están Cayendo",
    author: "Inspiración",
    category: "alabanza",
    image:
      "https://s.mxmcdn.net/images-storage/albums/2/4/0/3/6/2/29263042_350_350.jpg",
    lyrics: `Los enemigos del Señor están cayendo
Los adversarios del Señor perecerán
Los enemigos del Señor están cayendo

Los adversarios del Señor perecerán
Porque grande y fuerte es nuestro Dios
Poderoso es Él
Victorioso es el Señor
Sobre todo mal

Los enemigos del Señor están cayendo
Los adversarios del Señor perecerán
Los enemigos del Señor están cayendo
Los adversarios del Señor perecerán

Porque grande y fuerte es nuestro Dios
Poderoso es Él
Victorioso es el Señor
Sobre todo mal

Los enemigos del Señor están cayendo
Los adversarios del Señor perecerán
Los enemigos del Señor están cayendo
Los adversarios del Señor perecerán

Porque grande y fuerte es nuestro Dios
Poderoso es Él
Victorioso es el Señor
Sobre todo mal

Los enemigos del Señor están cayendo
Los adversarios del Señor perecerán
Los enemigos del Señor están cayendo
Los adversarios del Señor perecerán
Los enemigos del Señor están cayendo
Los adversarios del Señor perecerán
Los enemigos del Señor están cayendo
Los adversarios del Señor perecerán

Porque grande y fuerte es nuestro Dios
Poderoso es Él
Victorioso es el Señor
Sobre todo mal

Los enemigos del Señor están cayendo
Así es, los enemigos del Señor están cayendo
¿Cuántos confiesan: Los enemigos del Señor están cayendo?
Aleluya, vamos a confesarlo con toda autoridad

Los enemigos del Señor están cayendo
Los adversarios del Señor perecerán
Los enemigos del Señor están cayendo
Los adversarios del Señor perecerán

Porque grande y fuerte es nuestro Dios
Poderoso es Él
Victorioso es el Señor
Sobre todo mal

Los enemigos del Señor están cayendo
Los adversarios del Señor perecerán
Los enemigos del Señor están cayendo
Los adversarios del Señor perecerán

Porque grande y fuerte es nuestro Dios
Poderoso es Él
Victorioso es el Señor
Sobre todo mal

¡Los enemigos del Señor están cayendo!
Aleluya, los enemigos del Señor están destruidos, hermano
Porque Él es el león poderoso, el León de Judá
Y el Señor, hermano, ha tomado victoria sobre`,
  },
  {
    id: 13,
    name: "Remolineando",
    author: "Fernel Monroy",
    category: "alabanza",
    image:
      "https://yt3.ggpht.com/ytc/AIdro_nsAbYPTZEic-xrjNqhf7FI5M-DG4dSNGriyqklHYcxQw=s48-c-k-c0x00ffffff-no-rj",
    lyrics: `Hay muchas formas de alabar tu Nombre
Y de exaltarte, oh Jehová
Hay muchas formas de magnificarte
Pero ahora lo haré así

Remolineando, remolineando celebraré a Jehová
Remolineando, remolineando
Me haré más vil por causa de Jehová
Lara, lara, lara

Sacó mi vida del anonimato
Me dio corona y vestido real
Así es Jehová que exalta al pequeño
Por causa de Él, yo me haré mas vil

Remolineando, remolineando celebraré a Jehová
Remolineando, remolineando
Me haré más vil por causa de Jehová
Lara, lara, lara`,
  },
  {
    id: 14,
    name: "Mi Dios es bueno",
    author: "New Wine",
    category: "alabanza",
    image:
      "https://yt3.googleusercontent.com/WDsw839ExO-SuQmW7ktJMVHiGZ8KH0qBkBDnJUKy7H2Mxe6dmccNA41L8tfaMJ4KmS5SGtgH=s72-c-k-c0x00ffffff-no-rj",
    lyrics: `//Bueno es... (Bueno es)
Bueno es... (Bueno es)//

//Mi Dios es bueno
y su misericordia es para siempre
Mi Dios es bueno
y su misericordia es para siempre//

//Él es bueno... Él es bueno...
Él es bueno... Él es bueno...//`,
  },
  {
    id: 15,
    name: "Grande y Fuerte",
    author: "Miel San Marcos",
    category: "alabanza",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/4/7/c/0/47c0e4dfd02b9fd30fda68cd50d6fc7d-tb7.jpg",
    lyrics: `Grande y fuerte es nuestro Dios
Grande y fuerte es nuestro Dios
Grande y fuerte es nuestro Dios
Grande y fuerte es nuestro Dios

Vestido en majestad
Coronado con poder
Digno de toda la adoración

Vestido en majestad
Coronado con poder
Toda gloria y honra sean para Ti

Grande y fuerte es nuestro Dios
Grande y fuerte es nuestro Dios
Grande y fuerte es nuestro Dios
Grande y fuerte es nuestro Dios

Vestido en majestad
Coronado con poder
Digno de toda la adoración

Vestido en majestad
Coronado con poder
Toda gloria y honra sean para Ti

Grande, fuerte
Es nuestro Dios
Grande, fuerte
Es nuestro Dios

Grande y fuerte es nuestro Dios
Grande y fuerte es nuestro Dios
Grande y fuerte es nuestro Dios
Grande y fuerte es nuestro Dios

Vestido en majestad
Coronado con poder
Digno de toda la adoración

Vestido en majestad
Coronado con poder
Toda gloria y honra sean para Ti

Grande, fuerte
Es nuestro Dios
Grande, fuerte
Es nuestro Dios

Grande y fuerte es nuestro Dios
Grande y fuerte es nuestro Dios
Grande y fuerte es nuestro Dios
Grande y fuerte es nuestro Dios`,
  },
  {
    id: 16,
    name: "Hosanna",
    author: "Marco Barrientos",
    category: "alabanza",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/b/b/e/5/bbe56a66395c0204b50891292607122a-tb7.jpg",
    lyrics: `Levantamos un clamor
Por sanidad y redención
Muéstranos lo que tú ves
Los secretos de tu corazón

Un pueblo unido pide hoy
Tu libertad y salvación
Ármanos con tu valor
Lo que deseamos es revolución

Que el cielo se parta en dos
Inúndanos
En el desierto broten ríos
Vida sopla hoy

Hosanna al rey de salvación
Hosanna al Dios Altísimo
Hosanna
Jesucristo, Jesucristo es rey

Hosanna al rey de salvación
Hosanna al Dios Altísimo
Hosanna
Jesucristo, Jesucristo es rey

Levantamos un clamor
Por sanidad y redención
Muéstranos lo que tú ves
Los secretos de tu corazón

Un pueblo unido pide hoy
Tu libertad y salvación
Ármanos con tu valor
Lo que deseamos es revolución

Que el cielo se parta en dos
Inúndanos
En el desierto broten ríos
Vida sopla hoy

Hosanna al rey de salvación
Hosanna al Dios Altísimo
Hosanna
Jesucristo, Jesucristo es rey

Hosanna al rey de salvación
Hosanna al Dios Altísimo
Hosanna
Jesucristo, Jesucristo es rey

Hosanna
Hosanna
Hosanna al rey

Hosanna
Hosanna
Hosanna al rey

Hosanna
Hosanna
Hosanna al rey

Hosanna
Hosanna
Hosanna al rey

Hosanna al rey de salvación
Hosanna al Dios Altísimo
Hosanna
Jesucristo, Jesucristo es rey

Hosanna al rey de salvación
Hosanna al Dios Altísimo
Hosanna
Jesucristo, Jesucristo es rey`,
  },
  {
    id: 17,
    name: "Ahora es la hora",
    author: "Danny Berrios",
    category: "alabanza",
    image:
      "https://i.ytimg.com/vi/36moTfuc-sk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQNc1abZINsfTQYkB1Cb84bZE6NQ",
    lyrics: `Ahora es la hora de vencer
Ahora es la hora del enemigo perder
Declara victoria en tu vida
Y reprender el mal ahora en el nombre del Señor
Libertad es tuya ahora, ahora es la hora de tu victoria
Vale la pena esperar y confiar y veremos hoy su gloria
Llenar este lugar, el está aquí ahora,
ahora es la hora de tu victoria
Es ahora que el va a abrir el mar y las murallas derrumbar
Toda cadena va a quebrar y los demonios a expulsar,
Va a abrir puertas nadie puede cerrar
Es ahora que el cielo se va a abrir y su gloria va a caer
Alza tus manos con mucha fe en adoración ahora
Ahora es la hora de tu victoria
Ahora ven, alabando, adorando, exaltando al Señor
Va sanando, salvando, toda barrera va quitando
Ahora es la hora
Ahora ven, alabando, adorando, exaltando al Señor
Va sanando, salvando, toda barrera va quitando
Ahora es la hora
Recibe victoria
Es ahora que él va a abrir el mar y las murallas derrumbar
Toda cadena va a quebrar y los demonios a expulsar,
Va a abrir puertas nadie puede cerrar
Es ahora que el cielo se va a abrir y su gloria va a caer
Alza tus manos con mucha fe en adoración ahora
Ahora es la hora de tu victoria
Ahora ven, alabando, adorando, exaltando al Señor
Va sanando, salvando, toda barrera va quitando
Ahora es la hora
Ahora ven, alabando, adorando, exaltando al Señor
Va sanando, salvando, toda barrera va quitando
Ahora es la hora
Recibe victoria`,
  },
  {
    id: 18,
    name: "Hay Libertad",
    author: "Art Aguilera",
    category: "alabanza",
    image:
      "https://audiofenix.com/wp-content/uploads/2022/07/haylibertad-art-main-prod.jpg",
    lyrics: `Hoy puedo danzar con libertad
Porque soy su hijo
Porque soy su hijo
Hoy puedo danzar con libertad
Porque soy amado
Porque soy amado
Podemos sentir tu gozo
Podemos sentir tu río
Hay sanidad en las aguas
Queremos danzar
Podemos sentir tu gozo
Podemos sentir tu río
Hay sanidad en las aguas
Queremos danzar
Hay libertad en la casa de Dios
Hay libertad en la casa de Dios
Hay libertad
Hay libertad
Hay libertad en la casa de Dios
Hay libertad en la casa de Dios
Hay libertad
Hay libertad
Podemos sentir tu gozo
Podemos sentir tu río
Hay sanidad en las aguas
Queremos danzar
Podemos sentir tu gozo
Podemos sentir tu río
Hay sanidad en las aguas
Queremos danzar
Hay libertad en la casa de Dios
Hay libertad en la casa de Dios
Hay libertad
Hay libertad
Hay libertad en la casa de Dios
Hay libertad en la casa de Dios
Hay libertad
Hay libertad
Hay libertad en la casa
Hay libertad al danzar
Hay libertad en la casa
Hay libertad al danzar
Hay libertad en la casa de Dios
Hay libertad en la casa de Dios
Hay libertad
Hay libertad
Hay libertad en la casa de Dios
Hay libertad en la casa de Dios
Hay libertad
Hay libertad
Puedo danzar en la casa de Dios
Puedo danzar en la casa de Dios
Puedo danzar
Y disfrutar
Que somos libres
Somos libres
Por tu sangre
Libre soy
Que somos libres
Somos libres
Por tu sangre
Libre soy
Libre soy`,
  },
  {
    id: 19,
    name: "Señor Eres Fiel",
    author: "Coalo Zamorano",
    category: "alabanza",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/3/4/d/8/34d8edde6233b068af94e0263f84d10a-tb7.jpg",
    lyrics: `Señor eres fiel y tu misericordia eterna
Señor eres fiel y tu misericordia eterna
Gente de toda lengua y nación
De generación a generación

Te adoramos hoy
Aleluya, aleluya
Te adoramos hoy
Eres señor

Te adoramos hoy
Aleluya, aleluya
Te adoramos hoy
Eres señor
Eres fiel!

Señor eres fiel y tu misericordia eterna
Señor eres fiel y tu misericordia eterna
Gente de toda lengua y nación
De generación a generación

Te adoramos hoy
Aleluya, aleluya
Te adoramos hoy
Eres señor

Te adoramos hoy
Aleluya, aleluya
Te adoramos hoy
Eres señor
Eres fiel!

Si señor, si señor, si señor

Si señor

Eres fiel, siempre fiel
Siempre fiel, eres fiel
Eres fiel, siempre fiel
Siempre fiel, eres fiel

Eres fiel, siempre fiel
Siempre fiel, eres fiel
Eres fiel, siempre fiel
Siempre fiel, eres fiel

Señor eres fiel y tu misericordia eterna
Señor eres fiel y tu misericordia eterna
Señor eres fiel y tu misericordia eterna
Señor eres fiel y tu misericordia eterna
Gente de toda lengua y nación
De generación a generación

Te adoramos hoy
Aleluya, aleluya
Te adoramos hoy
Eres señor

Te adoramos hoy
Aleluya, aleluya
Te adoramos hoy
Eres señor
Eres señor
Eres señor
Eres fiel!`,
  },
  {
    id: 20,
    name: "Jehova Es Mi Guerrero",
    author: "Juan Carlos Alvarado",
    category: "alabanza",
    image:
      "https://akamai.sscdn.co/uploadfile/letras/fotos/5/7/5/3/575355f7dde3e847e578d6f6d30623b6-tb7.jpg",
    lyrics: `Jehova es mi guerrero;oh,oh,oh

Con mi alabanza pelearé
Pues no es mi guerra si no la de Dios
Danza y pandero yo daré
Pues no es mi guerra si no la de Dios
Cimbalo y trompeta sonaré
Pues no es mi guerra si no la de Dios
Con fuerte y alta voz yo gritaré`,
  },
];
