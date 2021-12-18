import { Pipe, PipeTransform } from '@angular/core';
import { IndexProduct } from '../ViewModels/index-product';

@Pipe({
  name: 'ratePipe'
})
export class RatePipePipe implements PipeTransform {

  transform(products:IndexProduct[]): IndexProduct[] {
    return products.filter(p=>p.rate<2);
  }

}
