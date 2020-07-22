import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {

  public activeTab: String = 'notifications';
  public selectedTab: String = 'Notifications';
  public lessonList: any[] = [];

  constructor(private appService: AppService, public dialog: MatDialog, public router: Router) { }

  ngOnInit() {
    //this.getQuestion('http://localhost:3000/getLessons');
  }

  public getQuestion(url): void {
    console.log(url);
    this.appService.getQuestion(url).subscribe(lesson => {
      if (this.selectedTab === 'Recent Question' || this.selectedTab === 'Top Question') {
        this.lessonList = lesson['lessons'];
      } else if (this.selectedTab = 'Top Tag') {
        this.lessonList = lesson;
      } else if (this.selectedTab = 'profile') {
        this.lessonList = lesson;
      }
    }
    );
  }
  routeFunction(ele) {
    this.appService.lesson.title = ele.title;
    this.appService.lesson.description = ele.description;
    this.appService.lesson.id = ele._id;
    this.appService.lesson.tags = ele.tag;
    this.appService.lesson.user = ele.username;
    this.router.navigate(['assignment']);
  }

  public changeTab(selected) {
    this.activeTab = selected;
    if (selected === 'assignments') {
      this.selectedTab = 'Assignments';
      //this.getQuestion('http://localhost:3000/getLessons');
    } else if (selected === 'lessons') {
      this.selectedTab = 'Lessons';
      //this.getQuestion('http://localhost:3000/getTopLessons');
    } else if (selected === 'notifications') {
      this.selectedTab = 'Notifications';
      //this.getQuestion('http://localhost:3000/getTopLessons');
    } else if (selected === 'progressCard') {
      this.selectedTab = 'Progress Card';
      //this.getQuestion('http://localhost:3000/getTopTags');
    } else if (selected === 'mywork') {
      this.selectedTab = 'My Work';
      //console.log(this.selectedTab);
    } else if (selected === 'corrections') {
      this.selectedTab = 'Corrections';
      //this.getQuestion('http://localhost:3000/getProfileDetails');
    } else if (selected === 'chat') {
      this.selectedTab = 'Chat';
      //this.getQuestion('http://localhost:3000/getProfileDetails');
    } else if (selected === 'profile') {
      this.selectedTab = 'Profile';
      //this.getQuestion('http://localhost:3000/getProfileDetails');
    }
  }
}
