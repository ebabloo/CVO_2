import { SummaryComponent } from './summary/summary.component';
import { DocumentsComponent } from './documents/documents.component';
import { CmeComponent } from './cme/cme.component';
import { PayorInformationComponent } from './payor-information/payor-information.component';
import { LicensureComponent } from './licensure/licensure.component';
import { PeerReferencesComponent } from './peer-references/peer-references.component';
import { MedicalMalPracticeComponent } from './medical-mal-practice/medical-mal-practice.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ManagecredentialsComponent } from './managecredentials.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalAndEducationalInfoComponent } from './professional-and-educational-info/professional-and-educational-info.component';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class ManagecredentialsRoutingModule { }

export const ManageCredentialsRouting: Routes = [
  {
    path: '',
    component: ManagecredentialsComponent,
    children: [
      { path: "", redirectTo: "personalInfo", pathMatch: "full" },
      {
        path: 'personalInfo',
        component: PersonalInformationComponent
      },
      {
        path: 'professionalAndEducationInfo',
        component: ProfessionalAndEducationalInfoComponent
      },
      {
        path: 'workexp',
        component: WorkExperienceComponent
      },
      {
        path: 'medicalmalpractice',
        component: MedicalMalPracticeComponent
      },
      {
        path: 'peerref',
        component: PeerReferencesComponent
      },
      {
        path: 'licensure',
        component: LicensureComponent
      },
      {
        path: 'payorinfo',
        component: PayorInformationComponent
      },
      {
        path: 'cme',
        component: CmeComponent
      },
      {
        path: 'documents',
        component: DocumentsComponent
      },
      {
        path: 'summary',
        component: SummaryComponent
      }
    ]
  }
];
