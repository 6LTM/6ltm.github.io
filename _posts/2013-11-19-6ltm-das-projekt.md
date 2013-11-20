---
layout: post
title: 6LTM - Das Projekt
permalink: 6ltm-das-projekt.html
image: /img/header-das-projekt.png
categories: projekt
---

Als erstes möchte Ich gerne das Projekt vorstellen. Als Programmierer/Informatiker/Hacker
stößt man zwangsläufig auf Blogposts von Hackerikonen. Allen voran sei hier das Essay von
Eric S. Raymond [How to become a Hacker](http://www.catb.org/esr/faqs/hacker-howto.html) genannt.

In diesem Essay geht es um die Hackerkultur Anfang der 90'er Jahre des letzten Jahrtausends.
Nichtdestotrotz ist dieses Essay immernoch sehr lesenswert.

Auf einen Teil des Essays möchte Ich allerdings genauer eingehen. Gemeint ist folgender Abschnitt:

>1. Learn how to program.
>
>This, of course, is the fundamental hacking skill. If you don't know any computer languages, I recommend starting with Python. It is cleanly designed, well documented, and relatively kind to beginners. Despite being a good first language, it is not just a toy; it is very powerful and flexible and well suited for large projects. I have written a more detailed evaluation of Python. Good tutorials are available at the Python web site.
>
>I used to recommend Java as a good language to learn early, but this critique has changed my mind (search for “The Pitfalls of Java as a First Programming Language” within it). A hacker cannot, as they devastatingly put it “approach problem-solving like a plumber in a hardware store”; you have to know what the components actually do. Now I think it is probably best to learn C and Lisp first, then Java.
>
>There is perhaps a more general point here. If a language does too much for you, it may be simultaneously a good tool for production and a bad one for learning. It's not only languages that have this problem; web application frameworks like RubyOnRails, CakePHP, Django may make it too easy to reach a superficial sort of understanding that will leave you without resources when you have to tackle a hard problem, or even just debug the solution to an easy one.
>
>If you get into serious programming, you will have to learn C, the core language of Unix. C++ is very closely related to C; if you know one, learning the other will not be difficult. Neither language is a good one to try learning as your first, however. And, actually, the more you can avoid programming in C the more productive you will be.
>
>C is very efficient, and very sparing of your machine's resources. Unfortunately, C gets that efficiency by requiring you to do a lot of low-level management of resources (like memory) by hand. All that low-level code is complex and bug-prone, and will soak up huge amounts of your time on debugging. With today's machines as powerful as they are, this is usually a bad tradeoff — it's smarter to use a language that uses the machine's time less efficiently, but your time much more efficiently. Thus, Python.
>
>Other languages of particular importance to hackers include Perl and LISP. Perl is worth learning for practical reasons; it's very widely used for active web pages and system administration, so that even if you never write Perl you should learn to read it. Many people use Perl in the way I suggest you should use Python, to avoid C programming on jobs that don't require C's machine efficiency. You will need to be able to understand their code.
>
>LISP is worth learning for a different reason — the profound enlightenment experience you will have when you finally get it. That experience will make you a better programmer for the rest of your days, even if you never actually use LISP itself a lot. (You can get some beginning experience with LISP fairly easily by writing and modifying editing modes for the Emacs text editor, or Script-Fu plugins for the GIMP.)
>
>It's best, actually, to learn all five of Python, C/C++, Java, Perl, and LISP. Besides being the most important hacking languages, they represent very different approaches to programming, and each will educate you in valuable ways.


Ich fasse kurz zusammen. Raymond gibt "Nachwuchshackern" den Tipp, die 5 folgenden Programmiersprachen zu lernen:

1. Python -> sehr gut dokumentiert und einfach für Anfänger zu verstehen.
2. C/C++ -> Der Kern von Unix ist in C geschrieben. Nach Python, eine Sprache, um Linux/Unix zu verstehen und näher am "Metall" zu programmieren.
3. Perl -> Systemadministration (Shell Skripte) und Webprogrammierung.
4. Lisp -> Selbst wenn man es nicht aktiv einsetzt, macht Lisp einen Programmierer zu einem besseren Programmierer wenn er "es versteht".
5. Java -> Einstieg in die Objektorientierte Welt.

Auf den ersten Blick scheint es ein guter Rat zu sein, diese 5 Sprachen zu lernen. Doch ist seit Veröffentlichung des Essays viel Zeit vergangen.
Perl z.B. wird nicht mehr bzw. nur noch sehr selten für Webprogrammierung genutzt. Python hat inzwischen den Platz von Shellskripting eingenommen.
Und so weiter und so fort...

Seit mehr als einem halben Jahr trage ich nun die Idee mit mir rum, diese 5 Sprachen zu lernen, zu beherschen. Leider sind die oben genannten Sprachen
in dieser Konstellation veraltet, weshalb ich mich aufmachte, um Alternativen zu suchen.

## 6 Sprachen Ihn zu knechten

Folgende 6 Sprachen möchte ich lernen und beherschen ( deshalb auch 6LTM, 6 Languages to master):

1. Python -> Shellskripting, gut als Anfängersprache
2. C -> nah am Metall, sehr Effizient, sehr gut um zu verstehen wie man mit dem Arbeitsspeicher arbeitet
3. Javascript -> Unerlässlich in der heutigen Zeit, Desktopprogramme rücken immer mehr in den Hintergrund, anstelle dessen treten Webapplikationen
4. Clojure -> Ein modernes Lisp, einfach um "es zu verstehen", eine JVM-Sprache, Kompatibel mit Java-Bibliotheken
5. Scala -> eine weitere JVM-Sprache, sehr netter Ansatz für paralelle Programmierung mit Actors und Futures
6. Haskell -> eine rein funktionale Sprache, keine Schleifen, stattdessen Rekursion, evtl. Verständnis von Monads

Da habe ich mir ja etwas vorgenommen. Versteht mich nicht falsch. Ich bin bereits sehr wohl mit der Progammierung vertraut, doch habe ich immer wieder
bemerkt, das Ich keine einzige Sprache wirklich behersche. Damit soll nun Schluss sein.

## Die Regeln

1. Ich gebe mir für jede Programmiersprache 3 Monate, sprich 90 Tage Zeit, um diese zu erlernen und zu verstehen.
2. Es ist mir nicht erlaubt, eine Programmiersprache einzusetzen, deren Lernphase noch nicht begonnen hat.
3. Ich darf nur Programmiersprachen verwenden, deren Lernphase abgeschlossen ist, oder gerade läuft.
   - Beispiel 1: Während der Lernphase von Javascript darf ich nur Python und C verwenden
   - Beispiel 2: Während der Lernphase von Haskell darf ich Python, C, Javascript, Clojure und Scala verwenden
4. Ich darf einzig und allein Emacs als Editor verwenden.
5. Ich darf nur Ubuntu oder ein anderes Linux verwenden.
6. Jeglicher Fortschritt ist möglichst täglich festzuhalten und muss veröffentlicht werden.
7. Neue Unterprojekten, bspw. Bibliotheken, Skripte oder etwaiges ist als OpenSource zu veröffentlichen.
8. Jegliche, das Projekt betreffende Konfigurationen sind zu veröffentlichen.
9. Konfigurationen des Editors Emacs sind zu beschreiben und zu veröffentlichen.
10. Jeder geschriebene Quelltext muss dokumentiert und erklärbar sein.

## Ausnahmen

1. Es ist mir erlaubt, HTML sowie CSS3 während der gesamten Laufzeit zu verwenden, da diese als Ausschreibungssprachen gelten.
2. Es ist mir erlaubt, den Editor Emacs mit seiner integrierten Programmiersprache Elisp an meine Bedürfnisse anzupassen.

Nun wisst ihr einiges über das Projekt und könnt euch in etwa vorstellen, worum es mir geht. In den nächsten Tagen werde ich
einen Post veröffentlichen, indem ich die ziemlich lange Vorbereitungsphase beschreibe. Gleichzeitig wird ein Post erscheinen,
indem die Anfangsphase ( Editorinstallation usw. ) erklärt wird.

---

### Bis dahin,
*Felix*

