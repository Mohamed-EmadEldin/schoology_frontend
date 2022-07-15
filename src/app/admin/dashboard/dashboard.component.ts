import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  shortLink: string = "";
  loading: boolean = false;
  file: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
        this.file = event.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(this.file);

        reader.addEventListener('load', (e) => {
          const data = e.target?.result;
          console.log(data);

      })

    }


}
