import { TestBed } from '@angular/core/testing';
import { RoomGuard } from './room-guard';

describe('RoomGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomGuard = TestBed.get(RoomGuard);
    expect(service).toBeTruthy();
  });
});
