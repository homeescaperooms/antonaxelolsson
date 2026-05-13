window.ESCAPE_CHATBOT_DATA = {
  "botName": "Anton",
  "storageKey": "escape_chatbot_progress_v2",
  "commands": {
    "hint": [
      "HINWEIS",
      "HINT"
    ],
    "solution": [
      "LÖSUNG",
      "LOESUNG",
      "SOLUTION"
    ],
    "restart": [
      "NEUSTART",
      "RESET"
    ]
  },
  "steps": [
    {
      "id": "breitengrad",
      "title": "Start",
      "message": "So, hier fühle ich mich einfach wohler. Ihr müsst trotzdem mehr Überzeugungskraft leisten. Ich muss einfach sicherstellen, dass ihr der Sache auch wirklich gewachsen seid. Begebt euch in die Stadsbibliotek von Stockholm und sendet mir den Breitengrad des Standortes zu. \nPS: Wenn ihr euch verlaufen habt und genau an dieser Stelle mit mir den Kontakt wieder aufsuchen möchtet, schickt NEUSTART. Ich gebe euch maximal zwei Hinweisstellungen pro Aufgabe, dafür sendet einfach HINWEIS. Wenn ihr trotz Hinweisen nicht weiterkommt, könnt ihr mir LÖSUNG schicken. \nLG, Anton Axel Olsson",
      "hints": [
        "Ich benötige den Breitengrad von der Stadsbibliotek. Andernfalls bekommt ihr keine weiteren Informationen von mir."
      ],
      "wrong": [
        "Das ist leider nicht richtig. Ich benötige den Breitengrad der Stadsbibliotek.",
        "Das ist leider nicht richtig. Sendet HINWEIS, wenn ihr Unterstützung braucht.",
        "Das ist leider nicht richtig. Ihr könnt auch LÖSUNG senden, wenn ihr gar nicht weiterkommt."
      ],
      "answers": [
        {
          "type": "startsWith",
          "value": "59"
        }
      ],
      "displaySolution": "59",
      "solutionText": "Die gesuchte Eingabe beginnt mit 59. Ich werte das jetzt als gelöst."
    },
    {
      "id": "raetsel_1",
      "title": "Rätsel 1",
      "message": "Alles klar. Wir sind uns einen Schritt näher gekommen, aber trauen kann ich euch noch lange nicht. Anders und ich sind immer sehr behütet in der Kommunikation gewesen. Die Verschlüsselung von meinem Namensvetter eignet sich dafür am besten. Dieses Dokument hilft euch dabei unsere Codierung zu entschlüsseln: [url=https://mindle.de/df2/be/K31dR.pdf]STADSBIBLIOTEK[/url] Wie lautet die Antwort auf die Frage, die ich für euch verschlüsselt habe?",
      "hints": [
        "Die Enigma-Maschine am PC-Monitor eingeschaltet? Der passende Link befindet sich in der PDF. Wir haben am liebsten das Modell von Mikael Olsson verwendet. Die richtige Einstellung der vier Walzen könnt ihr der Skizze in der PDF entnehmen.",
        "Beispiel (*):\nDie Einstellung der Walzen zum Decodieren der ersten 12 Zeichen lautet wie folgt II (E) - I (I) - II (N) - VII (S). Gebt die Zeichen im Eingabefeld ein. Wie lautet die Lösung im Ausgabefeld?"
      ],
      "wrong": [
        "Das ist leider nicht die richtige Lösung. Kombiniert die Enigma-Maschine am Monitor genau mit der Skizze im pdf-Dokument.",
        "Das ist leider nicht die richtige Lösung. Kombiniert die Enigma-Maschine am Monitor genau mit der Skizze im pdf-Dokument.",
        "Das ist leider nicht die richtige Lösung. Kombiniert die Enigma-Maschine am Monitor genau mit der Skizze im pdf-Dokument."
      ],
      "answers": [
        {
          "type": "exact",
          "value": "Odenplan"
        }
      ],
      "displaySolution": "Odenplan"
    },
    {
      "id": "raetsel_2",
      "title": "Rätsel 2",
      "message": "Ihr könnt euch langsam meinem Standort nähern. Steigt in eine Tunnelbana an der besagten Haltestelle. Ich werde euch weder die Zielstation noch den direkten Weg zum Ziel nennen. Weiteres könnt ihr hier entnehmen: [url=https://mindle.de/df2/be/K32dP.pdf]TUNNELBANA[/url] Zusätzlich werdet ihr den Metroplan benötigen. Ladet euch diesen hier herunter:  [url=https://mindle.de/demo/be/map.pdf]METROPLAN[/url] Kombiniert beides und nennt mir die Zielstation.",
      "hints": [
        "Steigt zunächst in die grüne Linie ein und fahrt bis zur Haltestelle Alvik.",
        "Der letzte Umstieg erfolgt an der Haltestelle Gullmarsplan."
      ],
      "wrong": [
        "Ihr habt euch anscheinend verfahren. Fahrt nochmals zurück zur Haltestelle Odenplan und befolgt genau die Anweisungen im pdf-Dokument.",
        "Ihr habt euch anscheinend verfahren. Fahrt nochmals zurück zur Haltestelle Odenplan und befolgt genau die Anweisungen im pdf-Dokument.",
        "Ihr habt euch anscheinend verfahren. Fahrt nochmals zurück zur Haltestelle Odenplan und befolgt genau die Anweisungen im pdf-Dokument."
      ],
      "answers": [
        {
          "type": "exact",
          "value": "Medborgarplatsen"
        },
        {
          "type": "exact",
          "value": "Medborg"
        }
      ],
      "displaySolution": "Medborgarplatsen"
    },
    {
      "id": "raetsel_3",
      "title": "Rätsel 3",
      "message": "Willkommen in der Sophiakirche. Ist das nicht eine architektonische Meisterleistung? Schaut euch in der Kirche genau um. Wahrscheinlich sind wieder viele Menschen vor Ort. Ihr müsst dort eine bestimmte Person für mich aufsuchen. Schaut mal vorbei: [url=https://mindle.de/df2/be/K33b8.pdf]SOPHIAKIRCHE[/url] \nAuf welcher Bank sitzt mein enger Vertrauter?",
      "hints": [
        "Versucht mithilfe von google streetview in das Innere der Kirche zu blicken.",
        "Die gesuchte Person sitzt im rechten Bereich der Kirche"
      ],
      "wrong": [
        "Auf dieser Bank sitzt die gesuchte Person leider nicht. Ich gebe euch einen weiteren Versuch. Die gesuchte Person kann laut Angaben nur auf einer Bank sitzen.",
        "Auf dieser Bank sitzt die gesuchte Person leider auch nicht. Ich gebe euch noch einen weiteren Versuch. Die gesuchte Person kann laut Angaben nur auf einer Bank sitzen.",
        "Auf dieser Bank sitzt die gesuchte Person leider auch nicht. Ich gebe euch noch einen letzten Versuch. Die gesuchte Person kann laut Angaben nur auf einer Bank sitzen."
      ],
      "answers": [
        {
          "type": "exact",
          "value": "31"
        },
        {
          "type": "exact",
          "value": "Nummer 31"
        }
      ],
      "displaySolution": "31"
    }
  ],
  "finalMessage": "Gut gemacht, jetzt kann ich euch trauen. Hier geht es weiter: [url=https://locked-games.de/kapitel-loesung/qp3nU92atB2SmNAiTXHHoNTAFKSaLLGT]KAPITEL 4[/url]"
};