import { TestBed } from '@angular/core/testing';

import { AttendanceWebsocketService } from './attendance-websocket.service';

describe('AttendanceWebsocketService', () => {
  let service: AttendanceWebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendanceWebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
