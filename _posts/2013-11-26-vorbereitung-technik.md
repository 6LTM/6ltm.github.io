---
layout: post
title: Technische Vorbereitung für das Projekt
permalink: /vorbereitung/technik
---

Nachdem ich das Thema der persönlichen Vorbereitung abgehandelt habe, möchte Ich nun noch auf den Teil der technischen Vorbereitung für das Projekt eingehen. Eins möchte Ich allerdings noch vorweg nehmen. Diese Konfiguration entstammt in den Grundzügen meiner eigenen Fantasie, bis auf wenige Ausnahmen. Wenn jemand für evtl. Fehler oder sonstige Dinge im Zusammenhang mit der technischen Ausführung des Projektes verantwortlich, dann bin allein Ich das.

###Am Anfang steht das Betriebssystem
Ich habe mich bewusst für ein Ubuntu Linux entschieden. Zum einen ist es frei erhältlich und zum anderen um einiges einfacher zu handeln als anderes Distributionen wie z.B Archlinux. Ich muss allerdings ehrlich gestehen, das ich anfangs zu Arch tendierte, doch erinnerte mich Arch immer an die Kindheit, der Ich noch mit Bauklötzen gespielt habe. In Arch muss so gut wie alles von Hand erledigt werden, von der Installation, die unglaublich komplex ist ganz zu schweigen. Die Macher von Ubuntu (Canonical) auf der anderen Seite haben es verstanden, ein Linux zu liefern, dass "out of the Box" funktioniert. Ich benutze Ubuntu nun seit mehr als 4 Jahren und bin immer noch höchst zufrieden damit.

###Kleine Helferlein im Alltag
Egal welches Betriebssystem man einsetzt, als Programmierer muss man früher oder später mit dem Terminal (Kommandozeile unter Windows) arbeiten. Meistens eher früher als später. Hat man die Grundzüge erstmal verstanden, wie z.B. das wechseln in einen Ordner oder das Auflisten von Dateien, merkt man häufig, wie sehr moderne Tools mit grafischer Oberfläche die eigentliche Arbeit verstecken und manchmal auch erschweren.

####ZSH basht Bash
Ein Terminal ist nichts ohne eine vernünftige Shell. Im Falle von Ubuntu ist diese Bash. Ich weiss garnicht mehr genau warum bzw. wann, doch bin ich seit längerer Zeit ein treuer Nutzer von ZSH. Falls Ihr mit ZSH noch nicht vertraut seit, findet ihr weitere Infos auf der [Website von ZSH](http://www.zsh.org/).

Die ZSH ist auch schnell installiert und mit ein paar Kommandos ist die neue Shell einsatzbereit. Terminal auf, und folgende Kommandos eingeben

```sh
$ sudo apt-get install zsh
$ chsh -s /bin/zsh `whoami`
```

Die erste Zeile installiert ZSH mithilfe von Ubuntu bzw. Debians Packagemanager apt-get. Unter Mac steht etwas ähnlich mit [Homebrew](http://brew.sh/) zur Verfügung. Unter Windows, äh..., naja Windows eben.

Die zweite Zeile gibt den Befehl (chsh = change shell) die Shell für den jeweiligen Nutzer, der gerade eingeloggt ist, zu ändern.

Sobald die zwei Kommandos erfolgreich ausgeführt wurden, reicht ein Ab- und wieder Anmmelden und ZSH steht bereit.

####oh-my-zsh um ZSH zum Monster mutieren zu lassen
Wozu nun der ganze Umstieg? Auch wir Programmierer wollen es etwas hübsch haben und genau an diesem Punkt kommt die Power von ZSH erst richtig zum tragen. oh-my-zsh ist eine Hilfe, um einen Ansatzpunkt für eine anständige Konfiguration zu haben. Zu finden ist oh-my-zsh bei [Github](https://github.com/robbyrussell/oh-my-zsh). Der Ersteller von oh-my-zsh, Robby Russel, hat meiner Meinung nach sehr gute Arbeit abgeliefert. Nicht nur, das oh-my-zsh Plugins für git, rails usw. bietet, nein, es werden sogar 120 Themes mit geliefert. Da sollte für jeden Geschmack dabei sein.

Installiert wird das ganze wie auf der [Projektseite](https://github.com/robbyrussell/oh-my-zsh) angeben, mit folgenden Befehl installiert.

```
$ curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh

```

hat man curl nicht installiert, reicht unter Ubuntu die Eingabe von folgendem Befehl.

```sh
$ sudo apt-get install curl
```

Ein Anfang ist damit schonmal getan. Problem an oh-my-zsh ist allerdings, das es nur eine zentrale Konfigurationsdatei (.zshrc) gibt. Ich persönlich mag es gerne, wenn meine Quelltexte und Konfigurationen logisch aufgeteilt. Klar kann man auch eine 400 Zeilen lange .zshrc haben, doch fehlt da schnell die Übersicht.

Was also nun tun? Wir erstellen einen Ordner und verlegen alle Konfigurationsdateien dort hinein. Folgende Befehle habe ich ausgeführt

```sh
$ mkdir dotfiles
$ mv .zshrc dotfiles/
$ ln -s dotfiles/.zshrc .zshrc
```

Der erste Befehl erstellt einen neuen Order namens dotfiles im Homeverzeichnis, in meinem Fall /home/felix/dotfiles . Der zweite Befehl verschiebt die .zshrc Datei in den gerade erstellten Ordner. Der letzte Befehl erstellt einen Symlink zur verschoben .zshrc.

Haben wir das erstmal geschafft, sollten wir den Ordner dotfiles versionieren, um etwaige Fehler wieder beseitigen zu können

```
$ cd dotfiles
$ git init
```

Ein weiterer Vorteil zeigt sich, wenn wir das soeben erstellte Repository bei [Github](www.github.com) hochladen. So kann man sich sicher sein, das man auch bei einem kompletten Verlust der Festplatte durch das runterladen eines Repositories schnell wieder produktiv ist.

```
$ git commit -a -m "initial commit"
$ git add remote origin git@github.com:username/reponame.git
$ git push -u origin master
```

Vorausgesetzt wird natürlich, das man einen Github Account besitzt, was allerdings bei gefühlten 99,99% der Programmierer der Fall ist.

Wie ich meine Konfiguration genau aufgeteilt habe, möchte ich nicht weiter ausführen. Stattdessen möchte Ich auf das [Repository](www.github.com/6ltm/dotfiles) verweisen. Die Dateinamen sind selbsterklärend. Zentraler Punkt bleibt die Datei [.zshrc](https://github.com/6LTM/dotfiles/blob/master/.zshrc)

###z ist das neue cd
Terminal auf...In ein Verzeichnis springen...Ausversehen Terminal schliesen...Prozedur von vorn. Genau das kennt vermutlich jeder, der mit dem Terminal arbeit. Wo war noch gleich der Ordner? Und schon sind wieder 5 Minuten, in denen man sinnlos durch alle möglichen Verzeichnis mithilfe von "cd" springt. Genau an der Stelle kann [Z](https://github.com/rupa/z) Abhilfe schaffen. Z ist ein Shellskript, welches aufzeichnet, in welce Verzeichnisse springt und dem Benutzer mithilfe von Fuzzymatching hilft, schneller durch die Ordner zu navigieren. Irgendwie ist das kompliziert zu erklären, besser ist da ein Beispiel

####ohne z
```
$ cd Projekte
$ ls
$ cd 6ltm
```
####mit z
```
$ z 6
```

Z merkt sich in welche Ordner ich wie oft gesprungen bin und hilft mir somit schneller durch den Verzeichnisbaum zu navigieren. Allerdings muss man mindestens einmal auf normalem Weg in den Ordner gesprungen sein. Wie schon gesagt, ist das z etwas schwer zu erklären. Probiert es einfach mal aus. Eine Installationsanleitung inklusive einer ausführlichen Erklärung, findet ihr im [Github Wiki](https://github.com/rupa/z/wiki) von z.

###Ein Blog muss her
Eines meiner Ziele mit diesem Projekt ist es, Leute zu erreichen. Einfach geht das per Internet, somit muss ein Blog für mein Projekt ran. "Nimm Wordpress" höre ich die ersten schon schreien. NEIN! Ich möchte was einfacheres, bei dem ich Posts mit meinem Lieblingseditor Emacs schreiben kann. Auf der Suche nach einer Lösung stieß ich auf [Jekyll](http://jekyllrb.com/). Jekyll ist schnell erklärt. Man schreibt seine Posts in [Markdown](http://de.wikipedia.org/wiki/Markdown) und Jekyll wandelt diese in statische HTML Dateien um, die man auf einen Server hochladen kann. Keine lästige Datenbank, kein lästiges PHP. Das beste kommt allerdings zum Schluss, Versionskontrolle.

Statischer Text hat den Vorteil, das man diesen versionieren kann. Ob nun mit Subversion, Git oder Mercurial spielt keine Rolle. Taucht ein Fehler auf, kann man binnen Sekunden auf eine ältere Version zurück springen, insofern man das möchte.

Wie man Jekyll installiert und ein Template erstellt, wird auf der [Seite von Jekyll](http://jekyllrb.com/docs/home/) erklärt.

Sollte man sich entscheiden, git und Github zu verwenden, hat man auch gleich ein passendes Hosting gefunden, welches auch noch gratis ist. Vermutlich liegt es an der Tatsache, das Jekyll vom Github Mitbegründer Tom Preston-Werner erstellt wurde.

###Bootstrap3 hilft Designfernen Menschen
Ich bin ehrlich zu euch. Ich habe überhaupt keine Ahnung, wie man ein visuell ansprechendes Design erstellt. Meine Skills in Photoshop hören spätestens beim Erstellen von Ebenen auf. Hat man aber trotzdem den Drang nach einem optisch ansprechenden Design für seinen Blog oder andere Webseiten, kommt man um ein Framework nicht herum.

Eins von diesen Frameworks ist das kürzlich erschienene Bootstrap in der Version 3 von Twitter. Vermutlich bin ich nicht der einzige Mensch auf diesem Planeten, der keine Ahnung von Design hat, denn das halbe Internet sieht inzwischen nach Bootstrap aus.

Informationen zu Bootstrap3 findest du auf der Seite [http://getbootstrap.com/](http://getbootstrap.com/).

Ein ganz klarer Vorteil von Bootstrap3 ist der "Mobile first" Ansatz. Hält man sich an die von Bootstrap3 vorgegebene Weise der Dinge, erhält man ein Layout, was ohne weiteres zutun auf alle Gerätegrößen angepasst wird. Nehmt euch kurz die Zeit und verkleinert euren Browser. Wahnsinn oder?

###Zusammenfassung
Ich fasse nochmal die Informationen aus diesem Post zusammen.

- **Betriebssytem**: Ubuntu Linux
- **Shell**: ZSH mit oh-my-zsh und z
- **Blog**: Jekyll in Kombination mit Bootstrap3 und Github Pages Hosting

Klingt erstmal nach nicht viel, doch war es eine Menge Arbeit und ich bin stolz auf das bisher erreichte.
