import { Injectable } from "@angular/core";

@Injectable()
export class CommodityService{
    isLogined:boolean = false;
     commodities:Array<any> = [
    { "id":19,
      "name":"皮鞋",
      "price":"300"},
      {"id":7,
      "name":"包",
      "price":"100"},
      {"id":14,
      "name":"衣服",
      "price":"200"}
  ];

    constructor(){

    }
    delete(obj){
        let id = obj.id
        this.commodities.forEach((item,index,array)=>{
        if(item.id == id){
            array.splice(index,1)
        }
        })
    }
    search(type,value){
        this.commodities.sort((a,b)=>{
        let result1 = String(a[type]).match(value)
        let result2 = String(b[type]).match(value)

        return Number(result2)-Number(result1);
        });
    }
    deleteChecked(){
        let checkList = this.commodities.filter(item=>item.check==true)
        checkList.forEach(item=>{
            this.delete(item)
        })
    }
    getcommodities(){
        return this.commodities;
    }

}

