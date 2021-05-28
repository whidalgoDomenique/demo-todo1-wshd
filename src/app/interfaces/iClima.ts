export interface Clima {
    name:string,
    weather:Weather[]
    main : Main
}

export interface Weather{
    description : string,
    icon : string,
    id : number,
    main : string
}

export interface Main{
    temp : number,
    temp_max : number,
    temp_min : number
}