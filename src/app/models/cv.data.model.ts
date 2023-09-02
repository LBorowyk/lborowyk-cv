export interface HistoryPlace {
    start: string, 
    end: string, 
    company: string,
}

export interface WorkPlace extends HistoryPlace {
    rank: string, 
    descriptions: Array<string>
}

export interface StudyPlace extends HistoryPlace {
    degree: string, 
    specialization: string, 
    department: string
}

export interface CVItem {
    firstName: string, 
    lastName: string, 
    phone: string, 
    email: string, 
    address: string, 
    rank: string, 
    descriptions: Array<string>,
    keyWords: Array<string>,
    workPlaces: Array<WorkPlace>,
    studyPlaces: Array<StudyPlace>
}