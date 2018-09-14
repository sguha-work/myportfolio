import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DatabaseService } from './../../services/database.service';
@Component({
  selector: 'component_contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public model: any;
  constructor(private db: DatabaseService, private toastr: ToastrService) {
    this.model = {};
    this.model.name = "";
    this.model.email = "";
    this.model.subject = "";
    this.model.messege = "";
  }

  private validateEmail(email: string): boolean {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  private resetForm(): void {
    this.model.name = "";
    this.model.email = "";
    this.model.subject = "";
    this.model.message = "";
  }
  public submitMessage(event: any) {
    if (this.model.name == "" || this.model.name.length < 3) {
      this.toastr.error("Please provide your name");
      return false;
    }
    if (this.model.email == "" || !this.validateEmail(this.model.email)) {
      this.toastr.error("Please provide valid EmailId");
      return false;
    }
    if (this.model.subject == "" || this.model.subject.length < 5) {
      this.toastr.error("Please provide a brief subject of your messege");
      return false;
    }

    if (this.model.message == "" || this.model.message.length < 20) {
      this.toastr.error("Please provide a brief message");
      return false;
    }

    let message = {
      senderName: this.model.name,
      senderEmail: this.model.email,
      subject: this.model.subject,
      messege: this.model.message
    };
    this.db.set("messages", message).then((data) => {
      this.toastr.success("Messege sent to Sahasrangshu");
      this.resetForm();
    }).catch((error) => {
      this.toastr.error("Something wrong hapenning please try after some time");
    });
    event.preventDefault();
    return false;
  }
  ngOnInit() {
  }

}
