# lut

Das Wort Gottes in deinem Terminal

Empfunden nach [Bontibon KJV](https://github.com/bontibon/kjv.git), aber mit der Luther-Bibel


## Nutzung

    nutzung: ./lut [optionen] [referenz...]

      -l      bücher auflisten
      -W      kein zeilenumbruch
      -h      hilfe anzeigen

      Referenz-Typen:
          <Buch>
              Bestimmtes Buch
          <Buch>:<Kapitel>
              Bestimmtes Kapitel eines Buches
          <Buch>:<Kapitel>:<Verse>[,<Verse>]...
              Bestimmte Vers(e) in einem Kapitel eines Buches
          <Buch>:<Kapitel>-<Kapitel>
              Folge von Kapiteln eines Buches
          <Buch>:<Kapitel>:<Verse>-<Verse>
              Folge von Versen in einem Kapitel eines Buches
          <Buch>:<Kapitel>:<Verse>-<Kapitel>:<Verse>
              Folge von Versen zwischen mehreren Kapiteln

          /<Suche>
              Alle Verse, welche dem Muster entsprechen
          <Buch>/<Suche>
              Alle Verse des Buchs, welche dem Muster entsprechen
          <Buch>:<Kapitel>/<Suche>
              Alle Verse des Kapitels, welche dem Muster entsprechen

## Bauen

lut kann installiert werden indem man das Repository klont und dann *make* ausführt:

    git clone git@github.com:DavGoeck/lut.git
    cd lut
    sudo make install

## Büchernamen Modifizieren

Das Script ist im Wesentlichen ein simpler Filter, der die gewünschten Bücher, Kapitel und Verse aus der Datei lut.tsv (Tab Separated Values) raussucht. Die lut.tsv kann mit transformer.mjs aus der Datei luther.json neu generiert werden, falls man andere Namen für die Bücher setzen möchte.

## Lizenz

Public domain
