import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';

import { LocalStorageService } from 'ng2-webstorage';

import { ProfileService } from './profile.service';

import { Profile, ProfileStats } from './profile';

@Component({
  selector: 'tale-profile',
  templateUrl: 'tale-profile.component.html',
  styleUrls: ['tale-profile.component.css'],
  providers: [ LocalStorageService, ProfileService ]
})
export class ProfileComponent implements OnInit {
  profile: Observable<Profile>;
  profileStats: ProfileStats;

  constructor(
    private $l: LocalStorageService,
    private $p: ProfileService
  ) {

  }

  ngOnInit() {
    this.profile = this.$p.getProfile();
  }

  // Pass the index from ng2's iteration and return the index of profile.stats key
  profileStatsKey( i ): string {
    return _.capitalize( Object.keys(this.profile["stats"])[i] );
  }
}