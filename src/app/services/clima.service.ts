import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";;


@Injectable({
    providedIn: 'root'
})
export class ClimaService {
    apiKey = '83ce58d05898c7067d6e5f06e033e336';

    constructor(
        private http: HttpClient
    ) { }


    getClima(lat: number, lon: number) {
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
    }

}

