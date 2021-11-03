export let castingsArray = [
    {
        'name': 'Форрест гамп',
        'payment': '2000',
        'id': '1',
        'city': 'Акту',
        'start_date': '21 апреля',
        'added': false,
        'favorite': false,
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzK-9ZN3RqFK2FAUApOXhke96EzCeOGCG_TQ&usqp=CAU'
    },
    {
        'name': 'День сурка',
        'payment': '3910',
        'id': '2',
        'city': 'Нур-султан',
        'start_date': '16 мая',
        'added': true,
        'favorite': false,
        'image': 'https://www.projectcasting.com/wp-content/uploads/2019/05/Casting-Call-film-clapper.jpg'
    },
    {
        'name': 'паразиты',
        'payment': '2450',
        'id': '3',
        'city': 'Алматы',
        'start_date': '3 сентября',
        'added': false,
        'favorite': false,
        'image': 'https://www.nyfa.edu/student-resources/wp-content/uploads/2015/02/stuagentsback.gif'
    },
]


export let sendRequestCasting = (id) => {
    castingsArray.forEach(casting => {
        if(casting.id == id){
            casting.added = true
        }
    })
}
export let cancelRequestCasting = (id) => {
    castingsArray.forEach(casting => {
        if(casting.id == id){
            casting.added = false
        }
    })
}
export let sendFavoriteCasting = (id) => {
    castingsArray.forEach(casting => {
        if(casting.id == id){
            casting.favorite = true
        }
    })
}
export let cancelFavoriteCasting = (id) => {
    castingsArray.forEach(casting => {
        if(casting.id == id){
            casting.favorite = false
        }
    })
}