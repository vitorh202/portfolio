import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgvideoComponent } from './bgvideo.component';

describe('BgvideoComponent', () => {
  let component: BgvideoComponent;
  let fixture: ComponentFixture<BgvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BgvideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BgvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
