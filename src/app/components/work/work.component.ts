import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  public model;
  constructor() { 
    this.model = {};
    this.model.works = [];
    this.setWorkArray();
  }

  private setWorkArray(): void {
    this.model.works = [
      {
        "name": "Life_DB",
        "url": "https://github.com/sguha-work/LifeDB/releases/tag/1.12",
        "description": "Multi dimensional Flatfile Database system with NoSqlFormat , Json based, Row based locking, cache mechanism",
        "image": "work_LIFEDB.png"
      },
      {
        "name": "MySqlImpulse",
        "url": "https://github.com/sguha-work/MySqlImpulse",
        "description": "Database access layer along with sql injection prevention, and intelligent caching mechanism.",
        "image": "work_MySqlImpulse.png"
      },
      {
        "name": "LIFE_JS",
        "url": "https://github.com/sguha-work/LIFE_JS",
        "description": "Front end javascript framework influenced by AngulerJS and BackboneJS",
        "image": "work_LIFEJS.png"
      },
      {
        "name": "csv-array",
        "url": "https://www.npmjs.com/package/csv-array",
        "description": "CSV parser for node js.",
        "image": "work_CSVArray.png"
      },
      {
        "name": "status-check",
        "url": "https://github.com/sguha-work/MySqlImpulse",
        "description": "HTTP status check in bulk.",
        "image": "work_status-check.png"
      },
      {
        "name": "FusionCharts for WordPress",
        "url": "https://wordpress.org/plugins/fc-wp/",
        "description": "WordPress plugin to embed FusionCharts in website.",
        "image": "work_FC-WP.png"
      },
      {
        "name": "Small expense tracker",
        "url": "https://drive.google.com/open?id=0B7H8-Q6hAIvNVmo4Qm5LQkFMalE",
        "description": "Android application for tracking your daily small expenses.",
        "image": "work_smallexpense.png"
      },
      {
        "name": "LIFE chat",
        "url": "https://github.com/sguha-work/LIFEChat",
        "description": "Android application for text messaging",
        "image": "work_LIFEChat.png"
      }
    ];
  }
  ngOnInit() {
  }

}
