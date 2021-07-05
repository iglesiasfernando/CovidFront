import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultToStringPipe'
})
export class ResultToStringPipe implements PipeTransform {

  transform(resultado: Number) {
    var respuesta = "";
    var colorClass = "";

    switch(resultado){
      case 0:
          respuesta = "Sano";
      colorClass = 'blueColor';

        break;
        case 1:
          respuesta = "Infectado"
          colorClass = 'blueColor';

        break;
        case 2:
          respuesta = "Inmune"
          colorClass = 'blueColor';

          break;
    }
    var retorno = '<span>'+ respuesta +'</span> ';
    return retorno;
    
   
   }

}
