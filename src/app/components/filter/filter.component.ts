import { Component} from '@angular/core';
import {SearchService} from '../../services/search.service';
import {Class} from '../../../Class';
import {Classes} from '../../../Classes';
import {ActivatedRoute} from '@angular/router';
import {SearchComponent} from '../search/search.component';
import {ClassComponent} from '../class/class.component';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  inputs:['item']
})
export class FilterComponent{

}
