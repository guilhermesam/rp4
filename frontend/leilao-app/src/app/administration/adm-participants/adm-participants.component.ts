import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ParticipantsService } from 'src/app/services/participants.service';
import { Participants } from 'src/shared/participants.models';

@Component({
  selector: 'app-adm-participants',
  templateUrl: './adm-participants.component.html',
  styleUrls: ['./adm-participants.component.css']
})
export class AdmParticipantsComponent implements OnInit {

  public participants: Participants[]
  public participant = new Participants()


  public formulario: FormGroup = new FormGroup({
    'name': new FormControl(null),
    'username': new FormControl(null),
    'password': new FormControl(null),
    'email': new FormControl(null),
    'phone': new FormControl(null),
    'address': new FormControl(null),
  })




  constructor(private participantsService: ParticipantsService) { }

  ngOnInit(): void {
    this.participantsService.getParticipants().then((result) => {
      this.participants = result
    })

  }




  public createParticipant(): void {
    this.participant = this.valuesFromFrom()
    console.log(this.participant);

    this.participantsService.createParticipant(this.participant).subscribe((response)=>{
      console.log(response);

    })

  }

  public atualizarCliente(): void {
    console.log("Atualizando");
    console.log(this.participant)
  }

  public excluirCliente(): void {
    console.log("Excluindo");
    console.log(this.participant)

  }
  public updateClient() {
    console.log("Atualizando");
    console.log(this.participant)


  }


  public valuesFromFrom(): Participants {
    let participantFromForm = new Participants()
    participantFromForm.name = this.formulario.value.name
    participantFromForm.userName = this.formulario.value.username
    participantFromForm.password = this.formulario.value.password
    participantFromForm.email = this.formulario.value.email
    participantFromForm.phone = this.formulario.value.phone
    participantFromForm.phone = this.formulario.value.address
    return participantFromForm
  }

  public edit(participant) {
    this.participant = participant
    this.formulario.controls['name'].setValue(this.participant.name)
    this.formulario.controls['username'].setValue(this.participant.userName)
    this.formulario.controls['email'].setValue(this.participant.email)
    this.formulario.controls['phone'].setValue(this.participant.phone)
    this.formulario.controls['address'].setValue(this.participant.address)


  }
}
