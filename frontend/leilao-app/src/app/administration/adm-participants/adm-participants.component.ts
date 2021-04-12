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
  public participant: Participants

  
  public formulario: FormGroup = new FormGroup({
    'id': new FormControl(null),
    'name': new FormControl(null),
    'username': new FormControl(null),
    'email': new FormControl(null),
    'phone': new FormControl(null),
    'password': new FormControl(null)
    // 'password': new FormControl(null)
  })




  constructor(private participantsService: ParticipantsService) { }

  ngOnInit(): void {
    this.participantsService.getParticipants().then((result) => {
      this.participants = result
    })

  }




  public cadastrarCliente(): void {
    console.log("Cadastrando");
    // this.participantsService.
    console.log(this.participant)
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


  public valuesFromFrom():Participants{
    let participantFromForm = new Participants()
    participantFromForm.id = this.formulario.value.id
    participantFromForm.name = this.formulario.value.name
    participantFromForm.userName = this.formulario.value.username
    participantFromForm.email = this.formulario.value.email
    participantFromForm.phone = this.formulario.value.phone
    return participantFromForm
  }

  public edit(participant){
    this.participantsService.getParticipantsByID(participant.id).then((result)=>{
      this.participant = result
      this.formulario.controls['id'].setValue(this.participant.id)
      this.formulario.controls['name'].setValue(this.participant.name)
      this.formulario.controls['username'].setValue(this.participant.userName)
      this.formulario.controls['email'].setValue(this.participant.email)
      this.formulario.controls['phone'].setValue(this.participant.phone)
      this.formulario.controls['password'].setValue(this.participant.password)
    })
    
  }
}
