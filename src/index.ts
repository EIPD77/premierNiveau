// Exercice 1 : Créer les interfaces BirthInfo et Location
interface BirthInfo {
	date: string;
	place: string;
}

interface Location {
	city: string;
	country: string;
	historicVenue: string;
}

// Exercice 2 : Créer les interfaces Instrument et Studio
interface Instrument {
	name: string;
	playedBy: string;
}

interface Studio {
	name: string;
	location: string;
}

// Exercice 3 : Créer les interfaces Song et SoloAlbum
interface Song {
	title: string;
	mainVocalist: string;
	duration: string;
	instruments: Instrument[];
	songwriters: string[];
}

interface SoloAlbum {
	name: string;
	year: number;
	tracks: [Song, Instrument];
}

// Exercice 4 : Créer toutes les interfaces nécessaires afin de compléter le typage principal
interface FormedInterface {
	year: number;
	location: Location;
}

interface Members {
	name: string;
	instruments: Instrument[];
	birthInfo: BirthInfo;
}

interface BeatlesDatabase {
	bandName: string;
	formed: FormedInterface;
	members: Members[];
	albums: [Song, Instrument];
}
