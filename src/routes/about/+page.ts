export const load = () => {
    return {
        props: {
            headings: {
                main: 'Lebenslauf',
                sections: [
                    { key: 'work_experience', title: 'Berufserfahrung' },
                    { key: 'education', title: 'Ausbildung' },
                    { key: 'volunteer', title: 'Ehrenamt' },
                    { key: 'skills', title: 'Kompetenzen' }
                ]
            },
            items: {
                work_experience: [
                    {
                        title: 'IT-Systemadministrator (Kommunale Fachanwendungen)',
                        company: 'ITEBO GmbH',
                        start: '2024-10',
                        end: '',
                        description: [],
                        skills: [ 'Windows', 'Datenbankverwaltung (MSSQL)', 'Kunden-Support' ],
                        image: 'logo_itebo.webp',
                        bgcolor: 'bg-white',
                        link: 'https://www.itebo.de',
                    },
                    {
                        title: 'System Administrator',
                        company: 'Gingco Systems GmbH',
                        start: '2022-11',
                        end: '2024-10',
                        description: [
                            'Betreuung und Entwicklung von Docker-basierten Netzwerk- und Serverinfrastruktur',
                            'Administrativer 2nd- und 3rd-Level Support (Remote)',
                            'Performance- und Securitymanagement sowie Analyse und Beseitigung von Störungen',
                            'Erstellung und Umsetzung von IT-Konzepten',
                            'Kommunikation mit Kunden, externen Dienstleistern und Lieferanten',
                        ],
                        skills: [ 'PHP', 'Linux', 'Docker', 'ISO 27001', 'Microsoft Intune', 'Datenbankverwaltung (PostgreSQL & MSSQL)', 'Kunden-Support', ],
                        image: 'logo_gingco.webp',
                        bgcolor: 'bg-je-gingco',
                        link: 'https://gingco.systems',
                    },
                    {
                        title: 'Fachinformatiker Anwendungsbetreuung',
                        company: 'Luftfahrt-Bundesamt',
                        start: '2021-10',
                        end: '2022-11',
                        description: [
                            'Administration des Telekommunikationssystem',
                            'IT-Usersupport (Vor Ort und Remote)',
                        ],
                        skills: [ 'Telekommunikation', 'Telekommunikationssysteme', 'Linux', 'Windows', ],
                        image: 'logo_lba.webp',
                        bgcolor: 'bg-white',
                        link: 'https://www.lba.de/DE/Home/home_node.html',
                    },
                    {
                        title: 'Junior Data Manager PIM',
                        company: 'STEINEL GmbH',
                        start: '2021-06',
                        end: '2021-10',
                        description: [
                            'Entwicklung von Automatisierung wie Vertriebsdatenblätter, Preislisten, Katalog, Printwerbemittel etc.',
                            'Entwicklung von Schnittstellen, wie z. B. die automatische Aktualisierung der Steinel Homepage durch das PIM-System',
                            'Dataquality weiter ausbauen',
                            'Enge Kooperation mit internen Abteilungen sowie externen Dienstleistern',
                            'Eruierung und Festlegung von Prozessen und Workflows',
                            'Koordination und Kontrolle der externen Dienstleister',
                            'Umsetzung neuer gesetzlicher Vorgaben und Verordnungen',
                        ],
                        skills: [ 'PHP', 'Scripting', 'HTML', 'Datenmanagement', ],
                        image: 'logo_steinel.webp',
                        bgcolor: 'bg-white',
                        link: 'https://steinel.de'
                    }
                ],
                education: [
                    {
                        title: 'Fachinformatiker in der Fachrichtung Systemintegration',
                        company: 'STEINEL GmbH',
                        start: '2018-08',
                        end: '2021-06',
                        description: [
                            'IT-Usersupport (Vor Ort und Remote)',
                            'Support der Druckerumgebung (insbes. EU-Label Drucker)',
                            'Installation & Einrichtung von PCs/Mobilen Endgeräten',
                            'Erstellen & Aktualisieren der Windows 10 Images für die Installation der Geräte',
                            'Erstellen, koordinieren & halten von IT-Schulungen (Allgemeine IT Schulung & Informationssicherheitsschulung)',
                            'Erstellen einer Dokumentation der WLAN Umgebung am Standort Herzebrock',
                        ],
                        skills: [ 'Windows', 'Kunden-Support', 'Drucker', ],
                        image: 'logo_steinel.webp',
                        bgcolor: 'bg-white',
                        link: 'https://steinel.de',
                    },
                    {
                        title: 'Gesamtschule - Fachoberschulreife',
                        company: 'Von-Zumbusch-Gesamtschule',
                        start: '2012-08',
                        end: '2018-07',
                        description: [],
                        skills: [],
                        image: 'logo_vzg.webp',
                        bgcolor: 'bg-white',
                        link: 'https://von-zumbusch-gesamtschule.de',
                    }
                ],
                volunteer: [
                    {
                        title: 'Koordination AG Digitales',
                        company: 'BÜNDNIS 90/DIE GRÜNEN Braunschweig',
                        start: '2023-11',
                        end: '',
                        description: [],
                        skills: [],
                        image: 'logo_gruene.svg',
                        bgcolor: 'bg-je-gruene-tanne',
                        link: 'https://gruene-braunschweig.de',
                    },
                    {
                        title: 'Koordination Aktionsgruppe',
                        company: 'BÜNDNIS 90/DIE GRÜNEN Braunschweig',
                        start: '2023-11',
                        end: '2024-08',
                        description: [],
                        skills: [],
                        image: 'logo_gruene.svg',
                        bgcolor: 'bg-je-gruene-tanne',
                        link: 'https://gruene-braunschweig.de',
                    }
                ],
                skills: [
                    {
                        category: 'Informationstechnik',
                        subcategories: [
                            {
                                title: 'Infrastruktur',
                                skills: [ 'Windowsclient', 'Windowsserver', 'Linuxserver', 'Microsoft Intune', 'Docker', 'Telekommunikation', 'Telekommunikationssysteme', 'PostgreSQL', 'MSSQL' ]
                            },
                            {
                                title: 'Programmierung/Frameworks',
                                skills: [ 'PHP', 'CSS', 'HTML', 'TypeScript', 'SvelteKit' ]
                            },
                            {
                                title: 'Software',
                                skills: [ 'Word', 'Excel', 'PowerPoint', 'Outlook', 'VS Code', 'SQL Server Management Studio' ]
                            }
                        ]
                    },
                    {
                        category: 'Sprachen',
                        skills: [ 'Deutsch (Muttersprache)', 'Englisch (B1)' ]
                    },
                    {
                        category: 'Mitgliedschaften',
                        skills: [ 'BÜNDNIS 90/DIE GRÜNEN - seit 2022', 'GRÜNE JUGEND - seit 2022' ]
                    }
                ]
            }
        }
    }
}