export enum Days {
    MONDAY = "lunedì",
    TUESDAY = "martedì",
    WEDNESDAY = "mercoledì",
    THURSDAY = "giovedì",
    FRIDAY = "venerdì",
    SATURDAY = "sabato",
    SUNDAY = "domenica"
}

export enum Hour {
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    ELEVEN = 11,
    TWELVE = 12,
    THIRTEEN = 13,
    FOURTEEN = 14,
    FIFTEEN = 15,
    SIXTEEN = 16
}

export enum Subjects {
    ENGLISH = "inglese",
    HISTORY = "storia",
    IT = "informatica",
    ITALIAN = "italiano",
    MATHS = "matematica",
    PHYSICAL_EDUCATION = "palestra",
    RELIGION = "religione",
    SYSTEMS_AND_NETWORKING = "sistemi e reti",
    TELECOMMUNICATIONS = "telecomunicazioni",
    TPSIT = "tpsit"
}

export enum Professors {
    DE_CARLO = "De Carlo",
    SEVERI = "Severi",
    CUOGHI = "Cuoghi",
    MACCHIA = "Macchia",
    ZANASI = "Zanasi",
    NERINI = "Nerini",
    MARASSI = "Marassi",
    PALMIERI = "Palmieri",
    NATALI = "Natali",
    RUSSO = "Russo",
    MAZZETTI = "Mazzetti"
}

export interface Timetable {
    day: Days;
    hours: {
        from: Hour;
        to: Hour;
        subject: Subjects;
        professor: Professors | Professors[];
    }[];
}
