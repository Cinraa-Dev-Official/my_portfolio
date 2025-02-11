import {Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {BoxComponent} from "../../components/box/box.component";
import {isPlatformBrowser, NgForOf, NgIf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../../components/popup/popup.component";

@Component({
  selector: 'app-angular',
  standalone: true,
    imports: [
        BoxComponent,
        NgForOf,
        NgIf
    ],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.scss'
})
export class AngularComponent implements OnInit{
  angularList:any[]=[];
  screenWidth: number = 0;

  isExtraLargeScreen: boolean = false;
  isLargeScreen: boolean = false;
  isMediumScreen: boolean = false;
  isLowScreen: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private dialog: MatDialog
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
      this.updateScreenFlags();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = (event.target as Window).innerWidth;
      this.updateScreenFlags();
    }
  }

  private updateScreenFlags() {
    this.isExtraLargeScreen = this.screenWidth > 1366;
    this.isLargeScreen = this.screenWidth <= 1366 && this.screenWidth > 1024;
    this.isMediumScreen = this.screenWidth <= 1024 && this.screenWidth > 500;
    this.isLowScreen = this.screenWidth <= 500;
  }

  ngOnInit(): void {
    this.angularList = [
      // project 1 --------------------------
      {
        prjTitle: "Institute 1",
        gitHubLink:"http://github.com",
        bgImg:"/assets/project/angular/angular.png",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad beatae commodi consequatur corporis dolor fugiat\n" +
          "      harum ipsum libero numquam praesentium quasi quo, reiciendis, repudiandae sint suscipit totam vel, vitae. Lorem\n" +
          "      ipsum dolor sit amet, consectetur adipisicing elit. A ad beatae commodi consequatur corporis dolor fugiat harum\n" +
          "      ipsum libero numquam praesentium quasi quo, reiciendis, repudiandae sint suscipit totam vel, vitae. Lorem ipsum\n" +
          "      dolor sit amet, consectetur adipisicing elit. A ad beatae commodi consequatur corporis dolor fugiat harum ipsum\n" +
          "      libero numquam praesentium quasi quo, reiciendis, repudiandae sint suscipit totam vel, vitae.",

        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/Angular.png",
            techName:"Angular"
          },
          // technology icon 2 **
          {
            src:"./assets/tech/java-2.png",
            techName:"Java"
          },
          // technology icon 3 **
          {
            src:"./assets/tech/spring-boot.png",
            techName:"Spring-boot"
          },
          // technology icon 4 **
          {
            src:"./assets/tech/bootstrap.png",
            techName:"Bootstrap"
          },
          // technology icon 5 **
          {
            src:"./assets/tech/Rust.png",
            techName:"Rust"
          },
        ]
      },

      // project 2 ----------------------------------
      {
        prjTitle: "Institute 2",
        gitHubLink:"http://github.com",
        bgImg:"/assets/project/angular/angular.png",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad beatae commodi consequatur corporis dolor fugiat\n" +
          "      harum ipsum libero numquam praesentium quasi quo, reiciendis, repudiandae sint suscipit totam vel, vitae. Lorem\n" +
          "      ipsum dolor sit amet, consectetur adipisicing elit. A ad beatae commodi consequatur corporis dolor fugiat harum\n" +
          "      ipsum libero numquam praesentium quasi quo, reiciendis, repudiandae sint suscipit totam vel, vitae. Lorem ipsum\n" +
          "      dolor sit amet, consectetur adipisicing elit. A ad beatae commodi consequatur corporis dolor fugiat harum ipsum\n" +
          "      libero numquam praesentium quasi quo, reiciendis, repudiandae sint suscipit totam vel, vitae.",

        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/Angular.png",
            techName:"Angular"
          },
          // technology icon 2 **
          {
            src:"./assets/tech/java-2.png",
            techName:"Java"
          },
          // technology icon 3 **
          {
            src:"./assets/tech/spring-boot.png",
            techName:"Spring-boot"
          },
          // technology icon 4 **
          {
            src:"./assets/tech/bootstrap.png",
            techName:"Bootstrap"
          },
          // technology icon 5 **
          {
            src:"./assets/tech/Rust.png",
            techName:"Rust"
          },
        ]
      },

      // project 3 ----------------------------------
      {
        prjTitle: "Institute 3",
        gitHubLink:"http://github.com",
        bgImg:"/assets/project/angular/angular.png",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad beatae commodi consequatur corporis dolor fugiat\n" +
          "      harum ipsum libero numquam praesentium quasi quo, reiciendis, repudiandae sint suscipit totam vel, vitae. Lorem\n" +
          "      ipsum dolor sit amet, consectetur adipisicing elit. A ad beatae commodi consequatur corporis dolor fugiat harum\n" +
          "      ipsum libero numquam praesentium quasi quo, reiciendis, repudiandae sint suscipit totam vel, vitae. Lorem ipsum\n" +
          "      dolor sit amet, consectetur adipisicing elit. A ad beatae commodi consequatur corporis dolor fugiat harum ipsum\n" +
          "      libero numquam praesentium quasi quo, reiciendis, repudiandae sint suscipit totam vel, vitae.",

        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/Angular.png",
            techName:"Angular"
          },
          // technology icon 2 **
          {
            src:"./assets/tech/java-2.png",
            techName:"Java"
          },
          // technology icon 3 **
          {
            src:"./assets/tech/spring-boot.png",
            techName:"Spring-boot"
          },
          // technology icon 4 **
          {
            src:"./assets/tech/bootstrap.png",
            techName:"Bootstrap"
          },
          // technology icon 5 **
          {
            src:"./assets/tech/Rust.png",
            techName:"Rust"
          },
        ]
      },

      // project 4 ----------------------------------
      {
        prjTitle: "Institute 4",
        gitHubLink:"http://github.com",
        bgImg:"/assets/project/angular/angular.png",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad beatae commodi consequatur corporis dolor fugiat\n" +
          "      harum ipsum libero numquam praesentium quasi quo, reiciendis, repudiandae sint suscipit totam vel, vitae. Lorem\n" +
          "      ipsum dolor sit amet, consectetur adipisicing elit. A ad beatae commodi consequatur corporis dolor fugiat harum\n" +
          "      ipsum libero numquam praesentium quasi quo, reiciendis, repudiandae sint suscipit totam vel, vitae. Lorem ipsum\n" +
          "      dolor sit amet, consectetur adipisicing elit. A ad beatae commodi consequatur corporis dolor fugiat harum ipsum\n" +
          "      libero numquam praesentium quasi quo, reiciendis, repudiandae sint suscipit totam vel, vitae.",

        tech: [
          // technology icon 1 **
          {
            src:"./assets/tech/Angular.png",
            techName:"Angular"
          },
          // technology icon 2 **
          {
            src:"./assets/tech/java-2.png",
            techName:"Java"
          },
          // technology icon 3 **
          {
            src:"./assets/tech/spring-boot.png",
            techName:"Spring-boot"
          },
          // technology icon 4 **
          {
            src:"./assets/tech/bootstrap.png",
            techName:"Bootstrap"
          },
          // technology icon 5 **
          {
            src:"./assets/tech/Rust.png",
            techName:"Rust"
          },

        ]
      }
    ];
  }

  openPopup(valueData:any) {
    this.dialog.open(PopupComponent,{
      width: '50%',
      height: '71%',
      data:{
        val:Array.isArray(valueData) ? valueData : [valueData]
      }
    })
  }

  openPopupSM(valueData: any) {
    this.dialog.open(PopupComponent,{
      width: '95%',
      height: '70vh',
      data:{
        val:Array.isArray(valueData) ? valueData : [valueData]
      }
    })
  }
}
