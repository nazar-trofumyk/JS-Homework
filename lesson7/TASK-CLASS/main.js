class Car{
   constructor(mode, producer, year, maxSpeed, engineVolume) {
       this.mode=mode
      this.producer=producer
       this.year=year
   this.maxSpeed=maxSpeed
   this.engineVolume=engineVolume
   }
    drive(){
       console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
info(){
    for (const key of this) {
        console.log(key,this[key])
    }


}


}