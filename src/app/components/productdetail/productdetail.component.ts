import { ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TixInterface } from '../../models/tix-interface'; 
import { UserWService } from "../../services/user-w.service";
declare var $: any;
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  constructor(
    public _uw:UserWService,
    private dataApi: DataApiService,
    private location: Location,
    private route:ActivatedRoute,
    private router: Router
  	) { }
  public tix:TixInterface;
  ngOnInit() {
    this.getDetails(this.route.snapshot.paramMap.get('id'));
  }
  getDetails(id: string){
    this.dataApi.getTixById(id).subscribe(tix => (this.tix = tix));
  }
}
