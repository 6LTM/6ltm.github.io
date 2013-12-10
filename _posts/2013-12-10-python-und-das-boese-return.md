---
layout: post
title: Python und das böse return
categories: python
---

Nun sind schon einige Tage vergangen, seit Ich angefangen habe, Python zu lernen.
Ich möchte euch auch ehrlich gesagt nicht mit der Erklärung von irgendwelchen Datentypen
langweilen, oder noch schlimmer, wie man Funktionen deklariert. Stattdessen zeige Ich
ein Problem, an dem Ich nun ziemlich zu knabbern hatte.

###Der Sieb des Eratostheness
Ich versuchte den Alghorithmus des "Sieb des Eratostheness" in Python zu implementieren.
Dieser Alghorithmus lässt auf schnelle Weise die Primzahlen bis zu einer gegebenen Obergrenze finden.

Am besten lässt sich das anhand eines Bildes erklären. [Wikipedia liefert auch eine sehr detaillierte Erklärung](http://de.wikipedia.org/wiki/Sieb_des_Eratosthenes).


![Sieb des Eratostheness](http://upload.wikimedia.org/wikipedia/commons/6/63/Animation_Sieb_des_Eratosthenes.gif)

###Der Sieb in funktionalem Python

Das Netz ist voll mit Erklärungen, wie man bspw. diesen Algorithmus mit Java implementieren kann.
Da ich kein Freund von stetigen Neudeklarationen von Variablen bin, sondern eher der funktionalen Programmierung
zugewandt bin, versuchte ich eben diesen Alghorithmus funktional zu schreiben.

Die Kernaussage der funktionalen Programmierung ist, das eine Variable, der ein Wert zugewiesen ist, nicht mehr
geändert werden kann. Weiterhin ist die Rekursion ein wichtiges Mittel, um bspw. eine Schleife zu implementieren.

Apropos Rekursion. Wenn du Rekursion nicht verstehst, ließ diesen Satz. :-)

hier erstmal der von mir geschriebene Code in voller Gänze, dann erkläre ich in einzelnen Blöcken, was vor sich geht.
<script src="https://gist.github.com/6LTM/7896302.js"></script>

Das wichtigste zuerst. Die eigentliche Hauptfunktion.
<script src="https://gist.github.com/6LTM/7896556.js"></script>

Die Funktion wird mit einer fortlaufenden Liste von Zahlen und einem Initialwert für die gefundenen Primzahlen gefüttert.
der Aufruf sieht dann folgendermaßen aus:

<script src="https://gist.github.com/6LTM/7896695.js"></script>

Die Liste "found_primes" kann auch weggelassen werden, da im Kopf der Funktionsdeklaration mit "primes=[]" bereits ein Standardwert zugewiesen wird.

In Zeile zwei folgt die Abbruchbedingung, zu der ich später noch komme. In Zeile 5 wird das erste Element aus der Liste von Zahlen
genommen, in Fall des Beispiels also "2", da 2 die erste Primzahl ist, und wird der Liste "primes" angehangen. In Zeile 6 passiert
die eigentliche Magie. Der rekursive Aufruf an die Funktion selbst. Als ersten Parameter übergeben wir eine Liste, die durch die
"filter" Funktion erstellt wurde

####Filtern kann man nicht nur Kaffee
An dieser Stelle ein kleiner Exkurs zur "filter" Funktion. Schaut man in der [offiziellen Dokumentation von Python zur "filter" Funktion nach](http://docs.python.org/2/library/functions.html?highlight=filter#filter), wirkt es für einen Java- oder C++-Programmierer ungewöhnlich, das als
erstes Parameter eine Funktion verlangt wird. Das ist allerdings ein weiterer Grundpfeiler der funktionalen Programmierung, das
Prinzip der "higher order functions". Funktionen können an Funktionen übergeben werden, und Funktionen können Funktionen als
Rückgabewert haben.

Die "filter" Funktion bekommt also eine Funktion übergeben, welche für jedes Element in "iterable" ausgeführt wird. Ich habe im oberen
Beispiel eine "Lambda" Funktion übergeben. Das ist ganz simpel gesprochen, eine Funktion, die keinen Namen hat, somit eine anonyme Funktion.
Die "Lambda" Funktion hat einen Parameter "x", der dem Element entspricht, welches die "filter" Funktion aus "iterable" (Liste, Dictionary, Tupel usw.) holt.

Das imperative Gegenstück zur Filterfunktion wäre eine "for" Schleife. Hier das Beispiel der oben gezeigten "filter" Funktion als "for" Schleife.

<script src="https://gist.github.com/6LTM/7897164.js"></script>

Ein Vierzeiler, gegen einen Einzeiler. Zumal man auch die "for" Schleife komplett lesen muss, bis man versteht, was vor sich geht.
Im Falle der "filter" Funktion ist sofort ersichtlich, was vor sich geht. Eine Liste wird nach einem bestimmten Kriterium gefiltert, und eine neue
Liste mit den Werten, die das Kriterium erfüllen, kommt heraus.

###Der rekursive Aufruf
Zurück zum eigentlichen Thema, dem rekursiven Aufruf. Da wir nun eine gefilterte Liste haben, können wir die Funktion mit der gefilterten Liste
und den bereits Gefunden Primzahlen als Liste aus Zeile 5 wieder aufrufen.

Vor dem ersten Durchlauf sehen beide Liste folgendermaßen aus:

- xs = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
- primes = []

Nach dem ersten Durchlauf sehen beide Listen schon anders aus:

- xs = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]
- primes = [2]

Da "2" die erste Primzahl ist, wurde Alle Vielfachen von "2" entfernt, und 2 wurde "primes" zugewiesen. Der Aufruf geht weiter,
indem wir Liste exklusive dem ersten Element filtern. Nun im zweiten Durchlauf werden alle Vielfachen von 3 entfernt. z.B. die 9,
die "3" wird "primes" zugewiesen. Dieser Aufruf läuft, bis "xs" leer ist, also keine Elemente enthält, da der rekursive Aufruf immer
mit dem "tail" der Liste, also der Liste, exklusive dem ersten Element ( dem "head" ) aufgerufen wird.

###Man soll aufhören, wenn es am schönsten ist
Ist die Liste "xs" leer, kommt die Abbruchbedingung in Zeile 2 zum tragen. Falls die Liste leer ist, haben wir nichts mehr zum filtern,
die Abbruchbedingung ist erfüllt, und wir geben die gefundenen Primzahlen in Form der Liste "primes" zurück.

Hier kommt allerdings das tückische "return" ins Spiel. Rekursive Aufrufe in Python müssen zurück gegeben werden. Vergisst man dies,
stellt man verdutzt fest, dass nach dem Aufruf ein "None" zurück kommt. Man fängt an, an sich selbst zu zweifeln, haut ein paar
"print" in die Funktion, um den Status der Listen zu checken. "Läuft doch, aber wieso bekomme ich None zurück?". Die Antwort scheint simpel.
Jeder Aufruf der Funktion muss etwas zurück geben, damit die fertige Liste mit Primzahlen wieder an den ersten Aufruf durchgereicht werden kann,
und wir am Ende die hübsche Liste "[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]" zurück
bekommen. Vergisst man dies, versackt die fertige Liste im vorletzten Aufruf.

Die Funktion "find_primes" aus Zeile 14 im komplett gezeigten Code oben, ist eine reine Schönheitssache, also nicht der Rede wert,
da sie sich so gut wie von selbst erklärt.

###Abschluss
Auch wenn diese Erklärung sehr technisch ist, hoffe ich, das Ihr alles halbwegs verstanden habt.

In diesem Sine wünsche ich euch viel Spass beim programmieren. *Vergesst euer "return" nicht.*
