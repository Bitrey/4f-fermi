import { Days, Subjects, Professors, Timetable } from "../interfaces";
const {
    ENGLISH,
    HISTORY,
    IT,
    ITALIAN,
    MATHS,
    PHYSICAL_EDUCATION,
    RELIGION,
    SYSTEMS_AND_NETWORKING,
    TELECOMMUNICATIONS,
    TPSIT
} = Subjects;
const { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY } = Days;
const {
    CUOGHI,
    DE_CARLO,
    MACCHIA,
    MARASSI,
    MAZZETTI,
    NATALI,
    NERINI,
    PALMIERI,
    RUSSO,
    SEVERI,
    ZANASI
} = Professors;

export const timetable: Timetable[] = [
    {
        day: MONDAY,
        hours: [
            {
                from: 8,
                to: 9,
                subject: MATHS,
                professor: DE_CARLO
            },
            {
                from: 9,
                to: 10,
                subject: TELECOMMUNICATIONS,
                professor: SEVERI
            },
            {
                from: 13,
                to: 14,
                subject: ENGLISH,
                professor: MACCHIA
            },
            {
                from: 14,
                to: 16,
                subject: PHYSICAL_EDUCATION,
                professor: ZANASI
            }
        ]
    },
    {
        day: TUESDAY,
        hours: [
            {
                from: 8,
                to: 9,
                subject: ITALIAN,
                professor: NERINI
            },
            {
                from: 9,
                to: 11,
                subject: MATHS,
                professor: DE_CARLO
            },
            {
                from: 11,
                to: 14,
                subject: SYSTEMS_AND_NETWORKING,
                professor: [MARASSI, PALMIERI]
            }
        ]
    },
    {
        day: WEDNESDAY,
        hours: [
            {
                from: 9,
                to: 10,
                subject: TPSIT,
                professor: SEVERI
            },
            {
                from: 10,
                to: 11,
                subject: ITALIAN,
                professor: NERINI
            },
            {
                from: 11,
                to: 14,
                subject: TELECOMMUNICATIONS,
                professor: [SEVERI, CUOGHI]
            }
        ]
    },
    {
        day: THURSDAY,
        hours: [
            {
                from: 9,
                to: 10,
                subject: ENGLISH,
                professor: MACCHIA
            },
            {
                from: 10,
                to: 12,
                subject: IT,
                professor: [NATALI, RUSSO]
            },
            {
                from: 12,
                to: 14,
                subject: HISTORY,
                professor: NERINI
            }
        ]
    },
    {
        day: SATURDAY,
        hours: [
            {
                from: 8,
                to: 10,
                subject: TPSIT,
                professor: SEVERI
            },
            {
                from: 10,
                to: 11,
                subject: RELIGION,
                professor: MAZZETTI
            },
            {
                from: 11,
                to: 12,
                subject: TELECOMMUNICATIONS,
                professor: SEVERI
            },
            {
                from: 12,
                to: 13,
                subject: SYSTEMS_AND_NETWORKING,
                professor: MARASSI
            }
        ]
    }
];
