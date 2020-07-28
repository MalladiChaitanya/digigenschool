import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  assignments = [{
    title: 'Basic Physics',
    desc: 'Read Difraction and prepare a document with practicle examples',
    subject: 'science'
  }, {
    title: 'Electromagentics',
    desc: 'Read Electromagnetics Vol 2',
    subject: 'science'
  },
  {
    title: 'Maxwell Equations',
    desc: 'Applications of Maxwell Equations',
    subject: 'science'
  }, {
    title: 'Classical Mechanics',
    desc: 'Practice of Physics: conservation laws, momentum and energy, are introduced before forces, and one-dimensional setups are thoroughly explored before two-dimensional systems are considered. It contains both problems and worked-out examples.',
    subject: 'science'
  }, {
    title: 'Body Physics: Motion to Metabolism',
    desc: 'Read Electromagnetics Vol 2',
    subject: 'science'
  }, {
    title: 'Body Physics: Motion to Metabolism',
    desc: 'In Mechanics and Relativity, the reader is taken on a tour through time and space. Starting from the basic axioms formulated by Newton and Einstein, the theory of motion at both the everyday and the highly relativistic level is developed without the need of prior knowledge. The relevant mathematics is provided in an appendix',
    subject: 'science'
  }, {
    title: 'Calculus-Based Physics I',
    desc: 'Calculus-Based Physics is an introductory physics textbook designed for use in the two-semester introductory physics course typically taken by science and engineering students.',
    subject: 'maths'
  }, {
    title: 'Relativity',
    desc: 'the domains of relativity and cosmology. In the study of motion – physics – special and general relativity form two important building blocks.',
    subject: 'science'
  }, {
    title: 'Fall, Flow, and Heat',
    desc: 'Curiosity about how people, animals, things, images and space move leads to many adventures. This volume presents the best of them in the domain of everyday life.',
    subject: 'science'
  }, {
    title: 'Light and Matter',
    desc: 'Read Full Chapter',
    subject: 'science'
  }]
  @Output()
  showUserProfile: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  showContactProfile: EventEmitter<any> = new EventEmitter<any>();

  showAvatarClicked() {
    this.showUserProfile.emit(true);
  }
  contactAvatarClicked(event) {
    this.showContactProfile.emit(true);
  }
}
