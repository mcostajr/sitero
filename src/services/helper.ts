export function className(classId: number) {

    const jobs = [
        {id: 0, name: 'Aprendiz'},
        {id: 1, name: 'Espadachim'},
        {id: 2, name: 'Mago'},
        {id: 3, name: 'Arqueiro'},
        {id: 4, name: 'Noviço'},
        {id: 5, name: 'Mercador'},
        {id: 6, name: 'Gatuno'},

        {id: 7, name: 'Cavaleiro'},
        {id: 8, name: 'Sacerdote'},
        {id: 9, name: 'Bruxo'},
        {id: 10, name: 'Ferreiro'},
        {id: 11, name: 'Caçador'},
        {id: 12, name: 'Mercenário'},

        {id: 14, name: 'Templário'},
        {id: 15, name: 'Monge'},
        {id: 16, name: 'Sábio'},
        {id: 17, name: 'Arruaceiro'},
        {id: 18, name: 'Alquimista'},
        {id: 19, name: 'Bardo'},

        {id: 4060, name: 'Rune Kinght'},
        {id: 4061, name: 'Warlock'}
    ]
    
    const name = jobs.map(job => {
        if(job.id == classId)
        return job.name
    })

    return name
}