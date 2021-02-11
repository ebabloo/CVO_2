import { ManageCredentialsRouting } from './managecredentials-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ManagecredentialsComponent } from './managecredentials.component';
import { CustomMaterialModule } from './../../material';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { MedicalMalPracticeComponent } from './medical-mal-practice/medical-mal-practice.component';
import { PeerReferencesComponent } from './peer-references/peer-references.component';
import { LicensureComponent } from './licensure/licensure.component';
import { PayorInformationComponent } from './payor-information/payor-information.component';
import { CmeComponent } from './cme/cme.component';
import { DocumentsComponent } from './documents/documents.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [PersonalInformationComponent, ManagecredentialsComponent, WorkExperienceComponent, MedicalMalPracticeComponent, PeerReferencesComponent, LicensureComponent, PayorInformationComponent, CmeComponent, DocumentsComponent, SummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ManageCredentialsRouting),
    CustomMaterialModule
  ],
   exports: [ManagecredentialsComponent]
})
export class ManagecredentialsModule { }
