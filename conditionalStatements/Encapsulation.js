
//14-02-23


"use strict";
class studentData{
    name="sk"
    #id="confidential data"   //#private

    // displayData(){
    //     console.log(this.#id);  //confidential data   (because of .this keyword it will display the id even we put #)
    // }


    get data(){  //provide permission to reas the data
        return this.#id
    }
    set setData(val){
        this.#id=val
    }
}
    let sData=new studentData()
    // sData.displayData() //confidential data
    sData.setData=475896
    console.log(sData) //studentData { name: 'sk' }
    console.log(sData.data);  //475896

