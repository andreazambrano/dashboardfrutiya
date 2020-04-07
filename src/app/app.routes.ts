import {RouterModule,Routes} from '@angular/router';
import {
	FooterComponent,
	ProductsComponent,
	ProductdetailComponent,
	TestappComponent,
	SidenavComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:TestappComponent},
	{path:'footer',component:FooterComponent},
	{path:'products',component:ProductsComponent},
	{path:'productdetail/:id',component:ProductdetailComponent},
	{path:'sidenav',component:SidenavComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

