# Architecture
Brett Deaton - Spring 2023

Planned data model and component architecture of the Tone Spiral app.


## React Components
* ToneSpiralExplorer
  - AppBar
  - ControlBox
    - TuningButtonGroup
    - PlayButton
    - NameButton
    - PersistenceSwitch
  - ChordTray
    - MiniSpiral
      - DeleteDialog
  - SpiralBox
    - Spiral
      - Tone
        - ToneModal
      - TuningLines
      - Rotator


## Data Model
Data flows down from the top components.

#### Chords API
```js
[
  { tones: [...] },
  { tones: [...] }
]
```

#### Tones API
Tones have the following JSON structure:
```js
[
  { freq: 440, vol: 0.02 },
  { freq: 466, vol: 0.01 }
]
```


## Data Props
Components handling data are the following:

* ChordTray({ chords })
* MiniSpiral({ tones })
* SpiralBox({ tones })
* Spiral({ tones })
* Tone({ tone })
* ToneModal({ tone })
* TuningLines({ tones })
* Rotator(?)
