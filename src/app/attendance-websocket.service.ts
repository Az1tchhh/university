import { Injectable } from '@angular/core';
import { StompRService, StompConfig } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AttendanceWebsocketService {
  constructor(private stompService: StompRService) {}

  // private init(): void {
  //   if (!this.stompService.connected()) {
  //     this.stompService.config = this.stompConfig();
  //
  //     this.stompService.initAndConnect();
  //   }
  // }
  //
  // private stompConfig(): StompConfig {
  //   const provider = function() {
  //     return new SockJS('http://127.0.0.1:8080/attendance-websocket');
  //   };
  //
  //   const config = new StompConfig();
  //   config.url = provider;
  //   config.heartbeat_in = 0;
  //   config.heartbeat_out = 0;
  //   config.reconnect_delay = 10000;
  //
  //   return config;
  // }
  //
  // getAttendanceStatus():Observable<Message>{
  //   this.init();
  //
  //   return this.stompService.subscribe('/topic/attendanceStatus');
  // }
}
