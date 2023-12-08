import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  mailto(emailAddress: string, emailSubject: any) {
    return "mailto:" + emailAddress + "?subject=" + emailSubject
}

}
