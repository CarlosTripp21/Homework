const util=require('util');

class checklist{
    constructor(grupos=[]){
        this.grupos=grupos;
    }
    addGrupo(nombre,subgrupo, checks){
        this.grupos.push(new Grupo(nombre,subgrupo, checks));
        return this;
    }
}

class Grupo{
    constructor(nombre, subgrupos=[], checks=[]){
        this.nombre=nombre;
        this.subgrupo=subgrupos;
        this.checks=checks;
    }
    addSubG(nombre=Array, subgrupos, checks){
    this.subgrupo.push(new subGrupo(nombre, subgrupos, checks));
    return this;
    }
    addSubG(subgrupo){
        this.subgrupo.push(subgrupo);
        return this;
    }
    addChek(tarea, value){
        this.checks.push(new Check(tarea, value));
        return this;
    }
}

class subGrupo{
    constructor(nombre, subgrupos=[], checks=[]){
        this.nombre=nombre;
        this.subgrupos=subgrupos;
        this.checks=checks;
    }
    addSubG(nombre, subgrupos, checks){
        this.subgrupos.push(nombre,subgrupos,checks);
        return this;
    }
    addSubG(subgrupo){
        this.subgrupo.push(subgrupo);
        return this;
    }
    addChek(check){
        this.checks.push(check);
        return this;
    }
}

class Check{
    constructor(tarea, value=0){
        this.tarea=tarea;
        this.value=value;
    }
    setValue(tarea, value){
        this.tarea=tarea;
        this.value = value;
        return this;
    }
}


let Checklist1 = new checklist();


let grupo = new Grupo('Tarea Técnica');
let redes=new subGrupo("Tarea de red");
let mantenimiento=new subGrupo("Tarea de mantenimiento");
let encender=new Check("Modem Encendido");
let conectar=new Check("Conexion Establecida");
let limpiar=new Check("Computadora Limpia");
let cambio=new Check("Pasta Termica");

Checklist1.addGrupo('Nuevo', grupo.addSubG(redes.addChek(encender), redes.addChek(conectar)));
Checklist1.addGrupo('Agregar',grupo.addSubG(mantenimiento.addChek(limpiar), mantenimiento.addChek(cambio)));


console.log(util.inspect(grupo, false, null, true ))
