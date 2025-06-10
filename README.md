# lut

Das Wort Gottes in deinem Terminal

Abgezweigt von [Bontibon KJV](https://github.com/bontibon/kjv.git), aber mit der Luther-Bibel


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

    git clone <repository-ref>
    cd lut
    sudo make install

## Lizenz

Public domain
