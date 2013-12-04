---
layout: post
title: Warum Python?
permalink: /python/warum-python
categories: python
---
Warum möchte Ich überhaupt Python lernen? Eine Frage, die ich mir auch gestellt habe. In diesem Post möchte ich euch Vorteile und Nachteile von Python zeigen. Weiterführende Informationen findet ihr auf der offiziellen [Webseite von Python](www.python.org).

Python ist eine Multiparadigmen Sprache. Das bedeutet, das man in Python funktional, objektorientiert oder strukturiert programmieren kann. In meiner Liste von zu lernenden Sprachen sind alle Sprache dafür geeignet, funktional zu programmieren. Genau darauf möchte ich mich auch konzentrieren, die Objektorientierung allerdings nicht aus den Augen verlieren.

Es gibt ganz einfach Probleme in der Informatik, die mit objektorienten Programme besser zu verstehen sind. Grafische Interfaces sei stellvertretend hier als Beispiel genannt. Nichtsdestotrotz ist der große Hype der Objektorientierung, der mit Java erst richtig angefangen hat, langsam aber sicher vorbei. Man ist an die Grenzen des möglichen gestoßen, als Programme immer komplexer wurden. Designpatterns halfen zwar anfangs, doch ist das ein Tropfen auf dem heissen Stein. Plötzlich wurde die funktionale Programmierung als ein Mittel gesehen, einfacheren Code zu schreiben und komplexe Systeme besser zu erstellen. Rekursion statt Schleifen, unveränderbare Listen statt komplexer Objekt usw. sind einige Mittel die helfen sollen.

Wie passt nun Python in das ganze Bild? Wie ich eingangs schon erläuterte, ist es möglich in Python funktional zu programmieren. Funktionen können ohne eine Klasse existieren. Nicht wie in Java, wo alles in einer Klasse gekapselt sein muss. Es ist auch möglich, Funktionen an Funktionen als Parameter zu übergeben. Das nennt sich dann "Higher Order Functions".

###Vorteile von Python
- Multiparadigmen
- Dynamisch (es müssen keine Datentypen angeben werden)
- Viele Bibliotheken vorhanden
- Einfach zu lernen
- Gute Strukturierung des Quelltextes wird von der Sprache gefordert
- Sehr gute Qualität bezüglich der Laufzeitumgebung von Python
- OpenSource
- bei so gut wie allen Linux/Unix vorinstalliert

###Nachteile von Python
- Dynamisch -> Eine Laufzeitumgebung führt das Programm aus, was es langsamer macht
- Der Sprung von Version 2.7 auf 3.x war schwer, und bis heute gibt es Bibliotheken, die noch nicht unter Python 3.x funktionieren

###Ein Hallo Welt in Python
Genug gequatscht, ich zeige euch, wie Python aussieht

<script src="https://gist.github.com/6LTM/7706391.js"></script>

Hat man das in einer Datei mit der Endung .py gespeichert, reicht ein Aufruf von Python und das folgende erscheint:
"""sh
$ python hello.py
Hello World
"""

Ziemlich langweilig...Machen wir es einfach ein bisschen größer...

<script src="https://gist.github.com/6LTM/7706485.js"></script>

Derselbe Aufruf wie oben reicht aus, das Ergebnis ist auch dasselbe.

###Bibliotheken, die ich mir anschauen werde
Es gibt viele Bibliotheken für Python. Folgende Bibliotheken oder Frameworks (wie auch immer) möchte ich mir im Laufe der Lernphase von Python genauer anschauen.

- Django
- Flask
- Pymongo
- Numpy
- tornado

Ich halte euch auf dem Laufenden über den Fortschritt
